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
		date: '2022'
	},
	{
		src: 'https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Title 2',
		date: 'um 2022'
	});

	const loader = new THREE.TextureLoader();

	// define timeline base
	const lineMaterial = new THREE.LineBasicMaterial( { color: 0x222222 } );

	// define ground plane for orientation
	const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xb4b4b4 });
	let groundGeometry = new THREE.BoxGeometry( 2048, 0, 2048);

	// define image planes
	let imageGeometry = new THREE.BoxGeometry( 20, 40, 1);
	let imagePosition: [number, number, number] = [-1000, 50, 15];

	const cameraPosition: [number, number, number] = [-1020, 50, 15];

	//Signs:
	const signGeometry = new THREE.BoxGeometry( 35, 15, 1);let signPosition: [number, number, number] = [imagePosition[0], imagePosition[1]-30, imagePosition[2]];

	let signMaterial: any[];
	signMaterial = [
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
		new THREE.MeshBasicMaterial({ color: 0xffffff }),
	];

	// Sign Texts
	let textGeometries: any[] = [];
	const generateSignText = (image: any) => {
		const text: string = 'Title: '+image.title;
		textGeometries.push( new TextGeometry( text, {
			font: font,
			size: 2,
			height: 1,
		} ));
	}
	let textPosition: [number, number, number] = [ signPosition[0], signPosition[1]+2, signPosition[2]-16 ];

	// Year 3d Texts
	let yearGeometries: any[] = [];
	let yearPosition: [number, number, number] = [ imagePosition[0], imagePosition[1], imagePosition[2]-50 ];

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
		textGeometries = [];
		imagePosition = [-1000, 50, 15];
		signPosition = [imagePosition[0], imagePosition[1]-30, imagePosition[2]];
		textPosition = [ signPosition[0], signPosition[1]+2, signPosition[2]-16];
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
		itemYear = itemDate.split(' ')
		if (itemYear.length > 1) {
			if( !isNaN(
				parseInt(itemYear[0])
			)) {
				years.push(itemYear[0])
			} else {
				years.push(itemYear[1])
			}
		} else {
			years.push(itemDate)
		}
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
			{#if item.date != undefined}
				{cleanUpYear(item.date)}
				{yearGeometries.push(
					new TextGeometry(
						years[index],
						{
							font: font,
							size: 5,
							height: 2,
						},
					)
				)}
			{/if}
			<SC.Mesh
				geometry={yearGeometries[index]}
				material={lineMaterial}
				position={yearPosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			<SC.Mesh
				geometry={imageGeometry}
				material={materials[index]}
				position={imagePosition}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>
			<SC.Mesh
				geometry={signGeometry}
				material={signMaterial}
				position={signPosition}
				rotation={[0, Math.PI / 2, 0]}
				castShadow
			/>
			{generateSignText(item)}
			<SC.Mesh
				geometry={textGeometries[index]}
				material={lineMaterial}
				position={textPosition}
				rotation={[0, Math.PI / -2, 0]}
			/>
			{imagePosition[0]=imagePosition[0]+150}
			{signPosition[0]=signPosition[0]+150}
			{textPosition[0]=textPosition[0]+150}
			{yearPosition[0]=yearPosition[0]+150}
		{/each}
	</SC.Canvas>
</div>

<style lang="scss" src="../assets/styles/scss/styles.scss"></style>

<!-- TODOS:
*
* - Information is under the images
* - images are properly sized
*	- 
* - Images of the same year are next to each other
*
-->
