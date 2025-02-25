<script>
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
</script>

<main class="flex h-screen items-center justify-center">
	<section class="border-0.5 flex h-1/2 w-10/12 rounded-4xl border-blue-50 bg-white p-1 shadow-xl">
		<div class="w-1/2 rounded-tl-4xl rounded-bl-4xl bg-sky-200">
			<div class="ml-5 flex h-full flex-col justify-center">
				<h1 class="text-3xl font-bold text-wrap text-sky-600">Welcome to world flags quiz</h1>
				<h5 class="text-sm text-sky-500">how much do you know?</h5>
			</div>
		</div>
		<div class="flex h-auto w-1/2 flex-col items-center justify-center">
			<div>
				<DotLottieSvelte src="/planet.lottie" loop autoplay />
			</div>
			<button
				type="button"
				class="me-2 mb-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Begin</button
			>
		</div>
	</section>
</main>
