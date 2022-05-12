<script>
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
	}
	);
</script>

<h1>Gallery:</h1>
<div>
	<ul class="gallery">
		{#each images as item}
			<li>
				<div>
					<img
					class=galleryItem
					alt="Thumbnail of {item.title} by {item.artist}."
					src={item.src}
					>
				</div>
			</li>
		{/each}	
	</ul>
</div>


<style lang="scss" src="./assets/styles/scss/styles.scss"></style>
