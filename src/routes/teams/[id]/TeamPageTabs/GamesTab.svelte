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
        <!-- WIP  -->
        <div>
            <a target="_self" href={`/teams/${game.competitions[0].competitors[0].homeAway === "away" ? game.competitions[0].competitors[0].id : game.competitions[0].competitors[1].id}`}>{game.shortName.split(" @ ")[0]}</a>
            @
            <a data-sveltekit-reload href={`/teams/${game.competitions[0].competitors[0].homeAway === "home" ? game.competitions[0].competitors[0].id : game.competitions[0].competitors[1].id}`}>{game.shortName.split(" @ ")[1]}</a>
        </div>
        <!-- WIP -->
        <div class="game-container">
            <span class="shortname">{game.shortName}</span>
            <span>{formatDate(game.date)}</span>
        </div>
    {/each}
</div>

<style>
    .all-games-items-container {
        margin: 20px 20px 0 20px;
        display: flex;
        flex-direction: column;
    }
    .game-container {
        width: 50%;
        background-color: var(--light);
        padding: 5px 10px;
        border-bottom: 1px solid var(--medium);
        display: flex;
        justify-content: space-between;
    }
    span {
        color: var(--dark);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
    }
    .shortname {
        width: 100px;
    }
    @media (max-width: 950px) {
        .all-games-items-container {
            align-items: center;
        }
        .game-container {
            width: 80vw;
        }
    }
    @media (max-width: 320px) {
        .all-games-items-container {
            margin-left: 0;
            margin-right: 0;
        }
        .game-container {
            width: 100%;
        }
        span {
            font-size: 0.8rem;
            width: 100px;
        }
        .shortname {
            width: 30px;
            margin-right: 15px;
        }
    }
</style>