<template>
	<header>
		<div class="bg-mode" style="height: 58px"></div>

		<div class="bg-mode border-bottom fixed-top">
			<nav class="navbar navbar-expand-lg mx-auto" style="max-width: 1440px">
				<div class="container-fluid">
					<RouterLink
						class="navbar-brand d-flex align-items-center"
						style="margin-top: -4px;"
						:to="{ name: 'home' }"
						@click="() => onClickOutside"
					>
						<i class="bi bi-bag-check text-primary me-1"></i>
						<div class="mt-1">
							<span class="text-primary fw-bold">E</span><span class="fw-light">merce</span>
						</div>
					</RouterLink>
					<button
						ref="menuBtn"
						class="navbar-toggler collapsed border-0 d-flex d-lg-none flex-column justify-content-around"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="toggler-icon top-bar"></span>
						<span class="toggler-icon middle-bar"></span>
						<span class="toggler-icon bottom-bar"></span>
					</button>
					<div
						id="navbarSupportedContent"
						class="collapse navbar-collapse"
					>
						<ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
							<li class="nav-item">
								<RouterLink
									class="nav-link rounded"
									exactActiveClass="active"
									:to="{ name: 'home' }"
									@click="() => onClickOutside"
								>Shop</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink
									class="nav-link rounded"
									exactActiveClass="active"
									:to="{ name: 'hot' }"
									@click="() => onClickOutside"
								>
									Hot<i class="bi bi-fire"></i>
								</RouterLink>
							</li>
							<li class="nav-item dropdown">
								<a
									ref="categoriesLink"
									class="nav-link rounded dropdown-toggle"
									href="#"
									@click.stop
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Categories
								</a>
								<ul class="dropdown-menu">
									<li v-for="category in categoriesMenu">
										<RouterLink class="dropdown-item py-2"
											exactActiveClass="active"
											:to="{ name: category.url }"
											@click="() => onClickOutside"
										>
											<span class="text-capitalize">{{ category.name }}</span>
										</RouterLink>
									</li>
								</ul>
							</li>
							<li class="nav-item">
								<RouterLink
									class="nav-link rounded"
									exactActiveClass="active"
									:to="{ name: 'sell' }"
									@click="() => onClickOutside"
								>Sell</RouterLink>
							</li>
							<li class="nav-item">
								<RouterLink
									class="nav-link rounded"
									exactActiveClass="active"
									:to="{ name: 'support' }"
									@click="() => onClickOutside"
								>Support</RouterLink>
							</li>
						</ul>
						<div class="d-flex py-2 my-lg-0">
							<RouterLink
								:to="{ name: 'login' }"
								class="btn btn-sm btn-outline-primary me-2"
							>Login</RouterLink>
							<RouterLink
								:to="{ name: 'register' }"
								class="btn btn-sm btn-primary me-2"
							>Register</RouterLink>
							<button
								ref="darkModeBtn"
								type="button"
								class="btn btn-secondary btn-sm btn-mode"
								@click="toggleDarkMode"
							>
								<i class="i-light-mode bi bi-sun-fill"></i>
								<i class="i-dark-mode bi bi-moon-fill"></i>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { categoriesMenu } from '../data.js'

const menuBtn = ref(null);
const categoriesLink = ref(null);
const darkModeBtn = ref(null);

onClickOutside(menuBtn, event => {
	for (let child of darkModeBtn.value.children) {
		if (event.target == child) return;
	}
	if (event.target == categoriesLink.value || event.target == darkModeBtn.value) {
		return;
	}
	if (! menuBtn.value.classList.contains('collapsed')) {
		menuBtn.value.click();
	}
})

const toggleDarkMode = () => {
	const body = document.body;
	body.dataset.bsTheme = body.dataset.bsTheme == 'light' ? 'dark' : 'light';
	if (body.classList.contains('dark')) {
		body.classList.remove('dark');
		body.classList.add('light');
	} else {
		body.classList.remove('light');
		body.classList.add('dark');
	}
}
</script>

<style scoped>
.navbar-brand:hover {
	transition: all 200ms ease-in-out;
	opacity: .7;
}

.nav-item {
	margin-top: 2.5px;
	margin-bottom: 2.5px;
}

@media (min-width: 991px) {
	.nav-item {
		margin: 0 8px;
	}
}

.nav-link {
	padding: 5px 10px !important;
}

.nav-link:hover {
	background: rgba(0, 0, 0, .06);
}

.dark .nav-link:hover {
	background: rgba(255, 255, 255, .06);
}

.nav-link.active {
	background: rgba(14, 110, 253, .2);
	color: rgba(14, 110, 253, 1) !important;
}

.dark .nav-link.active {
	background: rgba(14, 110, 253, 1);
	color: white !important;
}

/* Mobile Toggle Icon */
.navbar-toggler {
    width: 20px;
    height: 20px;
    position: relative;
    transition: .15s ease-in-out;
}

.navbar-toggler:hover {
	opacity: .7;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
    border: 0;
    position: relative;
}

.navbar-toggler span {
    margin: 0;
    padding: 0;
}

.toggler-icon {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #333;
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

.dark .toggler-icon {
	background: #e4e4e4;
}

.middle-bar {
    margin-top: 0px;
}

/* State when the navbar is collapsed */
.navbar-toggler.collapsed .top-bar {
    position: absolute;
    top: 0px;
    transform: rotate(0deg);
}

.navbar-toggler.collapsed .middle-bar {
    opacity: 1;
    position: absolute;
    top: 8px;
    filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .bottom-bar {
    position: absolute;
    top: 16px;
    transform: rotate(0deg);
}

/* when navigation is clicked */
.navbar-toggler .top-bar {
    top: inherit;
    transform: rotate(135deg);
}

.navbar-toggler .middle-bar {
    opacity: 0;
    top: inherit;
    filter: alpha(opacity=0);
}

.navbar-toggler .bottom-bar {
    top: inherit;
    transform: rotate(-135deg);
}

/* Dark/Light Mode Button */
.btn-mode {
	background: transparent;
	border: 0;
	color: black;
	font-size: 15px;
}

.btn-mode:hover {
	background: rgba(0, 0, 0, .06);
	color: black;
}

.dark .btn-mode {
	background: transparent;
	color: white;
}

.dark .btn-mode:hover {
	background: rgba(255, 255, 255, .06);
}

.dark .i-light-mode {
	display: block;
}

.i-light-mode {
	display: none;
}

.dark .i-dark-mode {
	display: none;
}

.i-dark-mode {
	display: block;
}
</style>
