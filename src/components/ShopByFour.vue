<template>
	<div class="shop-by-four">
		<div class="d-flex align-items-center justify-content-between">
			<h3 class="">{{ title }}</h3>
			<RouterLink :to="{ name: url }" class="view-all-link text-decoration-none text-white" style="width: 100px;">
				View All
				<div class="view-all-arrow overflow-hidden d-inline-flex m-0">
					<i class="bi bi-arrow-right"></i>
				</div>
			</RouterLink>
		</div>
		<div class="container-sm px-0">
			<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
				<div v-for="item in items" class="col pt-4">
					<RouterLink :to="{ name: item.url }" class="card text-bg-dark bg-white position-relative p-0 overflow-hidden border-0" :key="item.id" style="height: 235px;">
						<div class="bg-img" :style="{ 'background-image': `url(${item.image})` }" style="background-repeat: no-repeat; background-position: center; background-size: contain; height: 235px;"></div>
						<div class="category-bg position-absolute w-100 rounded-0 bottom-0 left-0 ps-3 d-flex align-items-center">
							<h5 class="card-title text-capitalize m-0">{{ item.name }}</h5>
						</div>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: String,
	url: String,
	items: {
		type: Array,
		default: [],
	},
})
</script>

<style lang="scss" scoped>
.card {
	.bg-img {
		transition: opacity 150ms ease-in-out;
	}
	.category-bg {
		color: white;
		height: 25%;
		background: rgba(0,0,0,0.4);
		transition: background 150ms ease-in-out;
	}

	&:hover {
		.category-bg {
			color: black;
			background: rgba(255,255,255,.4);
		}

		.bg-img {
			opacity: .75;
		}
	}
}

@media (max-width: 767px) {
	.card {
		margin: 0 auto;
		max-width: 360px;
	}
}

.view-all-link {
	transition: opacity 200ms ease-in-out;

	.view-all-arrow {
		transition: margin 200ms ease-in-out;
	}

	&:hover {
		opacity: .7;

		.view-all-arrow {
			margin-left: 16px !important;
		}
	}
}
</style>
