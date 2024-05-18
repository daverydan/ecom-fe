<template>
	<div class="bg-white">
		<div class="mx-auto" style="max-width: 1440px">
			<HeroSlider />
		</div>
	</div>

	<div class="container-sm py-5">
		<ShopByFour title="Shop by Category" url="categories" :items="categoriesCarousel" />
	</div>

	<div v-if="randomProduct" class="container-sm py-5">
		<SingleProductDisplay :item="randomProduct" />
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import HeroSlider from '../components/HeroSlider.vue';
import { categoriesCarousel, products } from '../data.js';
import ShopByFour from '../components/ShopByFour.vue';
import SingleProductDisplay from '../components/SingleProductDisplay.vue';

onMounted(() => {
	// fetch('https://fakestoreapi.com/products/categories')
	// fetch('https://fakestoreapi.com/products')
	// fetch('https://fakestoreapi.com/products/1')
	// 	.then(res => res.json())
	// 	.then(json => {
	// 		console.log(json);
	// 	});
})

const randomProduct = computed(() => products[Math.floor(Math.random() * products.length)]);
</script>
