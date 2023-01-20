import { writable } from "svelte/store";

export const load = async ({ fetch }) => {
	const loading = writable(false);
	const error = writable(false);
	const teamsData = writable({});

	async function get() {
		loading.set(true);
		error.set(false);
		try {
			// get endpoints for all teams
			const teamsRes = await fetch(
				`http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32`
			);
			const teamsEndpoints = await teamsRes.json();

			// get data for each team from each endpoint
			const requests = teamsEndpoints.items.map(async (url) => {
				const response = await fetch(url.$ref);
				if (response.ok) return await response.json();
				else throw new Error('Bad response');
			});
			const fetchResults = await Promise.all(requests);

			teamsData.set(fetchResults);

		} catch (e) {
			error.set(e);
		}

		loading.set(false);
		return [teamsData, loading, error, get];
	}

	get();

	return {
		teamsData: teamsData,
		loading: loading,
		error: error,
		get: get
	}

};
