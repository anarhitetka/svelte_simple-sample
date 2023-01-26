<script>
    export let items;
</script>

<div class="links-container">
    <div class="links">
        {#each items as link}
        <a target="blank" href={link.href}>{link.text}</a>
        {/each}
    </div>
</div>

<style>
    .links-container {
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .links {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;        
        align-items: flex-start;
        justify-content: center;
    }
    a {
        padding: 5px;
        min-width: 130px;
    }
    a:hover {
        border-bottom: 1px solid var(--secondary);    }
</style>