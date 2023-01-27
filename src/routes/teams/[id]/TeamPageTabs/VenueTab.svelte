<script>
    export let item;
    
    const venueImages = item.images.map(image => image.href);
    
    // *** carousel with package 'svelte-carousel':
    // import Carousel from "svelte-carousel"; 
    // let carousel;
    // const handleNextClick = () => {
    //     carousel.goToNext();
    // };

    let currentImage = 0;
    const nextImage = () =>{
        currentImage = (currentImage + 1) % venueImages.length;
    }
    const prevImage = () => {
        if (currentImage != 0) {
            currentImage = (currentImage - 1) % venueImages.length;
        } else {
            currentImage = venueImages.length - 1;
        }
    }
</script>

<div class="venue-container">
    <div class="images-venue">
        <!-- carousel with package 'svelte-carousel': -->
        <!-- <Carousel
            bind:this={carousel}
            let:loaded
            autoplay
            autoplayDuration={5000}
            autoplayProgressVisible
        >
            {#each venueImages as src, imageIndex (src)}
                <img src={src} alt="venue" width={200}/>     
            {/each}
        </Carousel> -->
        <button class="btn"  on:click={() => prevImage()}>&lt;</button>
        {#each [venueImages[currentImage]] as src (currentImage)}
            <img {src} alt="venue"/>            
        {/each}
        <button class="btn"  on:click={() => nextImage()}>&gt;</button>
    </div>
    <div class="venue-header">
        <h3>{item.fullName}</h3>
        <hr/>
        <p>{item.address.city}, {item.address.state}, Capacity: {item.capacity}</p>
    </div>
</div>

<style>
    .venue-container {
        display: flex;
        flex-direction: column;
        padding: 10px;
        width: 100%;
        text-align: center;
        align-items: center;
    }
    h3, p {
        color: var(--light);
    }
    .venue-header {
        padding: 10px;
    }
    img {
        max-width: 70vw;
    }
    .images-venue {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
    .btn {
        color: var(--light);
        font-size: 3rem;
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 12px;
    }
    .btn:hover {
        color: var(--primary);
    }
    @media (min-width: 1000px) {
        img {
            height: 400px;
        }
    }
    @media (max-width: 800px) {
        .venue-container {
            margin: 20px 0 0 0;
            padding: 0;
       }
       .images-venue {
            padding: 0;
       }
    }
    @media (max-width:350px) {
       .venue-container {
            margin: 0;
            padding: 0;
            font-size: 0.8rem;
       }
       .btn {
        font-size: 1.5rem;
       }
    }
</style>