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

	.heart__item {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: $base-light;
		padding-top: 0.3vw;
		padding-right: 0.3vw;
		padding-left: 0.3vw;
	}

	.heart__item--hidden {
		opacity: 0;
	}

	.heart__image-wrapper {
		overflow: hidden;
	}

	.heart__image {
		object-fit: cover;
	}

	.heart__name {
		display: block;
		padding-top: 0.7em;
		padding-bottom: 0.7em;
		background-color: $base-light;
		font-family: 'Arial', sans-serif;
		font-size: 0.5rem;
		text-align: center;
	}

	.heart__button {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		padding: 0;
		background-color: transparent;
		font-size: 0;
		line-height: 0;
		appearance: none;
		cursor: pointer;
		z-index: 10;
	}
</style>

<main>
	<div class="heart">
  {#each data as card}
    <Card cardData={card}/>
  {/each}
	</div>
</main>