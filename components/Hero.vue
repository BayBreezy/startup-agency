<template>
	<section class="lg:mx-desktop bg-[#F3F7F5] rounded-3xl mt-4 relative">
		<!-- Stat Card -->
		<InvestoreStatCard />
		<div class="flex">
			<div class="basis-1/2 pl-20 pt-24 relative">
				<!-- Random circle -->
				<div
					class="absolute right-[10%] top-1/2 rounded-full w-5 h-5 bg-green-900"
				></div>
				<!-- Random circle -->
				<div
					class="absolute left-[40%] bottom-7 rounded-full w-5 h-5 bg-yellow-500"
				></div>
				<h1
					class="font-bold text-6xl leading-[1.15] relative z-40 animate-slideDown"
				>
					<div
						class="absolute right-[20%] top-0 rounded-full w-20 h-20 bg-green-400/50 z-30"
					></div>
					Join the world's <br />
					largest startup <br />
					community
				</h1>
				<p class="mt-5 text-gray-600 font-medium text-xl">
					Experience the startup ecosystem _ invest in startups
				</p>
				<p class="mt-3 text-gray-600 font-medium text-xl">
					Research the fastest growing companies.
				</p>
				<div class="mt-16">
					<NuxtLink
						class="py-5 px-10 rounded-full font-medium bg-black text-white transition-all border border-transparent hover:bg-white/0 hover:border-black hover:text-black"
						to="#"
						>Get Started</NuxtLink
					>
				</div>
			</div>
			<div class="basis-1/2 overflow-hidden relative hidden lg:block">
				<!-- Chat link -->
				<Chat />
				<!-- Customer like -->
				<CustomerLike />
				<img src="/home.png" alt="Home Image" class="object-cover h-[110%]" />
			</div>
		</div>
	</section>
</template>

<script>
	export default {};
</script>
