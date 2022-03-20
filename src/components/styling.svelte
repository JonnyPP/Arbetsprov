<script>
	import Buttons from "./buttons.svelte";
	import Form from "./dropdown.svelte";
	import Colorpicker from "./colorpicker.svelte"
	import MediaQuery from "svelte-media-query";
	import Description from "./description.svelte"
</script>



<MediaQuery query="(min-width: 800px)" let:matches>
    {#if matches}
    <div class="container-desk">
		<Form />
		<Buttons />
		<Colorpicker></Colorpicker> 
		<Description></Description>
    </div>
    {/if}
</MediaQuery>
<MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
	<div class="container-mobile">
		<Buttons />
		<Form />

	</div>
    {/if}
</MediaQuery>




<style>

@media screen and (max-width: 800px) {
	.container-desk{
		display: flex;
		flex-direction: row-reverse;
		overflow: hidden;
		
	}
}
    @media screen and (min-width: 800px) {
		.container-desk{
		display: flex;
		flex-direction: column;
		width: 100%;
		position: absolute;
    	top: 6%;
    	left: 63%;
	}
}


@media screen and (max-width: 800px) {
	.container-mobile {
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
	}
}
    @media screen and (min-width: 800px) {
		.container-mobile {
		display: flex;
		flex-direction: row-reverse;
		width: 100%;
		overflow: hidden;
	}
}

</style>


