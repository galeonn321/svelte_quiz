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
			<a href="/quiz">
				<button
					type="button"
					class="me-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
					>Start</button
				>
			</a>
		</div>
	</section>
</main>
