<script>
	import Card from './Card.svelte';
	export let data;
	let button = false;

	function handleAllCards() {
		var allCards = document.querySelectorAll('[data-role]');

		allCards.forEach((card) => {
			card.removeAttribute('disabled');
			card.classList.remove('disabled');
		})
	}

	function handleClick(role) {
		var allCards = document.querySelectorAll('[data-role]');

		allCards.forEach((card) => {
			if(card.dataset.role !== role) {
				card.setAttribute('disabled', '');
				card.classList.add('disabled');
			} else {
				card.removeAttribute('disabled');
				card.classList.remove('disabled');
			}
		})
	}
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
		justify-content: space-around;
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
		grid-template-columns: repeat(11, 5em);
		grid-template-rows: repeat(11, 5.7em);
	}

	:global(.disabled) {
		opacity: 0.3;
	}

	.button-container {
		display: grid;
		grid-template-rows: 1fr;
    	grid-column-gap: 10px;
		grid-template-columns: repeat(8, 1fr);
		margin: 20px 0;
	}

	:global(.button) {
		&+& {
			padding-left: 10px;
		}
	}
</style>

<main>
	<div class="button-container">
		<button class:button on:click={handleAllCards} type="button">All</button>
		<button class:button on:click={() => handleClick("Developer")} type="button">Developers</button>
		<button class:button on:click={() => handleClick("Designer")} type="button">Designers</button>
		<button class:button on:click={() => handleClick("Delivery")} type="button">Delivery</button>
		<button class:button on:click={() => handleClick("QA")} type="button">QA</button>
		<button class:button on:click={() => handleClick("Conversion")} type="button">Conversion</button>
		<button class:button on:click={() => handleClick("Support")} type="button">Support</button>
		<button class:button on:click={() => handleClick("Founder")} type="button">Founders</button>
	</div>
	<div class="heart">
		{#each data as card}
			<Card cardData={card}/>
		{/each}
	</div>
</main>