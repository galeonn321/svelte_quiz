<script lang="ts">
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import { onMount } from 'svelte';
	import type { CountriesTypes } from '../../types/fetchCountries';
	import { fetchCountries } from '$lib/api/fetchCountriesAPI';

	let totalCountries: CountriesTypes[] = [];
	let currentQuestion = 0 | 1 | 2 | 3;
	let options: string[] = [];
	let progress = 0 | 1 | 2 | 3;

	// Fetch the data from the API
	$effect(() => {
		(async () => {
			const countries = await fetchCountries();
			if (countries) {
				totalCountries = countries;
			}
		})();
	});

	//create the options

	// Get the next question
	function nextQuestion() {
		console.log('next question');
	}
</script>

<main class="flex h-screen items-center justify-center px-4">
	<section
		class="flex w-full max-w-4xl flex-col overflow-hidden rounded-4xl bg-white p-2 p-4 shadow-xl md:h-3/5 md:flex-row md:justify-between"
	>
		<div
			class="relative flex w-full items-end justify-center rounded-xl bg-sky-200 md:w-1/2 lg:rounded-2xl"
		>
			<div
				class="inset-0 flex max-h-[500px] max-w-[500px] items-center justify-center sm:h-1/4 md:aspect-square md:h-[400px] md:w-full lg:absolute lg:bottom-0 lg:w-full lg:justify-center 2xl:absolute 2xl:bottom-0 2xl:bottom-0 2xl:aspect-square 2xl:max-h-[600px] 2xl:w-full 2xl:max-w-[600px] 2xl:justify-center"
			>
				<DotLottieSvelte src="./celebration-results.lottie" loop autoplay />
			</div>
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-3 p-10 text-center md:w-1/2">
			<h1 class="text-7xl text-sky-500">Well done!</h1>
			<h1 class="mt-20 text-6xl text-sky-500">your score is:</h1>
			<h1 class="text-4xl text-sky-500">3 / 4 correct</h1>
			<a href="/">
				<button
					type="button"
					class="me-2 mt-12 w-full max-w-[200px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
					>Play again?</button
				>
			</a>
		</div>
	</section>
</main>
