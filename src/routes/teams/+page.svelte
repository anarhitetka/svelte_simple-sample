<script>
	export let data;
	const { teamsData, loading, error, get }  = data;
</script>

{#if $loading}
<div class="team-container">
	<h3>loading teams...</h3>
</div>
{:else if $error}
<div class="team-container">
	<p>error: {$error}</p>
</div>
{:else}
<div class="team-container">
	{#each $teamsData as team}
		<div class="team-link">
			<a href={`/teams/${team.id}`} >
				<div class="team-card">
					<div class="team-fullname">
						<p>{team.displayName}</p>
					</div>
					<div class="team-logo-abbreviation">
						<img src={team.logos[0].href} alt="team logo" width="50"/>
						<h3>{team.abbreviation}</h3>
					</div>
				</div>
			</a>
		</div>
	{/each} 
</div>
{/if}

<style>
	.team-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		background-color: rgba(0,0,0,0.3);
	    height: calc(100vh - 80px - 30px);
		overflow-y: scroll;	
	}
	.team-link {
		margin: 15px;
		width: 300px;
		background-color: rgba(75, 72, 72, 0.8);
		border-radius: 2px;
		box-shadow: 5px 5px 5px black;
	}
	.team-card {
		display: flex;
		padding: 15px;
		justify-content: space-between;
	}
	.team-fullname, .team-logo-abbreviation {
		padding: 5px;
	}
	h3 {
		text-align: center;	
	}
</style>