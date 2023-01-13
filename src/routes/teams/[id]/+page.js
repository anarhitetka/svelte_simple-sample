export const load = async ({ fetch, params }) => {
	const { id } = params;

	const teamRes = await fetch(
		`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${id}`
	);
	const teamData = await teamRes.json();

	return teamData;
};
