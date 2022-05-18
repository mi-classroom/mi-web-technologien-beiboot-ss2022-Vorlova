<script lang="ts">
	// Mapping der Daten:
	// * Vorschaubild: images/overall/images/item[0]/sizes/medium/src
	// * Titel: metadata/title
	// * Datierung: metadata/date
	// * Art des Werks: medium (alle Angaben in Klammern bitte weglassen)
	// * Besitzer: repository

	let files: any;
	let images: any[] = [];

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
				images.push({
					src: item.images.overall.images[0].sizes.medium.src,
					title: item.metadata.title,
					date: item.metadata.date,
					medium: item.medium,
					repository: item.repository,
					sortingPosition: item.sortingNumber,
				});
			}
		});
	}

	let sortImages = () => {
		images.sort((a, b) => {
			return a.sortingPosition - b.sortingPosition;
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
</div>


<style lang="scss" src="../assets/styles/scss/styles.scss"></style>
