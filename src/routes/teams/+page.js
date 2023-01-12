export const load = async ({ fetch }) => {
	const fetchTeams = async () => {
		const teamsRes = await fetch(
			`http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32`
		);
		const teamsEndpoints = await teamsRes.json();

		// let teamsEndpointsData = [];
		let teamsData = [];
		teamsEndpoints.items.forEach((item) => {
			fetch(item.$ref)
				.then((res) => res.json())
				.then((data) => teamsData.push(data));
			// return teamsEndpointsData.push(item.$ref);
		});

		// Promise.all(
		// 	teamsEndpointsData.map((endpoint) => {
		// 		fetch(endpoint)
		// 			.then((res) => res.json())
		// 			.then((data) => teamsData.push(data));
		// 	})
		// );

		return teamsData;
	};

	return {
		teams: fetchTeams()
	};
};
