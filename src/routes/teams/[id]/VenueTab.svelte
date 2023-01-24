<script>
    export let item;
</script>

<div class="venue-container">
    <hr/>
    <h3>{item.fullName}</h3>
    <hr/>
    <p>{item.address.city}, {item.address.state}</p>
    <p>Capacity: {item.capacity}</p>
    {#each item.images as image}
        <img alt="venue" src={image.href} height=150/> 
    {/each}
</div>

<style>
    .venue-container {
        margin: 0;
        background-color: rgba(0,0,0,0.7);
        text-align: center;
    }
</style>