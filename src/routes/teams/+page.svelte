<script>
	export let data;
	const { teams } = data;
</script>

<h1>NFL Teams</h1>
{#each teams as team}
	<h3>{team.abbreviation}</h3>
	<p>{team.displayName}</p>
	<a href={`/teams/${team.id}`}>link to team</a>
{/each}
