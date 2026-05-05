<script lang="ts">
    import raw from "../data/articleroll.json";

    type Blog = {
        visibility: boolean;
        added: string;
        title: string;
        description: string;
        url: string;
        category: string[];
        tags: string[];
        notes: string[];
        language?: string;
    };

    type Mode = "date" | "category" | "tag" | "random";

    let blogs: Blog[] = raw;
    let mode: Mode = "date";
    let selectedTag = "all";

    let history: number[] = [];
    let historyCursor = -1;

    function hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
        }
        return hash;
    }

    // Only border + text — no opaque background.
    // bg uses the hue color at very low alpha so it works on both light and dark.
    // [bg (alpha), border (alpha), text]
    const PALETTES: [string, string, string][] = [
        ["#7fd1ae18", "#7fd1ae55", "#7fd1ae"],   // mint green
        ["#d8a0ff18", "#d8a0ff55", "#d8a0ff"],   // lavender
        ["#f2c48d18", "#f2c48d55", "#f2c48d"],   // warm peach
        ["#8ecbff18", "#8ecbff55", "#8ecbff"],   // sky blue
        ["#f5d76e18", "#f5d76e55", "#f5d76e"],   // soft yellow
        ["#9aa4b218", "#9aa4b255", "#9aa4b2"],   // slate
        ["#c8c8c818", "#c8c8c855", "#c8c8c8"],   // light gray
        ["#ffb3cc18", "#ffb3cc55", "#ffb3cc"],   // blush pink
        ["#99ccff18", "#99ccff55", "#99ccff"],   // periwinkle
        ["#b3e6a018", "#b3e6a055", "#b3e6a0"],   // sage
        ["#ffd9a018", "#ffd9a055", "#ffd9a0"],   // apricot
        ["#c9a8f518", "#c9a8f555", "#c9a8f5"],   // lilac
    ];

    function hueToFadedPalette(h: number): [string, string, string] {
        return [
            `hsla(${h}, 55%, 65%, 0.09)`,
            `hsla(${h}, 50%, 65%, 0.33)`,
            `hsl(${h}, 45%, 72%)`,
        ];
    }

    function getColorForLabel(label: string): { bg: string; border: string; text: string } {
        const hash = hashString(label);
        const idx = hash % (PALETTES.length * 3);
        if (idx < PALETTES.length) {
            const [bg, border, text] = PALETTES[idx];
            return { bg, border, text };
        }
        const hue = hash % 360;
        const [bg, border, text] = hueToFadedPalette(hue);
        return { bg, border, text };
    }

    function sortByDateDesc(a: Blog, b: Blog) {
        return new Date(b.added).getTime() - new Date(a.added).getTime();
    }

    function pickRandomIndex() {
        if (!visible.length) return -1;
        if (visible.length === 1) return 0;
        let idx = 0;
        do {
            idx = Math.floor(Math.random() * visible.length);
        } while (idx === history[historyCursor] && visible.length > 1);
        return idx;
    }

    function nextRandom() {
        const idx = pickRandomIndex();
        if (idx < 0) return;
        if (historyCursor < history.length - 1) {
            history = history.slice(0, historyCursor + 1);
        }
        history = [...history, idx];
        historyCursor++;
    }

    function prevRandom() {
        if (historyCursor > 0) historyCursor--;
    }

    $: visible = blogs.filter((b) => b.visibility).sort(sortByDateDesc);

    $: groupedByCategory = (() => {
        const map = new Map<string, Blog[]>();
        for (const blog of visible) {
            for (const category of blog.category) {
                if (!map.has(category)) map.set(category, []);
                map.get(category)!.push(blog);
            }
        }
        return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
    })();

    $: allTags = ["all", ...new Set(visible.flatMap((b) => b.tags))].sort();

    $: filteredByTag =
        selectedTag === "all"
            ? visible
            : visible.filter((b) => b.tags.includes(selectedTag));

    $: currentRandom =
        historyCursor >= 0 ? visible[history[historyCursor]] : null;

    $: if (mode === "random" && history.length === 0 && visible.length) {
        nextRandom();
    }
