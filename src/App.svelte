<script>
	// Mapping der Daten:
	// * Vorschaubild: images/overall/images/item[0]/sizes/medium/src
	// * Titel: metadata/title
	// * Datierung: metadata/date
	// * Art des Werks: medium (alle Angaben in Klammern bitte weglassen)
	// * Besitzer: repository

	let files;
	let images = [];

	// debug
	images.push({
		src: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
		title: 'Title 1',
		artist: 'Artist'
	},
	{
		src: 'https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		title: 'Title 2',
		artist: 'Artist'
	});

	let handleSubmit = () => {
		handleJSON().then(
			function(value) {
				extractImageItems(value);
			}
		);
	}

	let handleJSON = async () => {
		let jsonObj;
		let text = await files[0].text();
		jsonObj = JSON.parse(text);

		return jsonObj;
	}

	let extractImageItems = (jsonObj) => {
		jsonObj.items.forEach((item, index) => {
			if(index < 30) {
				console.log(index);
				images.push({
					src: item.images.overall.images[0].sizes.medium.src,
					title: item.metadata.title,
					artist: 'Lucas Cranach'
				});
				images = images;
			}
		});
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
<div>
	<ul class="gallery">
		{#each images as item}
			<li>
				<div>
					<img
					class=galleryItem
					alt="Preview of {item.title} by {item.artist}."
					src={item.src}
					>
				</div>
			</li>
		{/each}	
	</ul>
</div>


<style lang="scss" src="./assets/styles/scss/styles.scss"></style>
