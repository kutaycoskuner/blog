<script>
    import { onMount } from "svelte";

    import { theme, STORAGE_KEY, getSystemTheme } from "../stores/theme";

    const applyTheme = (mode) => {
        if (mode === "system") {
            document.documentElement.setAttribute(
                "color-scheme",
                getSystemTheme()
            );
        } else {
            document.documentElement.setAttribute("color-scheme", mode);
        }
        localStorage.setItem(STORAGE_KEY, mode);
        theme.set(mode); // Update the Svelte store
    };

    onMount(() => {
        // Try to load saved theme
        let savedTheme = localStorage.getItem(STORAGE_KEY);

        if (!savedTheme) {
            // If nothing saved, pick time-based default
            const hour = new Date().getHours(); // 0–23
            if (hour >= 8 && hour < 20) {
                savedTheme = "light";
            } else {
                savedTheme = "dark";
            }
        }

        applyTheme(savedTheme);
    });

    const toggleColorMode = (currentColor) => {
        let newPreference;

        switch (currentColor) {
            case "light":
                // Cycle: light -> dark
                newPreference = "dark";
                break;
            case "dark":
                // Cycle: dark -> sepia
                newPreference = "light";
                break;
            case "sepia":
                // Cycle: sepia -> system
                newPreference = "light";
                break;
            case "system":
                newPreference = "system";
                break;
            default:
                // Cycle: system -> light
                newPreference = "light";
                break;
        }

        applyTheme(newPreference);
    };

    const handleKeydown = () => {}

    // 6. COMPUTED: Current theme value for display
    $: currentDisplayTheme = $theme === "system" ? getSystemTheme() : $theme;
</script>

<div
    class="ncolor-mode"
    role="button"
    tabindex="0"
    on:click={() => toggleColorMode($theme)}
    on:keydown={handleKeydown}
    aria-label="Toggle Color Mode (Current Mode: {$theme})"
>
    {#if currentDisplayTheme === "light"}
        <div class="light-mode">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.4"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="square"
                    stroke-linejoin="miter-clip"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
            </svg>
        </div>
    {:else if currentDisplayTheme === "dark"}
        <div class="dark-mode">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.4"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="square"
                    stroke-linejoin="miter-clip"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
            </svg>
        </div>
    {:else if currentDisplayTheme === "sepia"}
        <div class="sepia-mode">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
            </svg>
        </div>
    {/if}
</div>

<style>
    /* ... (Your original styles go here) ... */
    .ncolor-mode {
        position: fixed;
        top: calc(var(--navigation-margin-top));
        right: calc(var(--navigation-margin-left));
        margin: 0;
        padding: 0;
        width: 1.4rem;
        height: 1.4rem;
        z-index: 90;
        cursor: pointer;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media (max-width: 480px) {
        .ncolor-mode {
            position: fixed;
            top: calc(1rem);
            right: calc(1rem);
        }
    }
</style>
