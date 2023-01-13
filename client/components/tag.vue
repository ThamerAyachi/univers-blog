<template>
	<nuxt-link
		:to="`/tags/${tag.name?.toLowerCase()}`"
		:class="`bg-white ${color} p-5 rounded border border-gray-300 shadow-sm hover:shadow border-t-8 space-y-4`"
	>
		<div class="space-x-1 text-lg font-semibold flex">
			<span class="hashtag">#</span>
			<div class="text-gray-700 hover:text-black">{{ tag.name }}</div>
		</div>
		<div class="flex justify-between">
			<p class="text-sm text-gray-500">
				{{ tag.blogs.length }} posts published
			</p>
			<div class="text-sm text-gray-500">{{ setTime() }}</div>
		</div>
		<button
			class="bg-gray-300 text-gray-900 hover:bg-gray-400 hover:text-black p-2 px-4 rounded"
		>
			More
		</button>
	</nuxt-link>
</template>

<script>
import { formatDate } from "~~/shared/useDate";

export default {
	props: {
		tag: {
			id: String,
			name: String,
			createAt: String,
			updateAt: String,
			blogs: Array,
		},
		color: String,
	},
	setup(props) {
		const setTime = () => formatDate(props.tag.createAt);
		return { setTime };
	},
};
</script>

<style scoped lang="scss">
/* set Colors */
.zinc {
	@apply border-t-zinc-600;
	.hashtag {
		@apply text-zinc-600;
	}
}
.red {
	@apply border-t-red-600;
	.hashtag {
		@apply text-red-600;
	}
}
.orange {
	@apply border-t-orange-600;
	.hashtag {
		@apply text-orange-600;
	}
}
.yellow {
	@apply border-t-yellow-600;
	.hashtag {
		@apply text-yellow-600;
	}
}
.lime {
	@apply border-t-lime-600;
	.hashtag {
		@apply text-lime-600;
	}
}
.green {
	@apply border-t-green-600;
	.hashtag {
		@apply text-green-600;
	}
}
.teal {
	@apply border-t-teal-600;
	.hashtag {
		@apply text-teal-600;
	}
}
.cyan {
	@apply border-t-cyan-600;
	.hashtag {
		@apply text-cyan-600;
	}
}
.blue {
	@apply border-t-blue-600;
	.hashtag {
		@apply text-blue-600;
	}
}
.indigo {
	@apply border-t-indigo-600;
	.hashtag {
		@apply text-indigo-600;
	}
}
.pink {
	@apply border-t-pink-600;
	.hashtag {
		@apply text-pink-600;
	}
}
</style>
