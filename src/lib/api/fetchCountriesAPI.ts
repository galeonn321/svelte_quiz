import type { CountriesTypes } from '../../types/fetchCountries';

export async function fetchCountries(): Promise<CountriesTypes[] | undefined> {
	try {
		const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
		if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

		const data: CountriesTypes[] = await res.json();
		return data;
	} catch (error) {
		console.error('Failed to fetch countries: ', error);
		return undefined; // ✅ Explicitly returning undefined
	}
}
