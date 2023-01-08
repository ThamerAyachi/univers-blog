<template>
	<header class="mb-20">
		<nav
			class="bg-white flex justify-between items-center p-2 px-4 shadow xl:px-32 fixed z-50 w-full top-0"
		>
			<div class="flex space-x-3 items-center">
				<nuxt-link to="/" class="w-10">
					<img src="../assets/img/galaxy.png" alt=""
				/></nuxt-link>
				<form class="hidden lg:block" @submit.prevent="search">
					<div class="relative">
						<input
							type="text"
							id="default-search"
							class="block p-2 w-72 text-sm border border-gray-300 rounded text-gray-700 placeholder-gray-700"
							placeholder="Search..."
							v-model="searchBar"
							autocomplete="off"
							required
						/>
						<button type="submit" class="absolute right-2.5 bottom-2.5">
							<svg
								aria-hidden="true"
								class="w-5 h-5 text-gray-900 hover:text-purple-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</button>
					</div>
				</form>
			</div>
			<div class="space-x-4 flex">
				<nuxt-link
					to="/enter"
					class="text-gray-500 hover:text-purple-600 hover:bg-purple-200 p-2 rounded"
				>
					Log in
				</nuxt-link>
				<nuxt-link
					to="/register"
					class="text-purple-600 font-semibold border border-purple-600 p-2 rounded hover:bg-purple-600 hover:text-white"
				>
					Create account
				</nuxt-link>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const searchBar = ref("");

const search = () => {
	console.log(searchBar.value);
};
</script>

<style scoped></style>
