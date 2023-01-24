<script>
    export let items;
</script>

<div class="links-container">
    {#each items as link}
        <a target="blank" href={link.href}>{link.text}</a>
    {/each}
</div>

<style>
    .links-container {
        margin: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        flex-direction: column;        
        align-items: center;
    }
    a {
        text-align: center;
        padding: 5px;
        min-width: 130px;
    }
    a:hover {
        border-bottom: 1px solid var(--secondary);    }
</style>