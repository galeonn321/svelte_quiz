<script lang="ts">
	import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
	import type { CountriesList, CountriesTypes } from '../../types/fetchCountries';
	import type { Option, QuestionType } from '../../types/questionType';
	import { fetchCountries } from '$lib/api/fetchCountriesAPI';
	let totalCountries: CountriesList = [];
	let currentQuestionData: QuestionType = $state({
		flag: '',
		options: []
	});
	let progress = $state(0);
	let results: boolean[] = [];
	let finalScore = 0;
	// $inspect(currentQuestionData, 'this is current question data');
	// $inspect(currentQuestionData.options, 'this is current question data options');
	// console.log(results, 'this is current results');
	// $inspect(results, 'this is current results');
	$inspect(progress, 'this is current progress');

	// Fetch the data from the API
	$effect(() => {
		(async () => {
			const countries = await fetchCountries();
			if (countries) {
				totalCountries = countries;
				const options = createOptions();
				currentQuestionData = {
					flag: options[0],
					options: options[1]
				};
			}
		})();
	});
	//Get a random number for the options
	function getRandomNumber(excludedIndexes: Set<number> = new Set()): number {
		let randomNumber;
		do {
			randomNumber = Math.floor(Math.random() * totalCountries.length);
		} while (excludedIndexes.has(randomNumber)); // Ensure uniqueness
		return randomNumber;
	}

	// Create options
	function createOptions() {
		const usedIndexes = new Set<number>();

		// Correct answer
		const correctIndex = getRandomNumber();
		usedIndexes.add(correctIndex);
		const correctCountryName = totalCountries[correctIndex].name.common;
		const correctCountryFlag = totalCountries[correctIndex].flags.png;

		// Generate wrong answers
		let wrongAnswers: { name: string }[] = [];
		while (wrongAnswers.length < 3) {
			const wrongIndex = getRandomNumber(usedIndexes);
			usedIndexes.add(wrongIndex);
			wrongAnswers.push({ name: totalCountries[wrongIndex].name.common });
		}

		// Create options array
		let options = [
			...wrongAnswers.map(({ name }) => ({
				id: 0, // Temp ID (we will fix it later)
				name,
				isCorrect: false
			})),
			{
				id: 0, // Temp ID (we will fix it later)
				name: correctCountryName,
				isCorrect: true
			}
		];

		// Shuffle options
		options = options.sort(() => Math.random() - 0.5);

		// Assign unique IDs
		options.forEach((option, index) => {
			option.id = index;
		});

		return [correctCountryFlag, options];
	}

	// Validate and Get the next question
	function validateAndNextQuestion() {
		const queryselector = document.querySelector(
			'input[name="hosting"]:checked'
		) as HTMLInputElement;
		console.log(queryselector.id, 'quesry selector id');
		const id = parseInt(queryselector.id);
		console.log('is the answer correct?', currentQuestionData.options[id].isCorrect);

		if (progress <= 3) {
			if (currentQuestionData.options[id].isCorrect === true) {
				results.push(true);
			} else {
				results.push(false);
			}
			progress++;
			const options = createOptions();
			currentQuestionData = {
				flag: options[0],
				options: options[1]
			};
		} else {
			giveResults(results);
		}
	}

	function giveResults(results: boolean[]) {
		console.log(results, 'this is the results from the giveResults function');
		const correctAnswers = results.filter((result) => result === true);
		finalScore = correctAnswers.length;
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
					<div class="h-2.5 rounded-full bg-sky-600" style="width: {progress * 25}%"></div>
				</div>
			</div>
		</div>

		<div class="flex w-full flex-col items-center justify-center p-10 md:w-1/2">
			<div class="h-auto w-auto max-w-xs md:max-w-md">
				<!-- where the flag goes :D -->
				<img
					src={currentQuestionData.flag}
					alt="Flag of the country"
					class="h-auto w-full border-2"
				/>
			</div>

			<ul class="mt-4 grid w-full gap-6 md:grid-cols-2">
				{#each currentQuestionData.options as option, index}
					<li>
						<input
							type="radio"
							id={option.id}
							name="hosting"
							value={option.name}
							class="peer hidden"
							required
						/>
						<label
							for={option.id}
							class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-sky-400 bg-sky-200 p-5 text-sky-900 peer-checked:border-sky-300 peer-checked:text-sky-600 hover:bg-sky-400 hover:text-sky-300 dark:border-sky-300 dark:bg-white dark:text-sky-400 dark:peer-checked:border-sky-600 dark:peer-checked:bg-sky-200 dark:peer-checked:bg-sky-200 dark:hover:bg-sky-300 dark:hover:text-sky-600"
						>
							<div class="block">
								<div class="w-full text-lg font-semibold">{option.name}</div>
							</div>
						</label>
					</li>
				{/each}
				<div class="flex justify-between md:col-span-2">
					{#if progress <= 3}
						<button
							type="button"
							class="me-2 mb-2 w-full rounded-lg border border-sky-400 px-5 py-2.5 text-start text-sm font-medium text-sky-700 hover:bg-sky-800 hover:text-white focus:ring-4 focus:ring-sky-300 focus:outline-none dark:border-sky-500 dark:text-sky-500 dark:hover:bg-sky-300 dark:hover:text-sky-500 dark:focus:ring-sky-800"
							>Previous</button
						>

						<button
							type="button"
							onclick={validateAndNextQuestion}
							class="me-2 mb-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-start text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
							>Next</button
						>
					{:else}
						<a href="/results">
							<button
								type="button"
								class="me-2 mb-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-start text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 focus:outline-none dark:focus:ring-cyan-800"
								>Select and see results</button
							>
						</a>
					{/if}
				</div>
			</ul>
		</div>
	</section>
</main>
