<template>
	<!-- Modal overlay -->
	<div
		@click.stop="$emit('update:show', false)"
		v-if="show"
		:class="bgColor"
		class="fixed h-full flex items-center justify-center w-full overflow-y-auto overflow-x-hidden inset-0"
	>
		<!-- Modal body -->
		<slot />
	</div>
</template>

<script setup>
	const props = defineProps({
		show: Boolean,
		bgColor: String,
	});
</script>

<style></style>
