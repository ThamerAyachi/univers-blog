<template>
	<div class="grid xl:grid-cols-12 gap-5 grid-cols-1">
		<!-- section 1 -->
		<div class="col-span-3 hidden xl:block space-y-5">
			<!-- part 1 -->
			<div
				v-if="!useState('token').value"
				class="bg-white border border-gray-200 rounded shadow-sm p-5"
			>
				<h2 class="text-2xl font-bold">
					Universe Blog🧾💫 is a community of amazing peoples
				</h2>
				<p class="my-5 text-gray-500">
					We're a place where all share, stay up-to-date and grow their careers.
				</p>
				<!-- buttons -->
				<div class="space-y-2">
					<nuxt-link
						to="/register"
						class="text-purple-600 font-semibold border border-purple-600 p-2 rounded hover:bg-purple-600 hover:text-white w-full block text-center"
					>
						Create account
					</nuxt-link>
					<nuxt-link
						to="/enter"
						class="text-gray-500 hover:text-purple-600 hover:bg-purple-200 p-2 rounded w-full block text-center"
					>
						Log in
					</nuxt-link>
				</div>
			</div>
			<!-- part 2 -->
			<div class="space-y-2">
				<nuxt-link
					v-for="l in links"
					:to="l.route"
					class="flex items-center space-x-3 px-5 p-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600 rounded"
				>
					<nuxt-icon :name="l.icon" />
					<p>{{ l.context }}</p>
				</nuxt-link>
			</div>
			<!-- part 3 -->
			<div class="space-y-2">
				<h2 class="text-gray-900 font-bold px-5 p-2 text-lg">Other</h2>
				<a
					class="flex items-center space-x-3 px-5 p-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600 rounded"
					v-for="l in otherLinks"
					:href="l.path"
					target="_blank"
				>
					<p>{{ l.context }}</p>
				</a>
			</div>
			<!-- part 4 -->
			<div class="space-y-2">
				<h2 class="text-gray-900 font-bold px-5 p-2 text-lg">Popular Tags</h2>
				<nuxt-link
					class="px-5 p-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600 rounded block"
					v-for="tag in tags"
					:to="`/tags/${tag.name?.toLowerCase()}`"
				>
					#{{ tag.name }}
				</nuxt-link>
			</div>
		</div>
		<!-- section 2 -->
		<div class="col-span-6 space-y-2">
			<Article v-for="article in articles" :article="article" />
		</div>
		<!-- section 3 -->
		<div class="col-span-3 hidden xl:block space-y-3">
			<!-- listing -->
			<div class="bg-gray-50 border border-gray-200 rounded shadow-sm">
				<!-- header -->
				<div class="flex justify-between p-5 border-b border-gray-200">
					<div class="text-xl text-black font-bold">Listings</div>
					<nuxt-link to="/" class="text-sm text-purple-600 font-semibold"
						>See all</nuxt-link
					>
				</div>
				<ListListing v-for="i in 5" />
				<!-- create listing -->
				<nuxt-link
					to="/"
					class="w-full flex justify-center p-3 text-gray-800 hover:text-purple-600 font-semibold transform duration-200"
				>
					Create a Listing
				</nuxt-link>
			</div>
			<!-- questions -->
			<div class="bg-gray-50 border border-gray-200 rounded shadow-sm">
				<!-- header -->
				<div class="flex justify-between p-5 border-b border-gray-200">
					<div class="text-xl text-black font-bold">Questions</div>
					<nuxt-link to="/" class="text-sm text-purple-600 font-semibold"
						>See all</nuxt-link
					>
				</div>
				<!-- questions -->
				<div>
					<question v-for="i in 3" />
				</div>
				<!-- add question -->
				<nuxt-link
					to="/"
					class="w-full flex justify-center p-3 text-gray-800 hover:text-purple-600 font-semibold transform duration-200"
				>
					Ask question
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const articles = await useArticles();

const links = ref([
	{
		icon: "home",
		context: "Home",
		route: "/",
	},
	{
		icon: "tag",
		context: "Tags",
		route: "/tags",
	},
	{
		icon: "contact",
		context: "Contact",
		route: "/contact",
	},
]);

const otherLinks = ref([
	{
		icon: "facebook",
		context: "@facebook",
		path: "https://facebook.com",
	},
	{
		icon: "twitter",
		context: "@twitter",
		path: "https://twitter.com",
	},
	{
		icon: "github",
		context: "@github",
		path: "https://github.com/ThamerAyachi",
	},
]);

const tags = await useTags();
</script>

<style scoped></style>
