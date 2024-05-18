<template>
	<div class="container py-5">
		<h1 class="mb-5">Categories</h1>

		<SingleProductDisplay :item="randomProduct" />

		<ShopByFour
			:items="womensProducts.slice(0, 4)"
			class="py-5"
			title="Women's Clothing"
			url="womens-clothing"
		/>

		<ShopByFour
			:items="mensProducts"
			class="py-5"
			title="Men's Clothing"
			url="mens-clothing"
		/>

		<ShopByFour
			:items="jewelryProducts"
			class="py-5"
			title="Jewelry"
			url="jewelry"
		/>

		<ShopByFour
			:items="electronicsProducts.slice(0, 4)"
			class="mt-5"
			title="Electronics"
			url="electronics"
		/>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ShopByFour from '../../components/ShopByFour.vue';
import { womensProducts, mensProducts, jewelryProducts, electronicsProducts, categoriesCarousel, products } from '../../data.js'
import SingleProductDisplay from '../../components/SingleProductDisplay.vue';
const randomProduct = computed(() => products[Math.floor(Math.random() * products.length)]);
</script>
