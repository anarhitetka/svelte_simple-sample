<script>
	export let data;
	const { team } = data;
</script>

<h1>Team info</h1>
<p>{team.displayName}</p>
<p>{team.standingSummary}</p>
<img src={team.logos[0].href} alt="team logo" height="100" />
