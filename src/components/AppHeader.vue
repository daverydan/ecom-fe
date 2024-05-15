<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<RouterLink
				class="navbar-brand"
				:to="{ name: 'home' }"
			>RealEstate</RouterLink>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				id="navbarSupportedContent"
				class="collapse navbar-collapse"
			>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
					<li class="nav-item">
						<RouterLink
							class="nav-link active btn"
							aria-current="page"
							:to="{ name: 'rent' }"
						>Rent</RouterLink>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="#"
						>Buy</a>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="#"
						>Sell</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
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
							class="nav-link dropdown-toggle"
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
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.nav-link:hover {
	background: #e4e4e4;
	$btn-hover-bg-shade-amount: 15%;
}
</style>
