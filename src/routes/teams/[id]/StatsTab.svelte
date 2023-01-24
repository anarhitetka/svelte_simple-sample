<script>
    export let items;
</script>

{#each items as item}
    <div class="stats-container">
        <hr/>
        <h3>{item.type}: {item.summary}</h3>
        <hr/>
        {#each item.stats as stat}
            <p class="all-stats">{stat.name}: {stat.value}</p>
        {/each}
    </div>
{/each}

<style>
    .stats-container {
        margin: 0;
        background-color: rgba(0,0,0,0.7);
        text-align: center;
    }
    .all-stats {
        font-size: 12px;
    }
</style>