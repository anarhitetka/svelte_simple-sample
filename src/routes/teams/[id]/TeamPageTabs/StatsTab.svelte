<script>
    export let items;
</script>

<div class="all-stat-items-container">
    {#each items as item}
    <div class="stats-item-container">
        <h3>{item.type[0].toUpperCase() + item.type.slice(1)}: {item.summary}</h3>
        {#each item.stats as stat}
        <p class="individual-stats">
            <span>{stat.name.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase() + stat.name.replace(/([A-Z])/g, " $1").slice(1)}: </span>
            <span>{stat.value}</span>
        </p>
        {/each}
    </div>
    {/each}
</div>

<style>
    .all-stat-items-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 10px 0 10px;
        padding: 10px;
    }
    h3 {
        color: var(--dark);
        padding-bottom: 10px;
        border-bottom: 1px solid var(--dark);
    }
    .stats-item-container {
        margin: 0;
        background-color: var(--light);
        min-width: 300px;
        padding: 15px;
    }
    .individual-stats {
        padding: 2px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid var(--medium);
    }
    .individual-stats > span {
        color: var(--dark);
        font-size: 12px;
    }
    @media (max-width: 960px) {
        .all-stat-items-container {
            justify-content: center;
        }
        .stats-item-container {
            width: 80vw;
        }
    }
    @media (max-width: 320px) {
        .individual-stats {
            flex-direction: column;
        }
        .stats-item-container {
            width: 100vw;
            min-width: 100vw;
        }
    }
</style>