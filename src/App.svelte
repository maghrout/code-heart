<script>
	import Card from './Card.svelte';
	export let data;
</script>

<style type="text/scss">
	$base-dark: #000;
	$base-light: #fff;
	$base-brand: #adced7;

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-color: $base-brand;
		font-size: 16px;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.heart {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(9, 5em);
		grid-template-rows: repeat(8, 5.7em);
	}
</style>

<main>
	<div class="heart">
		{#each data as card}
			<Card cardData={card}/>
		{/each}
	</div>
</main>