<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';

	let files: any;
	let images: any[] = [];

	// define timeline base
	let lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
	let lineGeometry = new THREE.BoxGeometry( 100, 0.5, 0.5, 10, 10, 10);

	// define ground plane for orientation
	let groundMaterial = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
	let groundGeometry = new THREE.BoxGeometry( 150, 0, 150);

	// define image planes
	// let texture = new THREE.TextureLoader().load( "textures/water.jpg" );
	// let imageMaterial = new THREE.MeshNormalMaterial( texture );
	let imageGeometry = new THREE.BoxGeometry( 30, 50, 0.5);
	let imagePosition: [number, number, number] = [-60, 27.5, 15];

	// debug
	images.push({
		src: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
		title: 'Title 1',
	},
	{
		src: 'https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Title 2',
	});

	let handleSubmit = () => {
		handleJSON().then(
			function(value) {
				extractImageItems(value);
				sortImages();
				images = images;
			}
		);
	}

	let handleJSON = async () => {
		let jsonObj;
		let text = await files[0].text();
		jsonObj = JSON.parse(text);

		return jsonObj;
	}

	let extractImageItems = (jsonObj: {
        items: [any],
    }) => {
		images = [];
		jsonObj.items.forEach(item => {
			if(item.isBestOf == true) {
				let medium: string = removeBrackets(item.medium);

				images.push({
					src: item.images.overall.images[0].sizes.medium.src,
					title: item.metadata.title,
					date: item.metadata.date,
					medium,
					repository: item.repository,
					sortingPosition: item.sortingNumber,
				});
			}
		});
	}

	let sortImages = () => {
		images.sort((a, b) => {
			return a.sortingPosition.localeCompare(b.sortingPosition);
		});
	}

	let removeBrackets = (entry: string): string => {
		return entry.split('(')[0].split('[')[0];
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
	<SC.Canvas antialias background={new THREE.Color('papayawhip')}>
		<SC.Mesh geometry={groundGeometry} material={groundMaterial} position={[0, 0, 0]} />
		<SC.Mesh geometry={lineGeometry} material={lineMaterial}  position={[0, 1, 0]} />
		<SC.PerspectiveCamera position={[50, 50, 75]} target={[10, 25, 0]}/>
		<SC.OrbitControls enableZoom={true} enableRotate={true}/>
		{#each images as item}
			<SC.Mesh
				geometry={imageGeometry}
				material={
					new THREE.LineBasicMaterial( { color: 0x0000ff } )
				}
				position={imagePosition}
				rotation={[0, Math.PI / 2, 0]} />
				{console.log(imagePosition)}
				{imagePosition[0]=imagePosition[0]+10}
		{/each}
	</SC.Canvas>
</div>

<!-- <div>
	<ul>
		{#each images as item}
			<li>
				<div id="image-frame">
					<img
					class=galleryItem
					alt="Preview of {item.title}"
					src={item.src}
					>
				</div>
				<div id="image-data">
					<b>{item.title}</b>, {item.date}<br>
					{item.medium}<br>
					<i>{item.repository}</i>
				</div>
			</li>
		{/each}
	</ul>
</div> -->

<style lang="scss" src="../assets/styles/scss/styles.scss"></style>
