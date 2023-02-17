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
        {@const awayTeamId = game.competitions[0].competitors[0].homeAway === "away" ? game.competitions[0].competitors[0].id : game.competitions[0].competitors[1].id}
        {@const homeTeamId = game.competitions[0].competitors[0].homeAway === "home" ? game.competitions[0].competitors[0].id : game.competitions[0].competitors[1].id}
        {@const awayTeamShortName = game.shortName.split(" @ ")[0]}
        {@const homeTeamShortName = game.shortName.split(" @ ")[1]}
        <div class="game-container">
            <div class="game-shortname">
                <a target="_self" class="team-link" href={`/teams/${awayTeamId}`}>{awayTeamShortName}</a>
                <span>@</span>
                <a data-sveltekit-reload class="team-link"  href={`/teams/${homeTeamId}`}>{homeTeamShortName}</a>
            </div>
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
    .game-shortname {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100px;
    }
    .game-shortname > span {
        padding: 0 5px;
    }
    .team-link {
        color: var(--dark);
    }
    span {
        color: var(--dark);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
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
        .game-shortname {
            width: 50px;
            margin-right: 15px;
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>