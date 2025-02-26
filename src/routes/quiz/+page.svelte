<script lang="ts">
	import { fetchCountries } from '$lib/api/fetchCountriesAPI';
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import { onMount } from 'svelte';
	import type { CountriesTypes } from '../../types/fetchCountries';

	let totalCountries: CountriesTypes[] = [];
	let currentQuestion = 0 | 1 | 2 | 3;
	let options: string[] = [];

	// Fetch the data from the API
	onMount(async () => {
		const countries = await fetchCountries();
		if (countries) {
			totalCountries = countries;
		}
		console.log(totalCountries);
	});

	//create the options

	// Get the next question
	function nextQuestion() {
		console.log('next question');
	}
</script>

<main class="flex h-screen items-center justify-center px-4">
	<section
		class="flex w-full max-w-4xl flex-col overflow-hidden rounded-4xl border border-blue-50 bg-white p-4 shadow-xl md:h-3/5 md:flex-row md:justify-between"
	>
		<div
			class="flex w-full items-center justify-center rounded-xl bg-sky-200 p-8 md:w-1/2 lg:rounded-2xl"
		>
			<div class="text-center md:text-left">
				<div class="aspect-square w-full max-w-xs md:max-w-md">
					<DotLottieSvelte src="./world-flights.lottie" loop autoplay />
				</div>
				<h1 class="text-2xl font-bold text-sky-600 sm:text-3xl">Progress:</h1>
				<div class="mt-3 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
					<div class="h-2.5 rounded-full bg-sky-600" style="width: 25%"></div>
				</div>
			</div>
		</div>

		<div class="flex w-full flex-col items-center justify-center p-10 md:w-1/2">
			<div class="h-auto w-auto max-w-xs md:max-w-md">
				<!-- where the flag goes :D -->
				<img
					src="https://images.unsplash.com/photo-1626836014893-37663794dca7?q=80&w=2646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="United States Flag"
					class="h-auto w-full"
				/>
			</div>

			<ul class="mt-4 grid w-full gap-6 md:grid-cols-2">
				<li>
					<input
						type="radio"
						id="hosting-small"
						name="hosting"
						value="hosting-small"
						class="peer hidden"
						required
					/>
					<label
						for="hosting-small"
						class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-sky-400 bg-sky-200 p-5 text-sky-900 peer-checked:border-sky-300 peer-checked:text-sky-600 hover:bg-sky-400 hover:text-sky-300 dark:border-sky-300 dark:bg-white dark:text-sky-400 dark:peer-checked:border-sky-600 dark:peer-checked:bg-sky-200 dark:peer-checked:bg-sky-200 dark:hover:bg-sky-300 dark:hover:text-sky-600"
					>
						<div class="block">
							<div class="w-full text-lg font-semibold">Colombia</div>
						</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="hosting-big"
						name="hosting"
						value="hosting-big"
						class="peer hidden"
					/>
					<label
						for="hosting-big"
						class="dark:peer-checked:bg-sky100 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-sky-400 bg-sky-200 p-5 text-sky-900 peer-checked:border-sky-300 peer-checked:text-sky-600 hover:bg-sky-400 hover:text-sky-300 dark:border-sky-300 dark:bg-white dark:text-sky-400 dark:peer-checked:border-sky-600 dark:peer-checked:bg-sky-200 dark:hover:bg-sky-300 dark:hover:text-sky-600"
					>
						<div class="block">
							<div class="w-full text-lg font-semibold">Italy</div>
						</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="hosting-medium"
						name="hosting"
						value="hosting-medium"
						class="peer hidden"
					/>
					<label
						for="hosting-medium"
						class="dark:peer-checked:bg-sky100 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-sky-400 bg-sky-200 p-5 text-sky-900 peer-checked:border-sky-300 peer-checked:text-sky-600 hover:bg-sky-400 hover:text-sky-300 dark:border-sky-300 dark:bg-white dark:text-sky-400 dark:peer-checked:border-sky-600 dark:peer-checked:bg-sky-200 dark:hover:bg-sky-300 dark:hover:text-sky-600"
					>
						<div class="block">
							<div class="w-full text-lg font-semibold">Canada</div>
						</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="hosting-tiny"
						name="hosting"
						value="hosting-tiny"
						class="peer hidden"
					/>
					<label
						for="hosting-tiny"
						class="dark:peer-checked:bg-sky100 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-sky-400 bg-sky-200 p-5 text-sky-900 peer-checked:border-sky-300 peer-checked:text-sky-600 hover:bg-sky-400 hover:text-sky-300 dark:border-sky-300 dark:bg-white dark:text-sky-400 dark:peer-checked:border-sky-600 dark:peer-checked:bg-sky-200 dark:hover:bg-sky-300 dark:hover:text-sky-600"
					>
						<div class="block">
							<div class="w-full text-lg font-semibold">USA</div>
						</div>
					</label>
				</li>
				<button
					type="button"
					class="me-2 mb-2 w-full rounded-lg border border-sky-400 px-5 py-2.5 text-start text-sm font-medium text-sky-700 hover:bg-sky-800 hover:text-white focus:ring-4 focus:ring-sky-300 focus:outline-none dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-300 dark:hover:text-sky-500 dark:focus:ring-sky-800"
					>Previous</button
				>

				<button
					type="button"
					class="me-2 mb-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-start text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
					>Next</button
				>
			</ul>
		</div>
	</section>
</main>
