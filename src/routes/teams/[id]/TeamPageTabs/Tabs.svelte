<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tabItems;
    export let activeItem;

</script>

<div class="tabs">
        {#each tabItems as item}
            <button on:click={() => dispatch('tabChange', item)}>
                <div class:active={item===activeItem}>{item}</div>
            </button>
        {/each}
</div>

<style>
    .tabs {
        padding-top: 20px;
        display: flex;
        padding: 0;
        margin-bottom: 0;
    }
    button {
        cursor: pointer;
        border: none;        

    }
    button, button > div {
        background-color: rgba(0,0,0,0);
    }
    button > div {
        border: none;
        display: block;
        padding: 0.5rem 1rem;
        cursor: pointer;
        color: var(--light);
    }
    .active {
        color: var(--light);
        border-bottom: 2px solid var(--primary);
    }
    @media (max-width: 350px) {
        .tabs {
            flex-direction: column;
        }
    }
</style>