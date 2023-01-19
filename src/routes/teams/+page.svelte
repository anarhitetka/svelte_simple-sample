<script>
	// export let data;
	// const { teams } = data;

	import fetchStore from '../../utils/fetch';
	const [data, loading, error, get] = fetchStore(`http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32`);
	console.log(data)


</script>

<h1>NFL Teams</h1>
<!-- {#each teams as team}
	<h3>{team.abbreviation}</h3>
	<p>{team.displayName}</p>
	<a href={`/teams/${team.id}`}>link to team</a>
{/each} -->

{#if $loading}
	Loading teams ... 
{:else if $error}
	error: {$error}
{:else}
	teams loaded
	<pre>{JSON.stringify($data, null, 2)}</pre>
{/if}