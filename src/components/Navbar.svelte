<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    let current = 0;
    function closeMenu(curr) {
        isMenuOpen = false;
        current = curr;
    }

    
</script>

<div class="navbar">
    <a href="/" class="logo">
        <h1>LOGO</h1>
    </a>
    <nav class:open={isMenuOpen}>
        <ul>
            <li>
                <a on:click={() => (closeMenu(0))} class:current={current === 0} href="/">Home</a>
            </li>
            <li>
                <a on:click={() => (closeMenu(1))} class:current={current === 1} href="/">Items</a>
            </li>
            <li>
                <a on:click={() => (closeMenu(2))} class:current={current === 2} href="/">Blog</a>
            </li>
            <li>
                <a on:click={() => (closeMenu(3))} class:current={current === 3} href="/">About</a>
            </li>
            <li class="sign-in-btn">
                <a on:click={() => (closeMenu(-1))} href="/" class="sign-in-btn-anchor">Sign In</a>
            </li>
        </ul>
    </nav>
    <button class="burger" on:click={toggleMenu} class:open={isMenuOpen}>
        <div class="bar--1"/>
        <div class="bar--2"/>
        <div class="bar--3"/>
    </button>
</div>

<style>
    .navbar {
        background-color: var(--dark);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 80px;
    }

    .logo {
        margin-left: 6vw; 
    }

    @media only screen and (max-width: 767px) {

        nav {
            opacity: 0;
            display: block;
            position: absolute;

            top: 100%;
            left: 100%;
            background-color: var(--dark);
            width: 100%;
            transition: all 300ms ease-in-out;
        }
    
        nav.open {
            opacity: 1;
            left: 0;

        }

    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5vh;
        margin-top: 2vh;
        margin-bottom: 4vh;
        list-style: none;
        font-size: 1.1rem;
    }

    /* navigation item animation  */
    li > a {
        display: inline-block;
        transition: all 200ms ease-in-out;
    }

    li > a:hover:not(.current):not(.sign-in-btn-anchor) {
        border-bottom: 1px solid var(--secondary);
    }

    li > a:active {
        transform: scale(0.9);
    }
    /* navigation item animation  */

    .current {
        position: relative;
    }

    .current::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--secondary);
    }

    .sign-in-btn {
        background-color: var(--primary);
        padding: 0.4rem 1rem;
        border-radius: 10px;
        font-weight: 500;
    }

    .burger {
        height: 28px;
        aspect-ratio: 1;
        border: 2px solid var(--light);
        background-color: transparent;
        border-radius: 5px;
        margin-right: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .burger > div {
        height: 2px;
        width: 14px;
        background-color: var(--light);
        position: absolute;
        transition: all 300ms ease-in-out;
    }
    
    .burger:hover {
        border: 2px solid var(--secondary);
    }

    .burger:hover > div {
        background-color: var(--secondary);
    }

    .bar--1 {
        transform: translateY(-5px); 
    }

    .bar--3 {
        transform: translateY(5px); 
    }

    /* burger menu animations  */
    .burger.open .bar--1 {
        transform: rotateZ(45deg);
    }
    .burger.open .bar--2 {
        opacity: 0;
    }
    .burger.open .bar--3 {
        transform: rotateZ(-45deg);
    }
    /* burger menu animations  */

    @media only screen and (min-width: 768px) {

        .logo {
            margin-left: 3vw;
        }

        .burger {
            display: none;
        }

        nav {
            display: block;
            position: relative;
        }

        ul {
            margin: 0;
            flex-direction: row;
            gap: 2vw;
        }
        
        .sign-in-btn {
            margin-inline: 2vw;
        }

    }

</style>