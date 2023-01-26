export const load = async ({ fetch, params }) => {
	const { id } = params;

	// fetch team data
	const teamRes = await fetch(
		`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${id}`
	);
	const teamsData = await teamRes.json();

	// fetch endpoints for all games for team
	const teamEventsRes = await fetch(
		`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/teams/${id}/events`
	);
	const eventsEndpointsJsonResponse = await teamEventsRes.json();
	const eventsEndpoints = eventsEndpointsJsonResponse.items.map(endpoint => endpoint.$ref);

	// fetch games data from each endpoint
	const requests = eventsEndpoints.map(async (url) => {
		const response = await fetch(url);
		if (response.ok) return await response.json();
		else throw new Error('Bad response');
	});
	const gamesData = await Promise.all(requests);


	return {
		teamsData: teamsData,
		gamesData: gamesData
	};

};