</script>

<div class="blogroll">
    <div class="header">
        <div class="title">#curated_articles</div>
        <div class="modes">
            <button class:active={mode === "date"} on:click={() => (mode = "date")}>date</button>
            <button class:active={mode === "category"} on:click={() => (mode = "category")}>category</button>
            <button class:active={mode === "tag"} on:click={() => (mode = "tag")}>tag</button>
            <button class:active={mode === "random"} on:click={() => (mode = "random")}>random</button>
        </div>
    </div>

    {#if mode === "tag"}
        <div class="tag-filter">
            {#each allTags as tag}
                {@const col = getColorForLabel(tag)}
                <button
                    class:selected={selectedTag === tag}
                    style={selectedTag === tag
                        ? `background:${col.bg}; border-color:${col.border}; color:${col.text};`
                        : ""}
                    on:click={() => (selectedTag = tag)}
                >
                    {tag}
                </button>
            {/each}
        </div>
    {/if}

    {#if mode === "date"}
        <div class="entries">
            {#each visible as blog}
                <a class="entry" href={blog.url} target="_blank" rel="noopener noreferrer">
                    <div class="row row-meta">
                        <span class="date">{blog.added}</span>
                        {#if blog.language}<span class="lang">{blog.language.toUpperCase().slice(0,2)}</span>{/if}
                        <div class="categories">
                            {#each blog.category as c}
                                {@const col = getColorForLabel(c)}
                                <span class="cat-label" style="color:{col.text};">{c}</span>
                            {/each}
                        </div>
                    </div>
                    <div class="row row-title">{blog.title}</div>
                    {#if blog.description}
                        <div class="row row-description">{blog.description}</div>
                    {/if}
                    <div class="row row-tags">
                        {#each blog.tags as tag}
                            {@const col = getColorForLabel(tag)}
                            <span class="pill" style="background:{col.bg}; border-color:{col.border}; color:{col.text};">{tag}</span>
                        {/each}
                    </div>
                </a>
            {/each}
        </div>
    {/if}

    {#if mode === "category"}
        {#each groupedByCategory as [category, items]}
            {@const col = getColorForLabel(category)}
            <section class="group">
                <div class="group-title">
                    <span class="cat-label" style="color:{col.text};">{category}</span>
                </div>
                <div class="entries">
                    {#each items as blog}
                        <a class="entry" href={blog.url} target="_blank" rel="noopener noreferrer">
                            <div class="row row-meta">
                                <span class="date">{blog.added}</span>
                        {#if blog.language}<span class="lang">{blog.language.toUpperCase().slice(0,2)}</span>{/if}
                                <div class="categories">
                                    {#each blog.category as c}
                                        {@const cc = getColorForLabel(c)}
                                        <span class="cat-label" style="color:{cc.text};">{c}</span>
                                    {/each}
                                </div>
                            </div>
                            <div class="row row-title">{blog.title}</div>
                            {#if blog.description}
                                <div class="row row-description">{blog.description}</div>
                            {/if}
                            <div class="row row-tags">
                                {#each blog.tags as tag}
                                    {@const tc = getColorForLabel(tag)}
                                    <span class="pill" style="background:{tc.bg}; border-color:{tc.border}; color:{tc.text};">{tag}</span>
                                {/each}
                            </div>
                        </a>
                    {/each}
                </div>
            </section>
        {/each}
    {/if}

    {#if mode === "tag"}
        <div class="entries">
            {#each filteredByTag as blog}
                <a class="entry" href={blog.url} target="_blank" rel="noopener noreferrer">
                    <div class="row row-meta">
                        <span class="date">{blog.added}</span>
                        {#if blog.language}<span class="lang">{blog.language.toUpperCase().slice(0,2)}</span>{/if}
                        <div class="categories">
                            {#each blog.category as c}
                                {@const col = getColorForLabel(c)}
                                <span class="cat-label" style="color:{col.text};">{c}</span>
                            {/each}
                        </div>
                    </div>
                    <div class="row row-title">{blog.title}</div>
                    {#if blog.description}
                        <div class="row row-description">{blog.description}</div>
                    {/if}
                    <div class="row row-tags">
                        {#each blog.tags as tag}
                            {@const col = getColorForLabel(tag)}
                            <span class="pill" style="background:{col.bg}; border-color:{col.border}; color:{col.text};">{tag}</span>
                        {/each}
                    </div>
                </a>
            {/each}
        </div>
    {/if}

    {#if mode === "random" && currentRandom}
        <div class="random-controls">
            <button on:click={prevRandom} disabled={historyCursor <= 0}>prev</button>
            <button on:click={nextRandom}>next</button>
        </div>
        <a class="entry random-entry" href={currentRandom.url} target="_blank" rel="noopener noreferrer">
            <div class="row row-meta">
                <span class="date">{currentRandom.added}</span>
                {#if currentRandom.language}<span class="lang">{currentRandom.language.toUpperCase().slice(0,2)}</span>{/if}
                <div class="categories">
                    {#each currentRandom.category as c}
                        {@const col = getColorForLabel(c)}
                        <span class="cat-label" style="color:{col.text};">{c}</span>
                    {/each}
                </div>
            </div>
            <div class="row row-title">{currentRandom.title}</div>
            {#if currentRandom.description}
                <div class="row row-description">{currentRandom.description}</div>
            {/if}
            <div class="row row-tags">
                {#each currentRandom.tags as tag}
                    {@const col = getColorForLabel(tag)}
                    <span class="pill" style="background:{col.bg}; border-color:{col.border}; color:{col.text};">{tag}</span>
                {/each}
            </div>
        </a>
    {/if}
</div>

<style>
    .blogroll {
        width: 100%;
        grid-column: 1 / -1;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .title {
        font-size: 2rem;
        letter-spacing: 0.3rem;
    }

    .modes,
    .tag-filter,
    .random-controls {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    button {
        border: 1px solid var(--col-border);
        background: transparent;
        color: inherit;
        padding: 0.4rem 0.8rem;
        cursor: pointer;
        transition: 0.15s;
        opacity: 0.65;
    }

    button:hover {
        background: var(--bg-2);
        opacity: 1;
    }

    button.active,
    button.selected {
        background: var(--bg-2);
        opacity: 1;
    }

    button:disabled {
        opacity: 0.25;
        cursor: default;
    }

    .tag-filter {
        margin-bottom: 1.5rem;
    }

    .group {
        margin-bottom: 2rem;
    }

    .group-title {
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--col-border);
    }

    .entries {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .entry {
        display: grid;
        grid-template-columns: 1fr;
        color: inherit;
        text-decoration: none;
        padding: 0.85rem 1rem;
        border-left: 2px solid transparent;
        border-bottom: 1px solid var(--col-border);
        transition: 0.15s;
        gap: 0.35rem;
    }

    .entry:hover {
        transform: translateX(4px);
        background: var(--bg-2);
        border-left-color: var(--col-text);
    }

    .row-meta {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        flex-wrap: wrap;
    }

    .date {
        font-size: 0.78rem;
        opacity: 0.5;
        white-space: nowrap;
        font-variant-numeric: tabular-nums;
    }

    .lang {
        font-size: 0.65rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        opacity: 0.4;
        padding: 0.05rem 0.3rem;
    }

    .categories {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    /* Categories: text-only, no box */
    .cat-label {
        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        opacity: 0.75;
    }

    .row-title {
        font-size: 1.05rem;
        font-weight: 600;
        line-height: 1.3;
    }

    .row-description {
        font-size: 0.9rem;
        opacity: 0.75;
        line-height: 1.45;
    }

    .row-tags {
        display: flex;
        gap: 0.35rem;
        flex-wrap: wrap;
        margin-top: 0.1rem;
    }

    /* Tags: pill with alpha bg + border — theme-safe */
    .pill {
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        border-radius: 2px;
        border: 1px solid transparent;
        font-weight: 500;
        letter-spacing: 0.02em;
        white-space: nowrap;
    }

    .random-controls {
        margin-bottom: 1rem;
    }

    .random-entry {
        max-width: 800px;
    }
</style>