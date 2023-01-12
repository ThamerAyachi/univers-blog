<template>
	<div
		class="bg-white border-gray-200 border shadow-sm rounded overflow-hidden"
	>
		<!-- image place -->
		<nuxt-link to="/" v-if="article.cover">
			<img :src="article.cover" alt="Article image" class="w-full" />
		</nuxt-link>

		<!-- content place -->
		<div class="p-3 space-y-3">
			<!-- profile place -->
			<div class="flex space-x-3 items-center">
				<!-- picture -->
				<div class="w-12 rounded-full overflow-hidden flex items-center">
					<img
						:src="article.author.avatar ? article.author.avatar : 'user.png'"
						alt="Profile picture"
					/>
				</div>
				<!-- name & date -->
				<div class="text-sm">
					<nuxt-link
						to="/"
						class="font-semibold text-gray-700 transform duration-200 hover:text-black hover:bg-gray-100 p-1 rounded"
						>{{ article.author?.fullName }}</nuxt-link
					>
					<p class="text-xs text-gray-500 p-1">Jan 6</p>
				</div>
			</div>
			<!-- content -->
			<div class="lg:px-10 space-y-2">
				<nuxt-link
					to="/"
					class="lg:text-3xl text-lg font-bold transform duration-200 hover:text-purple-600"
					>{{ article.title }}</nuxt-link
				>
				<!-- tags -->
				<div class="flex space-x-2 text-sm">
					<nuxt-link
						to="/"
						v-for="i in 3"
						class="px-2 py-1 text-gray-600 border-white transform duration-200 hover:border-green-300 border hover:bg-gray-100 rounded-lg"
					>
						<span class="text-green-600">#</span>
						tag
					</nuxt-link>
				</div>
				<!-- actions -->
				<div class="text-gray-700 flex justify-between items-center">
					<nuxt-link
						to="/"
						class="flex items-center space-x-2 transform duration-200 hover:text-black hover:bg-gray-100 p-1 px-2 rounded"
					>
						<nuxt-icon name="comment" />
						<span class="pb-1">3 comments</span>
					</nuxt-link>
					<nuxt-link
						to="/"
						class="pb-2 transform duration-200 hover:text-black hover:bg-gray-100 p-1 rounded"
						><nuxt-icon name="bookmark"
					/></nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		article: {
			id: String,
			title: String,
			content: String,
			cover: String,
			views: Number,
			createAt: String,
			updateAt: String,
			author: Object,
			topics: Object,
			comments: Object,
		},
	},
};
</script>

<style scoped></style>
