<script lang="ts">
	import * as THREE from 'three';
	import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
	import * as SC from 'svelte-cubed';
	import { extractImageItems, handleJSON } from './file-actions';
	import * as OpenFont from '../assets/fonts/Open_Sans_Regular.json';

	let files: any;
	let images: any[] = [];
	let years: any[] = [];
	let itemYear: string[];
	const font = new Font( OpenFont );

	// debug
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

	const loader = new THREE.TextureLoader();

	// define timeline base
	const lineMaterial = new THREE.LineBasicMaterial( { color: 0x222222 } );

	// define ground plane for orientation
	const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xb4b4b4 });
	let groundGeometry = new THREE.BoxGeometry( 5000, 0, 1024);

	// define image planes
	let imageGeometry = new THREE.BoxGeometry( 20, 40, 1);
	const defaultImagePosition: [number, number, number] = [-1000, 50, 15];
	let imagePosition: [number, number, number] = defaultImagePosition.slice();

	const cameraPosition: [number, number, number] = [-1020, 50, 15];

	// Texts
	let titleGeometries: any[] = [];
	const generateTitle = (image: any) => {
		const text: string = 'Title: ' + image.title;
		titleGeometries.push( new TextGeometry( text, {
			font: font,
			size: 2,
			height: 1,
		} ));
	}
	let titlePosition: [number, number, number] = [ imagePosition[0], imagePosition[1] -27, imagePosition[2]-16 ];

	let dateGeometries: any[] = [];
	const generateDate = (image: any) => {
		const text: string = 'Date: ' + image.date;
		dateGeometries.push( new TextGeometry( text, {
			font: font,
			size: 2,
			height: 1,
		} ));
	}
	let datePosition: [number, number, number] = [ titlePosition[0], titlePosition[1] -5, titlePosition[2] ];

	let artistGeometries: any[] = [];
	const generateArtist = (image: any) => {
		const text: string = 'Artist: ' + image.artist;
		artistGeometries.push( new TextGeometry( text, {
			font: font,
			size: 2,
			height: 1,
		} ));
	}
	let artistPosition: [number, number, number] = [ datePosition[0], datePosition[1] - 5, datePosition[2] ];

	let mediumGeometries: any[] = [];
	const generateMedium = (image: any) => {
		const text: string = 'Medium: ' + image.medium;
		mediumGeometries.push( new TextGeometry( text, {
			font: font,
			size: 2,
			height: 1,
		} ));
	}
	let mediumPosition: [number, number, number] = [ artistPosition[0], artistPosition[1] - 5, artistPosition[2] ];

	let repositoryGeometries: any[] = [];
	const generateRepository = (image: any) => {
		const text: string = 'Repository: ' + image.repository;
		repositoryGeometries.push( new TextGeometry( text, {
			font: font,
			size: 2,
			height: 1,
		} ));
	}
	let repositoryPosition: [number, number, number] = [ mediumPosition[0], mediumPosition[1] - 5, mediumPosition[2] ];


	// Year 3d Texts
	let yearGeometries: any[] = [];
	let yearPosition: [number, number, number] = [ imagePosition[0], imagePosition[1] -20, imagePosition[2] -75 ];

	let materials: any[] = [];
	// TODO: define image type
	const loadImageTextures = (image: any) => {
		
        // replace url
        let url = image.src;
        let newUrl = url.replace( "imageserver-2022", "data-proxy/image.php?subpath=");

		materials.push([
			// right
			new THREE.MeshBasicMaterial({ color: 0x000000 }),
			// left
			new THREE.MeshBasicMaterial({ color: 0x000000 }),
			// top
			new THREE.MeshBasicMaterial({ color: 0x000000 }),
			// bottom
			new THREE.MeshBasicMaterial({ color: 0x000000 }),
			// back ?
			new THREE.MeshBasicMaterial({ color: 0x000000 }),
			// front ?
			new THREE.MeshBasicMaterial({map: loader.load(newUrl)}),
		]);
	}

	const sortImages = (images: any) => {
    	images.sort((a: any, b: any) => {
        	return a.sortingPosition.localeCompare(b.sortingPosition);
    	});
	}

	const resetData = () => {
		images = [];

		titleGeometries = [];
		dateGeometries = [];
		artistGeometries = [];
		mediumGeometries = [];
		repositoryGeometries = [];

		imagePosition = defaultImagePosition.slice();
		titlePosition = [ imagePosition[0], imagePosition[1] -27, imagePosition[2]-16 ];
		datePosition = [ titlePosition[0], titlePosition[1] - 5, titlePosition[2] ];
		artistPosition = [ datePosition[0], datePosition[1] - 5, datePosition[2] ];
		mediumPosition = [ artistPosition[0], artistPosition[1] - 5, artistPosition[2] ];
		repositoryPosition = [ mediumPosition[0], mediumPosition[1] - 5, mediumPosition[2] ];

		yearGeometries = [];
		years = [];
		yearPosition = [ imagePosition[0], imagePosition[1], imagePosition[2]-50 ];
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
		background={new THREE.Color(180, 180, 180)}
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
						size: 10,
						height: 2,
					},
				)
			)}
			{#if years[index-1] != years[index] || years.length == 1}
				{imagePosition[0]=imagePosition[0]+150}
				{titlePosition[0]=titlePosition[0]+150}
				{datePosition[0]=datePosition[0]+150}
				{artistPosition[0]=artistPosition[0]+150}
				{mediumPosition[0]=mediumPosition[0]+150}
				{repositoryPosition[0]=repositoryPosition[0]+150}

				{imagePosition[1]=defaultImagePosition[1]}
				{titlePosition[1]=imagePosition[1] - 25}
				{datePosition[1]=titlePosition[1] - 5}
				{artistPosition[1]=datePosition[1] - 5}
				{mediumPosition[1]=artistPosition[1] - 5}
				{repositoryPosition[1]=mediumPosition[1] - 5}
				<SC.Mesh
					geometry={yearGeometries[index]}
					material={lineMaterial}
					position={yearPosition}
					rotation={[0, Math.PI / -2, 0]}
				/>
				{yearPosition[0]=yearPosition[0]+150}
			{:else}
				{imagePosition[1]=imagePosition[1]+100}
				{titlePosition[1]=titlePosition[1]+100}
				{datePosition[1]=datePosition[1]+100}
				{artistPosition[1]=artistPosition[1]+100}
				{mediumPosition[1]=mediumPosition[1]+100}
				{repositoryPosition[1]=repositoryPosition[1]+100}
			{/if}
			<SC.Mesh
				geometry={imageGeometry}
				material={materials[index]}
				position={imagePosition}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>
			<!-- BEGIN Image Infos -->
			{generateTitle(item)}
			{generateArtist(item)}
			{generateMedium(item)}
			{generateRepository(item)}
			{generateDate(item)}
			<SC.Mesh
				geometry={titleGeometries[index]}
				material={lineMaterial}
				position={titlePosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			<SC.Mesh
				geometry={dateGeometries[index]}
				material={lineMaterial}
				position={datePosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			<SC.Mesh
				geometry={artistGeometries[index]}
				material={lineMaterial}
				position={artistPosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			<SC.Mesh
				geometry={mediumGeometries[index]}
				material={lineMaterial}
				position={mediumPosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			<SC.Mesh
				geometry={repositoryGeometries[index]}
				material={lineMaterial}
				position={repositoryPosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			<!-- END image infos -->
		{/each}
		</SC.Canvas>
</div>

<style lang="scss" src="../assets/styles/scss/styles.scss"></style>

<!-- TODOS:
*
* X Information is under the images
*	X remove brackets from title
*	X add Künstler (InvolvedPersons[0].name)
*	X add medium (alle Angaben in Klammern bitte weglassen)
*	X add repository
* - images are properly sized
*	- 
* X Images of the same year are next to each other
*
-->
