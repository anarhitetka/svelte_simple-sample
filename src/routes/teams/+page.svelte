<script>
	export let data;
	const { teamsData, loading, error, get }  = data;

</script>

<h1>NFL Teams</h1>
{#if $loading}
	loading teams...
{:else if $error}
	error: {$error}
{:else}
{#each $teamsData as team}
	<h3>{team.abbreviation}</h3>
	<p>{team.displayName}</p>
	<a href={`/teams/${team.id}`}>link to team</a>
{/each} 
{/if}