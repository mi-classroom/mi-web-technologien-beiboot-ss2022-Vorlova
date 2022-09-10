<script lang="ts">
	import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
	import * as SC from 'svelte-cubed';
	import { extractImageItems, handleJSON } from './file-actions';
	import * as OpenFont from '../assets/fonts/Open_Sans_Regular.json';
	import { BoxGeometry, Color, LineBasicMaterial, MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from 'three';

	let files: any;
	let images: any[] = [];
	let years: any[] = [];
	let itemYear: string[];
	const font = new Font( OpenFont );

	const imageBasicWidth = 20;
	const imageBasicHeight = 40;
	const imageBasicDepth = 1;

	// initial demo images
	images.push({
		src: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
		title: 'Title 1',
		sortingPosition: '2022',
		artist: 'Somebody'
	},
	{
		src: 'https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Title 2',
		sortingPosition: '2023-03',
		artist: 'Photographer'
	});

	const loader = new TextureLoader();

	// timeline base
	const lineMaterial = new LineBasicMaterial( { color: 0x222222 } );

	// ground plane for orientation
	const groundMaterial = new MeshStandardMaterial({ color: 0xb4b4b4 });
	let groundGeometry = new BoxGeometry( 5000, 0, 1024);

	// image planes
	let imageGeometry = new BoxGeometry( imageBasicWidth, imageBasicHeight, imageBasicDepth);
	const defaultImagePosition: [number, number, number] = [-1000, 50, 15];
	let imagePosition: [number, number, number] = defaultImagePosition.slice(); // slice is needed to assign the values not the array reference

	const cameraPosition: [number, number, number] = [-1020, 50, 15];
	
	// Image Information Geometry
	let textPlaneGeometry = new BoxGeometry( imageBasicWidth, imageBasicWidth, imageBasicDepth);
	const defaultTextPlanePosition: [number, number, number] = [-1000, 50, 15];
	let textPlanePosition: [number, number, number] = defaultTextPlanePosition.slice();

	let allTextGeo: any[] = [];
	const generateAllText = (image: any) => {
		const text: string =
			'Title: ' + image.title + 
			'\nDate: ' + image.date +
			'\nArtist: ' + image.artist +
			'\nMedium: ' + image.medium +
			'\nRepository: ' + image.repository;
		allTextGeo.push( new TextGeometry( text, {
			font: font,
			size: 2,
			height: 1,
		} ));
	}
	let allTextPosition: [number, number, number] = [ textPlanePosition[0], textPlanePosition[1], textPlanePosition[2] ];

	// Year 3d Texts
	let yearGeometries: any[] = [];
	let yearPosition: [number, number, number] = [ imagePosition[0], imagePosition[1], imagePosition[2] - 100 ];

	let materials: any[] = [];
	// TODO: define image type
	const loadImageTextures = (image: any) => {
		
        // replace url
        let url = image.src;
        let newUrl = url.replace( "imageserver-2022", "data-proxy/image.php?subpath=");

		materials.push([
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
			new MeshBasicMaterial({map: loader.load(newUrl)}),
		]);
	}

	const sortImages = (images: any) => {
    	images.sort((a: any, b: any) => {
        	return a.sortingPosition.localeCompare(b.sortingPosition);
    	});
	}

	const resetData = () => {
		images = [];
		allTextGeo = [];

		imagePosition = defaultImagePosition.slice();
		textPlanePosition = defaultTextPlanePosition.slice();
		allTextPosition = [ textPlanePosition[0], textPlanePosition[1], textPlanePosition[2] ];

		yearGeometries = [];
		years = [];
		yearPosition = [ imagePosition[0], imagePosition[1], imagePosition[2]- 100 ];
	}

	let handleSubmit = () => {
		resetData();

		handleJSON(files).then(
			function(value) {
				const extractedImages = extractImageItems(value, images);
				sortImages(extractedImages);
				images = extractedImages;
				materials = [];
			}
		);
	}

	const cleanUpYear = (itemDate: string) => {
		itemYear = itemDate.split('-');
		years.push(itemYear[0])
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
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

		{#each images as item, index}
			{loadImageTextures(item)}
			{cleanUpYear(item.sortingPosition)}
			{yearGeometries.push(
				new TextGeometry(
					years[index],
					{
						font: font,
						size: 12,
						height: 2,
					},
				)
			)}
			{#if years[index-1] != years[index] || years.length == 1}
				{imagePosition[0]=imagePosition[0]+150}
				{textPlanePosition[0]=textPlanePosition[0]+150}
				{allTextPosition[0]=allTextPosition[0]+150}

				{imagePosition[1]=defaultImagePosition[1]}
				{textPlanePosition[1]=defaultTextPlanePosition[1]}
				{allTextPosition[1]=textPlanePosition[1]}
				<SC.Mesh
					geometry={yearGeometries[index]}
					material={lineMaterial}
					position={yearPosition}
					rotation={[0, Math.PI / -2, 0]}
				/>
				{yearPosition[0]=yearPosition[0]+150}
			{:else}
				{imagePosition[1]=imagePosition[1]+ item.dimensions.height + 50}
				{textPlanePosition[1]=textPlanePosition[1]+ item.dimensions.height + 50}
				{allTextPosition[1]=allTextPosition[1]+ item.dimensions.height + 50}
			{/if}
			<SC.Mesh
				geometry={item.dimensions ? new BoxGeometry(item.dimensions.width, item.dimensions.height, imageBasicDepth) : imageGeometry}
				material={materials[index]}
				position={imagePosition}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>
			<SC.Mesh
				geometry={textPlaneGeometry}
				material={ new MeshBasicMaterial({ color: 0xFFFFFF }) }
				position={textPlanePosition}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>
			<!-- BEGIN Image Infos -->
			{generateAllText(item)}
			<SC.Mesh
				geometry={allTextGeo[index]}
				material={lineMaterial}
				position={allTextPosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			<!-- END image infos -->
		{/each}
		</SC.Canvas>
</div>

<style lang="scss" src="../assets/styles/scss/styles.scss"></style>
