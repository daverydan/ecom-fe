<template>
	<div class="bg-white">
		<div class="mx-auto" style="max-width: 1440px">
			<HeroSlider />
		</div>
	</div>
	<div class="container-sm py-5">
		<ShopByFour title="Shop by Category" url="categories" :items="categoriesCarousel" />
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import HeroSlider from '../components/HeroSlider.vue';
import { categoriesCarousel } from '../data.js';
import ShopByFour from '../components/ShopByFour.vue';

onMounted(() => {
	// fetch('https://fakestoreapi.com/products/1')
	// fetch('https://fakestoreapi.com/products/categories')
	// fetch('https://fakestoreapi.com/products')
	// 	.then(res => res.json())
	// 	.then(json => {
	// 		console.log(item.value);
	// 	});
})
</script>
