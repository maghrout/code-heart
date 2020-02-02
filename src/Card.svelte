<script>
 export let cardData; 
</script>

<style type="text/scss">
$base-dark: #000;
$base-light: #fff;
$base-brand: #adced7;

@keyframes rotate-scale-up-ver {
  0% {
    transform: scale(1) rotateY(0);
  }
  100% {
    transform: scale(2) rotateY(180deg) translate(50%, 50%);
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
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
  
  background-color: $base-light;
  
  transform-style: preserve-3d;
  transform-origin: center right;
}

.heart__item--hidden {
  opacity: 0;
}

.heart__face {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 0.3vw;
  padding-right: 0.3vw;
  padding-left: 0.3vw;  
  backface-visibility: hidden;
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


<div class="heart__item {cardData.hidden ? 'heart__item--hidden' : ''}" data-role="{cardData.frontFace ? cardData.frontFace.role : ''}">
{#if cardData.frontFace}
  <div class="heart__face heart__face--front">
    <div class="heart__image-wrapper">
      <img src="{cardData.frontFace.image}" alt="Jane Doe Profile" class="heart__image">
    </div>
    <span class="heart__name">{cardData.frontFace.name}</span>
    <button class="heart__button">{cardData.frontFace.buttonText}</button>
  </div>
{/if}

{#if cardData.backFace}
  <div class="heart__face heart__face--back"></div>
{/if}
</div>
