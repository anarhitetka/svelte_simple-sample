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

</script>

<div>
	<img src={team.logos[0].href} alt="team logo" height="100" />
	<span>{team.displayName},</span>
	<span>{team.standingSummary}</span>
</div>

<Tabs tabItems={tabItems} activeItem={activeItem} on:tabChange={triggerTabChange} />
{#if activeItem === 'Stats'}
	<StatsTab items={team.record.items}/>
{:else if activeItem === 'Venue'}
	<VenueTab item={team.franchise.venue}/>
{:else}
	<LinksTab items={team.links} />
{/if}