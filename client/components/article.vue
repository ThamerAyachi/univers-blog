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
					<p class="text-xs text-gray-500 p-1">
						{{ setDate() }}
					</p>
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
						v-for="topic in article.topics"
						:class="`px-2 py-1 text-gray-600 border-white transform duration-200  ${getColor()} border hover:bg-gray-100 rounded-lg`"
					>
						<span class="hashtag">#</span>
						{{ topic.name }}
					</nuxt-link>
				</div>
				<!-- actions -->
				<div class="text-gray-700 flex justify-between items-center">
					<nuxt-link
						to="/"
						class="flex items-center space-x-2 transform duration-200 hover:text-black hover:bg-gray-100 p-1 px-2 rounded"
					>
						<nuxt-icon name="comment" />
						<span class="pb-1">{{ article.comments.length }} comments</span>
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
import useColor from "~~/shared/useColor";
import { formatDate } from "~~/shared/useDate";

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
			topics: Array,
			comments: Object,
		},
	},
	methods: {
		getColor() {
			const color = useColor();
			return color;
		},
		setDate() {
			return formatDate(this.article.createAt);
		},
	},
};
</script>

<style scoped>
/* colors */
.red .hashtag {
	color: #dc2626 !important; /* 600 */
}
.red:hover {
	border: 1px solid #fca5a5 !important; /* 300 */
	background-color: #fef2f2; /* 50 */
}

.zinc .hashtag {
	color: #52525b !important;
}
.zinc:hover {
	border: 1px solid #d4d4d8 !important;
	background-color: #fafafa;
}

.orange .hashtag {
	color: #ea580c !important; /* 600 */
}
.orange:hover {
	border: 1px solid #fdba74 !important; /* 300 */
	background-color: #fff7ed; /* 50 */
}

.yellow .hashtag {
	color: #ca8a04 !important; /* 600 */
}
.yellow:hover {
	border: 1px solid #fde047 !important; /* 300 */
	background-color: #fefce8; /* 50 */
}

.lime .hashtag {
	color: #65a30d !important; /* 600 */
}
.lime:hover {
	border: 1px solid #bef264 !important; /* 300 */
	background-color: #f7fee7; /* 50 */
}

.green .hashtag {
	color: #16a34a !important; /* 600 */
}
.green:hover {
	border: 1px solid #86efac !important; /* 300 */
	background-color: #f0fdf4; /* 50 */
}

.teal .hashtag {
	color: #0d9488 !important; /* 600 */
}
.teal:hover {
	border: 1px solid #5eead4 !important; /* 300 */
	background-color: #f0fdfa; /* 50 */
}

.cyan .hashtag {
	color: #0891b2 !important; /* 600 */
}
.cyan:hover {
	border: 1px solid #67e8f9 !important; /* 300 */
	background-color: #ecfeff; /* 50 */
}

.blue .hashtag {
	color: #2563eb !important; /* 600 */
}
.blue:hover {
	border: 1px solid #93c5fd !important; /* 300 */
	background-color: #eff6ff; /* 50 */
}

.indigo .hashtag {
	color: #4f46e5 !important; /* 600 */
}
.indigo:hover {
	border: 1px solid #a5b4fc !important; /* 300 */
	background-color: #eef2ff; /* 50 */
}

.pink .hashtag {
	color: #db2777 !important; /* 600 */
}
.pink:hover {
	border: 1px solid #f9a8d4 !important; /* 300 */
	background-color: #fdf2f8; /* 50 */
}
</style>
