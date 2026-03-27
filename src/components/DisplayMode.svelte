<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { AlignStartVertical, TextAlignJustify } from "lucide-svelte";

    // mode prop from parent
    export let mode: "selection" | "linear" = "selection";

    const dispatch = createEventDispatcher();

    // local reactive copy to update icon immediately
    let currentMode = mode;

    $: if (mode !== currentMode) {
        currentMode = mode;
    }

    function toggleMode() {
        currentMode = currentMode == "linear" ? "selection" : "linear";
        dispatch("change", currentMode);
    }
</script>

<div
    class="ndisplay-mode"
    role="button"
    tabindex={0}
    on:click={toggleMode}
    on:keydown={(e) => e.key === "Enter" && toggleMode()}
    aria-label="Toggle Blog Display Mode"
>
    {#if currentMode === "linear"}
        <TextAlignJustify size={20} />
    {:else}
        <AlignStartVertical size={20} />
    {/if}
</div>

<style>
    .ndisplay-mode {
        position: fixed;
        top: calc(var(--navigation-margin-top));
        right: calc(
            var(--navigation-margin-left) + 2rem
        ); /* offset from ColorMode */
        width: 1.4rem;
        height: 1.4rem;
        z-index: 90;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;
        transition:
            opacity 0.2s,
            transform 0.2s;
    }

    .ndisplay-mode:hover {
        opacity: 1;
        transform: scale(1.1);
    }

    @media (max-width: 480px) {
        .ndisplay-mode {
            top: 1rem;
            right: 3rem;
        }
    }
</style>
