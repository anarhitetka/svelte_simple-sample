<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tabItems;
    export let activeItem;

</script>

<div class="tabs">
    <ul>
        {#each tabItems as item}
            <button on:click={() => dispatch('tabChange', item)}>
                <div class:active={item===activeItem}>{item}</div>
            </button>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        padding-top: 20px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin-bottom: 0;
        list-style: none;
        color: orange;
    }
    button {
        cursor: pointer;
        background-color: var(--light);
    }
    button > div {
        border: 1px solid transparent;
        display: block;
        padding: 0.5rem 1rem;
        cursor: pointer;
        color: black;
        background-color: var(--light);
    }
    .active {
        color: var(--light);
        background-color: var(--primary);
        border-bottom: 1px solid var(--dark);
    }
</style>