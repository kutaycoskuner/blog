<script lang="ts">
    import { onMount } from "svelte";
    import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-svelte";
    import { devlogIndex } from "../stores/devlog";
    import logs from "../data/devlog.json";

    type DevLogEntry = {
        date: string;
        title: string;
        slug: string;
        category: string;
        keywords: string[];
    };

    let entries: DevLogEntry[] = logs;

    export let total = 0;

    // $: console.log("devlogIndex:", $devlogIndex);

    onMount(() => {
        const parts = window.location.pathname.split("/").filter(Boolean);

        const slug = parts.slice(-2).join("/");

        const index = entries.findIndex((e) => e.slug === slug);

        // console.table(
        //     entries.map((e) => ({
        //         slug: e.slug,
        //         match: e.slug === slug,
        //     })),
        // );
        devlogIndex.set(index);
    });

    function goBack() {
        devlogIndex.set(-1);
        window.location.href = `${import.meta.env.BASE_URL}devlog/`;
    }

    function prev() {
        devlogIndex.update((i) => {
            const newIndex = Math.max(0, i - 1);

            const entry = entries[newIndex];
            if (!entry) {
                console.log("PREV blocked: no entry");
                return i;
            }

            // console.log("PREV → index:", newIndex, "slug:", entry.slug);

            window.location.href = `${import.meta.env.BASE_URL}${entry.slug}`;
            return newIndex;
        });
    }

    function next() {
        devlogIndex.update((i) => {
            const newIndex = Math.min(entries.length - 1, i + 1);

            const entry = entries[newIndex];
            if (!entry) {
                console.log("NEXT blocked: no entry");
                return i;
            }

            // console.log("NEXT → index:", newIndex, "slug:", entry.slug);

            window.location.href = `${import.meta.env.BASE_URL}${entry.slug}`;
            return newIndex;
        });
    }

    function handleKey(e: KeyboardEvent, action: () => void) {
        if (e.key === "Enter") action();
    }
</script>

{#if $devlogIndex >= 0}
    <div class="devlog-nav">
        <div
            class="nav-btn"
            role="button"
            tabindex={0}
            aria-label="Back to Devlog Overview"
            on:click={goBack}
            on:keydown={(e) => handleKey(e, goBack)}
        >
            <ArrowLeft size={20} />
        </div>

        <div
            class="nav-btn"
            role="button"
            tabindex={0}
            aria-label="Previous Post"
            on:click={prev}
            on:keydown={(e) => handleKey(e, prev)}
        >
            <ChevronLeft size={20} />
        </div>

        <div
            class="nav-btn"
            role="button"
            tabindex={0}
            aria-label="Next Post"
            on:click={next}
            on:keydown={(e) => handleKey(e, next)}
        >
            <ChevronRight size={20} />
        </div>
    </div>
{/if}

<style>
    .devlog-nav {
        position: fixed;
        top: calc(var(--navigation-margin-top));
        right: calc(var(--navigation-margin-left) + 5rem);
        display: flex;
        gap: 0.4rem;
        z-index: 90;
    }

    .nav-btn {
        width: 1.4rem;
        height: 1.4rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;
        transition:
            opacity 0.2s,
            transform 0.2s;
    }

    .nav-btn:hover {
        opacity: 1;
        transform: scale(1.1);
    }

    @media (max-width: 480px) {
        .devlog-nav {
            top: 1rem;
            right: 4.5rem;
        }
    }
</style>
