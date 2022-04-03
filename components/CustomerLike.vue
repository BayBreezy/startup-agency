<template>
	<div class="absolute top-1/2 right-[10%]">
		<div
			class="flex relative p-2 rounded-full bg-white w-80 cursor-pointer hover:scale-105 transition-all duration-500"
		>
			<!-- Heart -->
			<div
				class="right-5 -top-5 absolute p-2 h-11 w-11 bg-gradient-to-br from-red-100 via-red-500 to-red-600 rounded-full shadow-lg shadow-red-500"
			>
				<img src="/heart.png" alt="Heart Icon" class="" />
			</div>
			<img
				src="https://randomuser.me/api/portraits/men/75.jpg"
				alt="Customer"
				class="w-14 h-14 rounded-full"
			/>
			<p class="text-lg font-medium text-gray-600 mx-4">
				<span class="font-bold text-black">Mikey</span> has liked
				<br />
				this community
			</p>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
