<script>
	export let data;
	const { team } = data;

	import Tabs from "./Tabs.svelte";
	import StatsTab from "./StatsTab.svelte";
	import VenueTab from "./VenueTab.svelte";
	import LinksTab from "./LinksTab.svelte";

	let tabItems = ['Stats', 'Venue', 'Links'];
	let activeItem = 'Stats';

	const triggerTabChange = (event) => {
		activeItem = event.detail;
	}

	const [summaryArr] = team.record.items.filter(item => item.type === 'total');
</script>

<div class="team-page">

	<div class="team-header">
		<div class="team-logo">
			<img src={team.logos[0].href} alt="team logo" height="100" />
		</div>
		<div class="team-info">
			<p class="team-name">{team.displayName.toUpperCase()}</p>
			<div class="team-summary">
				<p>{summaryArr.summary}</p>
				<li>{team.standingSummary}</li>
			</div>
		</div>
	</div>

	<Tabs tabItems={tabItems} activeItem={activeItem} on:tabChange={triggerTabChange} />
	{#if activeItem === 'Stats'}
		<StatsTab items={team.record.items}/>
	{:else if activeItem === 'Venue'}
		<VenueTab item={team.franchise.venue}/>
	{:else}
		<LinksTab items={team.links} />
	{/if}

</div>

<style>
	.team-page {
		background-color: rgba(0,0,0,0.3);
	}
	.team-header {
		display: flex;
		padding: 20px;
	}
	.team-logo {
		padding-right: 15px;
	}
	.team-info {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.team-name {
		font-size: 1.5rem;
	}
	.team-summary {
		font-size: 0.8rem;
		display: flex;
	}
	.team-summary > p {
		padding-right: 15px;
	}
	@media (max-width: 340px) {
		.team-header {
			flex-direction: column;
			align-items: center;
		}
		.team-name {
			text-align: center;
		}
		.team-summary {
			display: none;
		}
	}
</style>