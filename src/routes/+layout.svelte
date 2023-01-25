<script>
    import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />
<slot />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

    :global(*) {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: var(--light);
    }

    /* color variables  */
    :global(:root) {
        --primary: #e03616;
        --secondary: #f3a712;
        --dark: #141414;
        --medium: #a7a7a7;
        --light: #ebebeb;
        --background: rgba(0,0,0,0.3);
    }

    :global(body) {
        background-color: #555555;
        max-width: 100%;
        overflow-x: hidden;
        height: 100%;
        background-image: url("../assets/player.jpg");
        background-repeat: no-repeat, no-repeat;
        background-position: center; 
        background-size: cover;
    }

    :global(html) {
        max-width: 100%;
        overflow-x: hidden;
        height: 100%;
    }
</style>