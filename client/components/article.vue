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
					<nuxt-link to="/" class="font-semibold text-gray-700"
						>Profile name</nuxt-link
					>
					<p class="text-xs text-gray-500">Jan 6</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
