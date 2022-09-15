<script lang="ts">
	import { handleSubmit, years } from './file-actions';
	import { calculatePosition, generateAllText, generateYearGeometry, groundGeometry, groundMaterial, imageGeometry, lineMaterial, resetData, shiftYear, textPlaneGeometry } from './scene-creation';
	import {
		allTextPosition as globalAllTextPosition,
		defaultCameraPosition, imageCollections,
		imagePosition as globalImagePosition,
		materials as globalMaterials,
		textPlanePosition as globalTextPlanePosition,
		yearGeometries as storedYearGeometries,
		yearPosition as globalYearPosition,
	} from './stores';

	import { BoxGeometry, Color, MeshBasicMaterial, TextureLoader } from 'three';
	import type { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

	import * as SC from 'svelte-cubed';

	let allTextPositionList: [number, number, number];
	let allTextPosition: [number, number, number];

	let imagePositionList: [number, number, number];
	let imagePosition: [number, number, number];

	let textPlanePositionList: [number, number, number];
	let textPlanePosition: [number, number, number];

	let yearPositionList: [number, number, number][] = [];
	let yearPosition: [number, number, number];

	let materialsList: any[] = [];

	let yearGeometries: any[] = [];
	let chronologicalImages: any[] = [];
	let allTextGeo: TextGeometry;
	let cameraPosition: any[] = defaultCameraPosition;
	let files: any;

	const basicDepth = 1;
	
	let displayMode: string;
	const displayBy = (tag?: string ) => {
		switch (tag) {
			case "RELATED_IN_CONTENT_TO": {
				console.log("RELATED_IN_CONTENT_TO");
				break;
			}
			case "SIMILAR_TO":{
				console.log("SIMILAR_TO");
				break;
			}
			case "BELONGS_TO":{
				console.log("BELONGS_TO")
				break;
			}
			case "PART_OF_SAME_WORK":{
				console.log("PART_OF_SAME_WORK")
				break;
			}
			default:{
				console.log("SORTING_POSITION");
				resetData(chronologicalImages);
				displayMode = "chronological"
			}
		}
	}

	// Subscribe to stores
	globalAllTextPosition.subscribe(
		value => {
			allTextPosition = value;
		}
	)
	imageCollections.chronologicalImages.subscribe(
		value => {
			chronologicalImages = value;
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
		console.log("Loaded Textures")
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
	<h2>Display Modes:</h2>
	<button type="button" on:click={() => displayBy()}>Chronological</button>
	<button type="button" on:click={() => displayBy("RELATED_IN_CONTENT_TO")}>Related in Content</button>
	<button type="button" on:click={() => displayBy("SIMILAR_TO")}>Similar</button>
	<button type="button" on:click={() => displayBy("BELONGS_TO")}>Belonging Together</button>
	<button type="button" on:click={() => displayBy("PART_OF_WORK")}>Part of same work</button>
</div>
<div class="gallery">
	<SC.Canvas
		antialias
		background={new Color(180, 180, 180)}
	>
		<SC.PerspectiveCamera position={cameraPosition} target={ [10, 25, 0] }/>
		<SC.OrbitControls enableZoom={true} enableRotate={true}/>
		<SC.AmbientLight intensity={1} />
		<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} shadow={{ mapSize: [2048, 2048] }}/>

		<SC.Mesh geometry={groundGeometry} material={groundMaterial} position={[0, 0, 0]} receiveShadow/>
			{materialsList = loadImageTextures(chronologicalImages)}
			{globalMaterials.set([...materialsList])}
			{#if displayMode === "chronological"}
				{#each chronologicalImages as item, index}
					<!-- SET UP:  -->
					{yearGeometries.push(
						generateYearGeometry(
							years[index]
						)
					)}

					<!-- BEGIN Image Infos -->
					{allTextGeo = generateAllText(item)}
					{allTextPositionList = [...allTextPosition]}
					{textPlanePositionList = [...textPlanePosition]}
					{imagePositionList = [...imagePosition]}					
					{yearPositionList.push([...yearPosition])}

					<SC.Mesh
						geometry={textPlaneGeometry}
						material={ new MeshBasicMaterial({ color: 0xFFFFFF }) }
						position={textPlanePositionList}
						rotation={[0, Math.PI / 2, 0]}
						castShadow
					/>
					<SC.Mesh
						geometry={allTextGeo}
						material={lineMaterial}
						position={allTextPositionList}
						rotation={[0, Math.PI / -2, 0]}
					/>
					<!-- END image infos -->
					<SC.Mesh
						geometry={item.dimensions ? new BoxGeometry(item.dimensions.width, item.dimensions.height, basicDepth) : imageGeometry}
						material={materialsList[index]}
						position={imagePositionList}
						rotation={[0, Math.PI / 2, 0]}
						castShadow
					/>
					<!-- IF different year, add image behind, else above -->
					{#if years[index-1] != years[index] || years.length == 1}
						{calculatePosition('back', chronologicalImages, item, index)}
						<SC.Mesh
							geometry={yearGeometries[index]}
							material={lineMaterial}
							position={yearPositionList[index]}
							rotation={[0, Math.PI / -2, 0]}
						/>
						{shiftYear()}
					{:else}
						{calculatePosition('up', chronologicalImages, item, index)}
					{/if}
					{console.log("Loading " + index + "of " + chronologicalImages.length)}
				{/each}
			{/if}
		</SC.Canvas>
</div>

<style lang="scss" src="../assets/styles/scss/styles.scss"></style>
