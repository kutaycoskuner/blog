<script lang="ts">
    import raw from "../data/blogroll.json";

    type Blog = {
        visibility: boolean;
        added: string;
        title: string;
        description: string;
        url: string;
        category: string[];
        tags: string[];
        notes: string[];
    };

    type Mode =
        | "date"
        | "category"
        | "tag"
        | "random";

    let blogs: Blog[] = raw;
    let mode: Mode = "date";
    let selectedTag = "all";

    let history: number[] = [];
    let historyCursor = -1;

    function sortByDateDesc(a: Blog, b: Blog) {
        return (
            new Date(b.added).getTime() -
            new Date(a.added).getTime()
        );
    }

    function pickRandomIndex() {
        if (!visible.length) return -1;
        if (visible.length === 1) return 0;

        let idx = 0;

        do {
            idx = Math.floor(
                Math.random() * visible.length
            );
        } while (
            idx === history[historyCursor] &&
            visible.length > 1
        );

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
        if (historyCursor > 0) {
            historyCursor--;
        }
    }

    $: visible = blogs
        .filter((b) => b.visibility)
        .sort(sortByDateDesc);

    $: groupedByCategory = (() => {
        const map = new Map<string, Blog[]>();

        for (const blog of visible) {
            for (const category of blog.category) {
                if (!map.has(category)) {
                    map.set(category, []);
                }

                map.get(category)!.push(blog);
            }
        }

        return [...map.entries()].sort(([a], [b]) =>
            a.localeCompare(b)
        );
    })();

    $: allTags = [
        "all",
        ...new Set(
            visible.flatMap((b) => b.tags)
        ),
    ].sort();

    $: filteredByTag =
        selectedTag === "all"
            ? visible
            : visible.filter((b) =>
                  b.tags.includes(selectedTag)
              );

    $: currentRandom =
        historyCursor >= 0
            ? visible[history[historyCursor]]
            : null;

    $: if (
        mode === "random" &&
        history.length === 0 &&
        visible.length
    ) {
        nextRandom();
    }
</script>

<div class="blogroll">
    <div class="header">
        <div class="title">#blogroll</div>

        <div class="modes">
            <button
                class:active={mode === "date"}
                on:click={() => (mode = "date")}
            >
                date
            </button>

            <button
                class:active={mode === "category"}
                on:click={() => (mode = "category")}
            >
                category
            </button>

            <button
                class:active={mode === "tag"}
                on:click={() => (mode = "tag")}
            >
                tag
            </button>

            <button
                class:active={mode === "random"}
                on:click={() => (mode = "random")}
            >
                random
            </button>
        </div>
    </div>

    {#if mode === "tag"}
        <div class="tag-filter">
            {#each allTags as tag}
                <button
                    class:selected={selectedTag === tag}
                    on:click={() =>
                        (selectedTag = tag)
                    }
                >
                    {tag}
                </button>
            {/each}
        </div>
    {/if}

    {#if mode === "date"}
        <div class="entries">
            {#each visible as blog}
                <a
                    class="entry"
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="meta">
                        <span>{blog.added}</span>
                    </div>

                    <div class="name">
                        {blog.title}
                    </div>

                    {#if blog.description}
                        <div class="description">
                            {blog.description}
                        </div>
                    {/if}

                    <div class="tags">
                        {#each blog.category as c}
                            <span>{c}</span>
                        {/each}

                        {#each blog.tags as tag}
                            <span>{tag}</span>
                        {/each}
                    </div>
                </a>
            {/each}
        </div>
    {/if}

    {#if mode === "category"}
        {#each groupedByCategory as [category, items]}
            <section class="group">
                <div class="group-title">
                    {category}
                </div>

                <div class="entries">
                    {#each items as blog}
                        <a
                            class="entry"
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div class="meta">
                                <span>
                                    {blog.added}
                                </span>
                            </div>

                            <div class="name">
                                {blog.title}
                            </div>

                            {#if blog.description}
                                <div
                                    class="description"
                                >
                                    {blog.description}
                                </div>
                            {/if}

                            <div class="tags">
                                {#each blog.tags as tag}
                                    <span>
                                        {tag}
                                    </span>
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
                <a
                    class="entry"
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div class="meta">
                        <span>{blog.added}</span>
                    </div>

                    <div class="name">
                        {blog.title}
                    </div>

                    {#if blog.description}
                        <div class="description">
                            {blog.description}
                        </div>
                    {/if}

                    <div class="tags">
                        {#each blog.category as c}
                            <span>{c}</span>
                        {/each}

                        {#each blog.tags as tag}
                            <span>{tag}</span>
                        {/each}
                    </div>
                </a>
            {/each}
        </div>
    {/if}

    {#if mode === "random" && currentRandom}
        <div class="random-controls">
            <button
                on:click={prevRandom}
                disabled={historyCursor <= 0}
            >
                prev
            </button>

            <button on:click={nextRandom}>
                next
            </button>
        </div>

        <a
            class="entry random-entry"
            href={currentRandom.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div class="meta">
                <span>{currentRandom.added}</span>
            </div>

            <div class="name">
                {currentRandom.title}
            </div>

            {#if currentRandom.description}
                <div class="description">
                    {currentRandom.description}
                </div>
            {/if}

            <div class="tags">
                {#each currentRandom.category as c}
                    <span>{c}</span>
                {/each}

                {#each currentRandom.tags as tag}
                    <span>{tag}</span>
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
        font-size: 1.1rem;
        opacity: 0.7;
        border-bottom: 1px solid var(--col-border);
        padding-bottom: 0.3rem;
        margin-bottom: 1rem;
    }

    .entries {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .entry {
        display: block;
        color: inherit;
        text-decoration: none;
        padding: 1rem;
        border-left: 2px solid transparent;
        transition: 0.15s;
    }

    .entry:hover {
        transform: translateX(4px);
        background: var(--bg-2);
        border-left-color: var(--col-text);
    }

    .meta {
        font-size: 0.8rem;
        opacity: 0.55;
        margin-bottom: 0.4rem;
    }

    .name {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .description {
        opacity: 0.8;
        line-height: 1.45;
        margin-bottom: 0.7rem;
    }

    .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .tags span {
        font-size: 0.75rem;
        opacity: 0.6;
        padding: 0.15rem 0.45rem;
        border: 1px solid var(--col-border);
    }

    .random-controls {
        margin-bottom: 1rem;
    }

    .random-entry {
        max-width: 800px;
    }
</style>