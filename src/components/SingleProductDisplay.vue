<template>
	<h3 class="mb-4">Featured Product</h3>
	<div class="single-product-display row">
		<div class="col-md-3">
			<img class="w-100 mb-4 rounded" :src="item.image" :alt="item.title" width="300">
		</div>
		<div class="col-md-9">
			<div class="d-flex align-items-center">
				<div v-html="item.rating.stars"></div>
				<p class="mb-2 ms-1">({{ item.rating.count }})</p>
			</div>
			<h4 class="lh-base mb-3">{{ item.title }}</h4>
			<p class="lh-lg">{{ item.description }}</p>
			<p class="mb-4">Price: ${{ item.price }}</p>
			<a href="#" class="btn btn-primary">Buy Now</a>
		</div>
	</div>
</template>

<script setup>
defineProps({
	item: Object,
})
</script>
