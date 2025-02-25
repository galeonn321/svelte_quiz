<script>
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
</script>

<main class="flex h-screen items-center justify-center px-4">
	<section
		class="flex w-full max-w-4xl flex-col overflow-hidden rounded-4xl border border-blue-50 bg-white p-4 shadow-xl md:h-3/5 md:flex-row md:justify-between"
	>
		<div class="flex w-full items-center justify-center bg-sky-200 p-6 md:w-1/2">
			<div class="text-center md:text-left">
				<h1 class="text-2xl font-bold text-sky-600 sm:text-3xl">Welcome to World Flags Quiz</h1>
				<h5 class="mt-2 text-lg font-medium text-sky-500">How much do you know?</h5>
			</div>
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-4 p-6 md:w-1/2">
			<div class="aspect-square w-full max-w-xs md:max-w-md">
				<DotLottieSvelte src="./planet.lottie" loop autoplay />
			</div>

			<button
				type="button"
				class="rounded-full bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Begin
			</button>
		</div>
	</section>
</main>
