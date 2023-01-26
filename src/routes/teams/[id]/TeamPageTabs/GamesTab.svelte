<script>
    export let items;
    
    const formatDate = function (dateStr) {
        return `${new Date(dateStr).toLocaleString(undefined, {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        dateStyle: "medium",
        timeStyle: "short",
        })}`;
    };
</script>

<div class="all-games-items-container">
    {#each items as game}
    <div class="game-container">
        <span>{game.shortName}</span>
        <span>{formatDate(game.date)}</span>
    </div>
    {/each}
</div>

<style>
    .game-container {
        width: 50%;
        background-color: var(--light);
        margin: 5px;
        padding: 5px;
        display: flex;
        justify-content: space-between;
    }
    span {
        color: var(--dark);
        font-size: 0.9rem;
    }
</style>