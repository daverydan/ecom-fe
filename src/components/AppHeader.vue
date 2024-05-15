<template>
	<header class="">
		<nav class="navbar navbar-expand-lg">
			<div class="container-fluid">
				<RouterLink
					class="navbar-brand"
					:to="{ name: 'home' }"
				>
					<i class="bi bi-houses text-primary me-1"></i>
					<span class="text-primary fw-bold">Real</span><span class="fw-light">Estate</span>
				</RouterLink>
				<button
					class="navbar-toggler collapsed border-0 d-flex d-lg-none flex-column justify-content-around"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<!-- <span class="navbar-toggler-icon"></span> -->
					<span class="toggler-icon top-bar"></span>
					<span class="toggler-icon middle-bar"></span>
					<span class="toggler-icon bottom-bar"></span>
					<!-- <i class="menu-icon-closed bi bi-houses text-primary fs-3"></i> -->
				</button>
				<div
					id="navbarSupportedContent"
					class="collapse navbar-collapse"
				>
					<ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
						<li class="nav-item">
							<RouterLink
								class="nav-link active rounded-1"
								aria-current="page"
								:to="{ name: 'rent' }"
							>Rent</RouterLink>
						</li>
						<li class="nav-item">
							<a
								class="nav-link rounded"
								href="#"
							>Buy</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link rounded"
								href="#"
							>Sell</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link rounded dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Manage Property
							</a>
							<ul class="dropdown-menu">
								<li><a
										class="dropdown-item"
										href="#"
									>Action</a></li>
								<li><a
										class="dropdown-item"
										href="#"
									>Another action</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a
										class="dropdown-item"
										href="#"
									>Something else here</a></li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link rounded dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Resources
							</a>
							<ul class="dropdown-menu">
								<li><a
										class="dropdown-item"
										href="#"
									>Action</a></li>
								<li><a
										class="dropdown-item"
										href="#"
									>Another action</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a
										class="dropdown-item"
										href="#"
									>Something else here</a></li>
							</ul>
						</li>
					</ul>
					<div class="d-flex">
						<RouterLink
							:to="{ path: 'home' }"
							class="btn btn-sm btn-outline-primary me-2"
						>Login</RouterLink>
						<RouterLink
							:to="{ path: 'home' }"
							class="btn btn-sm btn-primary"
						>Register</RouterLink>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
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
	background: rgba(0, 0, 0, .05);
}

.nav-link.active {
	background: rgba(14, 110, 253, .2);
	color: rgba(14, 110, 253, 1) !important;
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
</style>
