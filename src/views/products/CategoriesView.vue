<template>
	<div class="container py-5">
		<h1>Categories</h1>

		<ShopByFour
			:items="womensProducts.slice(0, 4)"
			class="mt-5"
			title="Women's Clothing"
			url="womens-clothing"
		/>

		<ShopByFour
			:items="mensProducts"
			class="mt-5"
			title="Men's Clothing"
			url="mens-clothing"
		/>

		<ShopByFour
			:items="jewelryProducts"
			class="mt-5"
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
import ShopByFour from '../../components/ShopByFour.vue';
import { womensProducts, mensProducts, jewelryProducts, electronicsProducts } from '../../data.js'
//
</script>
