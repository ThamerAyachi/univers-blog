<template>
	<div
		class="bg-white border-gray-200 border shadow-sm rounded overflow-hidden"
	>
		<!-- image place -->
		<div>
			<img
				src="https://res.cloudinary.com/practicaldev/image/fetch/s--hfQzBixF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fv0w1bgke78vu5yy9uc3.jpg"
				alt="Article image"
				class="w-full"
			/>
		</div>

		<!-- content place -->
		<div class="p-3 space-y-3">
			<!-- profile place -->
			<div class="flex space-x-3 items-center">
				<!-- picture -->
				<div class="w-12 rounded-full overflow-hidden flex items-center">
					<img
						src="https://res.cloudinary.com/practicaldev/image/fetch/s--_FuTrBN_--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/913211/dda94e3e-b52b-4369-a253-af284fd699a2.jpg"
						alt="Profile picture"
					/>
				</div>
				<!-- name & date -->
				<div class="text-sm">
					<nuxt-link
						to="/"
						class="font-semibold text-gray-700 transform duration-200 hover:text-black hover:bg-gray-100 p-1 rounded"
						>Profile name</nuxt-link
					>
					<p class="text-xs text-gray-500 p-1">Jan 6</p>
				</div>
			</div>
			<!-- content -->
			<div class="lg:px-10 space-y-2">
				<nuxt-link
					to="/"
					class="lg:text-3xl text-lg font-bold transform duration-200 hover:text-purple-600"
					>C elements that are not supported in C++🚫</nuxt-link
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

<script setup lang="ts"></script>

<style scoped></style>
