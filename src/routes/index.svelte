<script lang="ts">
	import { handleSubmit, years } from './file-actions';
	import {
		calculatePosition,
		calculatePositionUp,
		generateAllText,
		generateYearGeometry,
		groundGeometry,
		groundMaterial,
		imageGeometry,
		lineMaterial,
		shiftYear,
		textPlaneGeometry } from './scene-creation';
	import {
		allTextPosition as globalAllTextPosition,
		defaultCameraPosition,
		defaultImagePosition,
		imageCollections,
		imagePosition as globalImagePosition,
		materials as globalMaterials,
		textPlanePosition as globalTextPlanePosition,
		yearGeometries as storedYearGeometries,
		yearPosition as globalYearPosition,
	} from './stores';

	import { BoxGeometry, Color, MeshBasicMaterial, TextureLoader } from 'three';
	import type { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

	import * as SC from 'svelte-cubed';
	import { filterRelated } from './image-filters';

	let allTextPositionList: [number, number, number][] = [];
	let allTextPosition: [number, number, number];

	let imagePositionList: [number, number, number][] = [];
	let imagePosition: [number, number, number];
	
	let relatedImagePosition: [number, number, number];

	let textPlanePositionList: [number, number, number][] = [];
	let textPlanePosition: [number, number, number];

	let yearPositionList: [number, number, number][] = [];
	let yearPosition: [number, number, number];

	let materialsListChronological: any[] = [];
	let materialsListRelated: any[] = [];

	let yearGeometries: any[] = [];
	let chronologicalImages: any[] = [];
	let allTextGeo: TextGeometry;
	let cameraPosition: any[] = defaultCameraPosition;
	let files: any;
	let relatedImages: any[]

	const basicDepth = 1;

	// Subscribe to stores
	imageCollections.chronologicalImages.subscribe(
		value => {
			chronologicalImages = value;
		}
	)
	globalAllTextPosition.subscribe(
		value => {
			allTextPosition = value;
		}
	)
	globalImagePosition.subscribe(
		value => {
			imagePosition = value;
		}
	)
	globalTextPlanePosition.subscribe(
		value => {
			textPlanePosition = value;
		}
	)
	globalYearPosition.subscribe(
		value => {
			yearPosition = value;
		}
	)
	storedYearGeometries.subscribe(
		value => {
			yearGeometries = value;
		}
	)

	const loader = new TextureLoader();
	const loadImageTextures = (images: any) => {
		const imageMaterials: any[] = [];
		images.forEach((image: any) => {
			// replace url
			const url = image.src;
			const newUrl = url.replace( "imageserver-2022", "data-proxy/image.php?subpath=");

			imageMaterials.push([
				// right
				new MeshBasicMaterial({ color: 0x000000 }),
				// left
				new MeshBasicMaterial({ color: 0x000000 }),
				// top
				new MeshBasicMaterial({ color: 0x000000 }),
				// bottom
				new MeshBasicMaterial({ color: 0x000000 }),
				// back ?
				new MeshBasicMaterial({ color: 0x000000 }),
				// front ?
				// new MeshBasicMaterial({ color: 0x000000 }),
				new MeshBasicMaterial({map: loader.load(newUrl)}),
			]);
		});
		return imageMaterials;
	}
</script>

<form on:submit|preventDefault={() => handleSubmit(files)}>
	<!-- the `submit` event's default is prevented,
	     so the page won't reload -->
	<label for="source-file">Upload a JSON source for the images:</label>
	<input
		accept="application/JSON"
		bind:files
		id="source-file"
		name="source-file"
		type="file"
	/>
	<button type="submit">Use this file</button>
</form>

<h1>Gallery:</h1>
<div>
	<button type="button" on:click={() => {cameraPosition = defaultCameraPosition}}>Reset Camera to Start</button>
</div>

<div class="gallery">
	<SC.Canvas
		antialias
		background={new Color(180, 180, 180)}
		shadows
	>
		<SC.PerspectiveCamera
			position={cameraPosition}
			target={ defaultImagePosition }
		/>
		<SC.OrbitControls enableZoom={true} enableRotate={true} maxPolarAngle={Math.PI * 0.51}/>
		<SC.AmbientLight intensity={1} />
		<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} shadow={{ mapSize: [2048, 2048] }}/>

		<SC.Mesh
			geometry={groundGeometry}
			material={groundMaterial}
			position={[0, 0, 500]}
			receiveShadow
		/>

		{materialsListChronological = loadImageTextures(chronologicalImages)}
		{globalMaterials.set([...materialsListChronological])}

		{#each chronologicalImages as item, index}
			{console.log("Loading " + index + "of " + chronologicalImages.length)}

			{relatedImages = filterRelated(item, chronologicalImages)}
			{materialsListRelated = loadImageTextures(relatedImages)}

			<!-- SET UP:  -->
			{yearGeometries.push(
				generateYearGeometry(
					years[index]
				)
			)}

			<!-- BEGIN Image Infos -->
			{allTextGeo = generateAllText(item)}
			{allTextPositionList.push(allTextPosition)}
			{textPlanePositionList.push(textPlanePosition)}
			{imagePositionList.push(imagePosition)}
			{yearPositionList.push(yearPosition)}
			
			<!-- IF different year, add image behind, else above -->
			{#if years.length === 1 || years[index-1] != years[index]}
				{calculatePosition('back', chronologicalImages, item, index)}
				{shiftYear()}
			{:else}
				{calculatePosition('side', chronologicalImages, item, index)}
			{/if}

			<SC.Mesh
				geometry={yearGeometries[index]}
				material={lineMaterial}
				position={yearPositionList[index]}
				rotation={[0, Math.PI / -2, 0]}
			/>

			<SC.Mesh
				geometry={textPlaneGeometry}
				material={ new MeshBasicMaterial({ color: 0xFFFFFF }) }
				position={textPlanePositionList[index]}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>
			<SC.Mesh
				geometry={allTextGeo}
				material={lineMaterial}
				position={allTextPositionList[index]}
				rotation={[0, Math.PI / -2, 0]}
			/>

			<!-- END image infos -->
			<SC.Mesh
				geometry={item.dimensions ? new BoxGeometry(item.dimensions.width, item.dimensions.height, basicDepth) : imageGeometry}
				material={materialsListChronological[index]}
				position={imagePositionList[index]}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>

			<!-- Display Related Images -->
			{#if relatedImages && relatedImages.length > 0}
				{relatedImagePosition = [...imagePositionList[index]]}
				{#each relatedImages as relatedItem, rIndex}
					{relatedImagePosition = calculatePositionUp(relatedImagePosition, item, relatedImages, relatedItem, rIndex)}
					<SC.Mesh
						geometry={
							relatedItem.dimensions ?
							new BoxGeometry(
								relatedItem.dimensions.width /2,
								relatedItem.dimensions.height /2,
								basicDepth,
							) :
							imageGeometry
						}
						material={materialsListRelated[rIndex]}
						position={[...relatedImagePosition]}
						rotation={[0, Math.PI / 2, 0]}
					/>
				{/each}
			{/if}
		{/each}
	</SC.Canvas>
</div>

<style lang="scss" src="../assets/styles/scss/styles.scss"></style>
