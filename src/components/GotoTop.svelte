<script lang="ts">
    import { onMount } from "svelte";
    import { theme, STORAGE_KEY, getSystemTheme } from "../stores/theme";

    const BASE_URL = import.meta.env.BASE_URL;
    let top: HTMLDivElement;

    // reactive derived state (Vue's computed)
    $: currentDisplayTheme = $theme === "system" ? getSystemTheme() : $theme;
    $: invertedColorComputed = currentDisplayTheme === "dark";

    // reusable scroll-to-top function
    export function scrollToTop() {
        const scrollContainer = document.querySelector(".slot") ?? window;

        if (scrollContainer === window) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            (scrollContainer as HTMLElement).scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }

    function handleScroll(scrollContainer: HTMLElement | Window) {
        let currentScrollPos: number;

        if (scrollContainer instanceof Window) {
            currentScrollPos = window.pageYOffset;
        } else if (scrollContainer instanceof HTMLElement) {
            currentScrollPos = scrollContainer.scrollTop;
        } else {
            return; // safety fallback
        }

        if (!top) return;

        top.style.bottom = currentScrollPos < 100 ? "-5em" : "1em";
    }

    onMount(() => {
        const el = document.querySelector(".slot");
        const scrollContainer: HTMLElement | Window =
            el instanceof HTMLElement ? el : window;

        const listener = () => handleScroll(scrollContainer);

        scrollContainer.addEventListener("scroll", listener);

        // run once in case page already scrolled
        handleScroll(scrollContainer);

        return () => {
            scrollContainer.removeEventListener("scroll", listener);
        };
    });
</script>

<div
    bind:this={top}
    class="goto-top"
    on:click={scrollToTop}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === "Enter" && scrollToTop()}
    aria-label="Go to top"
>
    <img
        src={BASE_URL + "/icons/arrow_left-256.png"}
        class:inverted-color={invertedColorComputed}
        alt="arrow"
    />
</div>

<style>
    .goto-top {
        position: fixed;
        bottom: -5em;
        right: 1em;
        z-index: 20;
        cursor: pointer;
        transition: bottom 0.3s;
    }

    .goto-top img {
        transform: rotate(90deg);
        max-width: 100%;
        max-height: 24px;
        display: block;
    }

    @media (max-width: 480px) {
        .goto-top {
            bottom: -25%;
        }
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        .goto-top {
            bottom: -5%;
        }
    }

    @media (min-width: 1025px) {
        .goto-top {
            left: calc(1.55 * var(--page-width));
            right: auto;
        }
    }
</style>
