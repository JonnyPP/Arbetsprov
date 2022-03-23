<script>
	import Description from "./components/description.svelte";
	import Colorpicker from "./components/colorpicker.svelte";
	import Carousels from "./components/carousel.svelte";
	import Prices from "./components/prices.svelte";
	import MediaQuery from "./components/mediaquery.svelte";
</script>

<div class="main-container">
	<Carousels />
	<MediaQuery query="(max-width: 800px)" let:matches>
		{#if matches}
			<Prices />
			<Colorpicker />
			<Description />
		{/if}
	</MediaQuery>
</div>

<style>
	@media screen and (max-width: 800px) {
		.main-container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
	@media screen and (min-width: 800px) {
		.main-container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>
