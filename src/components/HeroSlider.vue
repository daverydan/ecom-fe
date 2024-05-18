<template>
	<div id="product-hero-carousel" class="carousel slide bg-white" data-bs-ride="true">
		<!-- Indicators -->
		<div class="carousel-indicators mx-auto rounded-pill" style="background: rgba(0,0,0,.1); width: 150px;">
			<button v-for="(item, i) in heroSliderProducts.length" type="button" data-bs-target="#product-hero-carousel" :data-bs-slide-to="i" :class="{ active: i == 0 }" aria-current="true" :aria-label="`Slide ${i}`"></button>
		</div>
		<!-- Slides -->
		<div class="carousel-inner">
			<div v-for="(item, i) in heroSliderProducts" :key="item.id" class="carousel-item" :class="{ active: i == 0 }">
				<div class="container-fluid">
					<div class="row text-black">
						<div class="col-md-6 pt-4 pt-md-5 ps-md-5 ps-xxl-2 position-relative">
							<h1 class="flex display-3 mt-md-5 mb-3 text-center text-md-start fst-italic" v-html="item.cta"></h1>
							<div v-html="item.rating.stars"></div>
							<h3 class="mb-3 mb-lg-2 text-center text-md-start">
								<span>{{ item.title }}</span>
								<span class="d-inline ms-1 text-warning fs-4">${{ item.price }}</span>
							</h3>
							<p  class="text-secondary mb-4 mb-lg-5 text-center text-md-start">{{ item.description }}</p>
							<div class="d-none d-md-block text-center text-md-end mb-4">
								<a href="#" class="btn btn-primary w-50">Buy Now</a>
							</div>
						</div>
						<div class="col-md-6">
							<img :src="item.image" class="d-block w-100 mb-4" alt="">
							<div class="d-block d-md-none text-center text-md-end" style="margin-bottom: 65px;">
								<a href="#" class="btn btn-primary w-50">Buy Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Arrow Buttons -->
		<button class="carousel-control-prev" type="button" data-bs-target="#product-hero-carousel" data-bs-slide="prev">
			<div class="d-flex justify-content-center align-items-center btn-arrow">
				<span class="text-white carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</div>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#product-hero-carousel" data-bs-slide="next">
			<div class="d-flex justify-content-center align-items-center btn-arrow">
				<span class="text-white carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</div>
		</button>
	</div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import HeroSlider from '../components/HeroSlider.vue';
import { heroSliderProducts } from '../data.js';
</script>

<style scoped>
#product-hero-carousel .btn-arrow {
	background: rgba(0,0,0,.3);
	border-radius: 5px;
	width: 40px;
	height: 40px;
}

[data-bs-theme=dark] .carousel .carousel-control-prev-icon,
[data-bs-theme=dark] .carousel .carousel-control-next-icon {
	filter: none;
	color: white;
}

@media (max-width: 767px) {
	.carousel-inner img {
		max-width: 320px;
		margin: 0 auto;
	}
}
@media (min-width: 768px) {
	.carousel-inner {
		max-height: 600px;
	}
}
</style>
