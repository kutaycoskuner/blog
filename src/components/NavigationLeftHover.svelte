<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    // props (optional)
    export let colorMode: "light" | "dark" = "light";

    let prevScrollpos = 0;
    let toggleNavigation = false;
    let invertedColor = colorMode;

    // reactive derived state (Vue's computed)
    $: invertedColorComputed = colorMode === "dark";

    // methods
    function toggleLeft() {
        toggleNavigation = !toggleNavigation;
    }

    function openLeft() {
        toggleNavigation = true;
    }

    function closeLeft() {
        toggleNavigation = false;
    }

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    onMount(() => {
        // Example: add scroll listener if needed
        // window.addEventListener("scroll", handleScroll);
    });

    onDestroy(() => {
        // window.removeEventListener("scroll", handleScroll);
    });
</script>

<!-- -------------------------------------------------------------------------------------
--------- Template
-------------------------------------------------------------------------------------- -->
<div
    class="navigation-container0 hover-control touch-control"
    class:open={toggleNavigation}
>
    <div
        class="fixed-nav-icon hover-trans-invisible touch-menu-icon"
        class:closed={toggleNavigation}
        class:inverted-color={invertedColorComputed}
        on:click={openLeft}
    >
        <img
            src="/icons/menu-grid-256.png"
            alt="menu"
        />
    </div>

    <nav
        class="navigation hover-trans-visible touch-leftslide"
        class:open={toggleNavigation}
    >
        <div on:click|stopPropagation={closeLeft}>
            <a href="https://kutaycoskuner.github.io/">architecture</a>
        </div>
        <div on:click|stopPropagation={closeLeft}>
            <a href="/port/computer_science">computer science</a>
        </div>
        <div on:click|stopPropagation={closeLeft}>
            <a href="https://kutaycoskuner.github.io/port/game_design">game design</a>
        </div>
        <div on:click|stopPropagation={closeLeft}>
            <a href="https://kutaycoskuner.github.io/content_tree">blog</a>
        </div>
        <div on:click|stopPropagation={closeLeft}>
            <a href="https://kutaycoskuner.github.io/about">about</a>
        </div>

        <div
            class="touch-only"
            class:open={toggleNavigation}
            on:click|stopPropagation={closeLeft}
        >
            <img
                src="/icons/arrow_left-256.png"
                alt="arrow"
                class:inverted-color={invertedColorComputed}
            />
        </div>

        <div class="navigation-icons hover-trans-visible">
            <!-- placeholder for icons -->
            <!-- Example:
      <a href="#" class:inverted-color={invertedColorComputed}><img src="/icons/discord.png" alt="dsc" /></a>
      -->
        </div>
    </nav>
</div>

<!-- -------------------------------------------------------------------------------------
--------- Styles
-------------------------------------------------------------------------------------- -->
<style>
    .navigation-container0 {
        user-select: none;
        font-family: var(--main-font);
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.9em;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        max-width: 1920px;
        width: 100%;
        height: 0;
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: auto 1fr;
        white-space: nowrap;
        z-index: 20;
    }

    .fixed-nav-icon {
        position: fixed;
        top: var(--navigation-margin-top);
        left: var(--navigation-margin-left);
        z-index: 90;
    }

    .fixed-nav-icon img {
        opacity: 0.8;
        width: 1.2rem;
    }

    .navigation {
        letter-spacing: 2px;
        margin-top: var(--navigation-margin-top);
        margin-left: var(--navigation-margin-left);
        display: grid;
        align-self: flex-start;
    }

    .navigation a {
        text-decoration: none;
        display: inline-block;
        transition: color 0.2s ease;
        margin-bottom: 0.3em;
        opacity: 0.7;
        color: var(--col);
    }

    .navigation a:hover {
        opacity: 0.2;
        color: var(col-1);
    }

    .navigation-icons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: calc(2 * var(--font-size));
    }

    .navigation-icons img {
        object-fit: contain;
        width: calc(2 * var(--font-size));
        height: calc(2 * var(--font-size));
        filter: grayscale(1);
    }

    .touch-only {
        opacity: 0;
        transition: opacity 0.2s;
    }

    .touch-only.open {
        margin-top: 1em;
        max-width: 100%;
        max-height: 1em;
        opacity: 1;
    }

    .touch-only img {
        max-width: 100%;
        max-height: 1em;
        opacity: 0.7;
    }

    @media (max-width: 1024px) {
        .touch-menu-icon {
            position: fixed;
            left: 1em;
            top: 1em;
            padding: 2px;
            border-radius: 2px;
            opacity: 1;
            transition: opacity 0.2s;
        }

        .touch-menu-icon.closed {
            opacity: 0;
        }

        .navigation-container0 {
            height: 100%;
            width: 0;
            position: fixed;
            top: 0;
            left: 0;
            background: var(--bg);
            background-size: var(--bg-size) var(--bg-size);
            background-repeat: repeat;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
            transition:
                width 0.2s,
                left 0.2s;
        }

        .navigation-container0.open {
            width: 60%;
            left: 30%;
        }

        .navigation {
            letter-spacing: 1px;
            margin: 1em;
            font-size: 0.9rem;
            visibility: hidden;
            transition: opacity 0.2s;
        }

        .navigation.open {
            visibility: visible;
        }
    }
</style>
