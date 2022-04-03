<template>
	<div>
		<Header />
		<main class="mb-16">
			<Hero />
			<section class="mt-10 lg:px-desktop">
				<div class="flex divide-x-2">
					<div class="basis-1/2 flex space-x-10">
						<img src="/about.png" alt="About Icon" class="w-auto h-20" />
						<p class="text-2xl text-gray-600">
							A living place for curiosity and <br />
							collaboration, meeting and meaning. <br />
							The heart of a creative community.
						</p>
					</div>
					<div class="flex items-center justify-evenly space-x-10 basis-1/2">
						<div class="text-center relative">
							<div
								class="absolute left-0 top-0 rounded-full w-20 h-20 bg-green-400/50 z-10"
							></div>
							<h1 class="font-bold text-8xl">12</h1>
							<p class="uppercase font-bold text-gray-500">Countries</p>
						</div>
						<div class="text-center relative">
							<div
								class="absolute left-0 top-0 rounded-full w-20 h-20 bg-yellow-400/50 z-10"
							></div>
							<h1 class="font-bold text-8xl">11K</h1>
							<p class="uppercase font-bold text-gray-500">Participants</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>
