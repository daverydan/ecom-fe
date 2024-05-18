<template>
	<div class="bg-white">
		<div class="mx-auto" style="max-width: 1440px">
			<HeroSlider />
		</div>
	</div>
	<div class="container-sm">
		Home page
		<br><br>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae saepe suscipit nisi natus mollitia dicta numquam aut optio. Earum voluptatem iure iste laboriosam dolores ad, non id culpa eius.
	</div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import HeroSlider from '../components/HeroSlider.vue';

const initItem = {
	category: "men's clothing",
	description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	id: 1,
	image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	price: 109.95,
	rating: {
		count: 120,
		Rate: 3.9
	},
	title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
}

const item = reactive(initItem);

onMounted(() => {
	// fetch('https://fakestoreapi.com/products/1')
	// fetch('https://fakestoreapi.com/products/categories')
	// fetch('https://fakestoreapi.com/products')
	// 	.then(res => res.json())
	// 	.then(json => {
	// 		item.value = json
	// 		console.log(item.value);
	// 	});
})
</script>
