<template>
	<div>
		<h2 class="my-5 text-3xl font-bold">All Tags</h2>
		<div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
			<tag v-for="tag in tags" :tag="tag" :color="setColor()" />
		</div>
	</div>
</template>

<script setup lang="ts">
import useColor from "~~/shared/useColor";

const tags = await useAllTags();

const setColor = () => useColor();
</script>

<style scoped></style>
