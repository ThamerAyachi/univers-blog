<template>
	<div class="grid xl:grid-cols-12 gap-5 grid-cols-1">
		<div class="bg-green-400 col-span-3 hidden xl:block">1</div>
		<div class="bg-red-400 col-span-6">2</div>
		<div class="bg-blue-400 col-span-3 hidden xl:block">3</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
