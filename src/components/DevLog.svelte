<script lang="ts">
    import logs from "../data/devlog.json";

    type DevLogEntry = {
        date: string;
        title: string;
        slug: string;
        category: string;
        keywords: string[];
    };

    let entries: DevLogEntry[] = logs;

    let selectedCategory: string = "all";

    $: filteredEntries =
        selectedCategory === "all"
            ? entries
            : entries.filter((e) => e.category === selectedCategory);

    $: categories = ["all", ...new Set(entries.map((e) => e.category))];

    function goToPost(slug: string) {
        window.location.href = `${import.meta.env.BASE_URL}${slug}`;
    }

    const categoryColors: Record<string, string> = {
        all: "#9aa4b2", // soft slate
        default: "#7c7c7c", // neutral gray

        devlog: "#7fd1ae", // soft mint green
        opinion: "#d8a0ff", // lavender
        essay: "#f2c48d", // warm peach
        tutorial: "#8ecbff", // soft sky blue
        post: "#c8c8c8", // light gray

        curated: "#f5d76e", // soft yellow (external content / inspiration)
    };

    function getColor(cat: string) {
        return categoryColors[cat] ?? categoryColors.default;
    }

    function formatDate(dateStr: string) {
        const date = new Date(dateStr);

        const day = String(date.getDate()).padStart(2, "0");

        const month = date.toLocaleString("en-US", {
            month: "short",
        });

        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }
</script>

<div class="devlog">
    <!-- TITLE -->
    <div class="title">#devlog</div>
    <!-- <hr /> -->

    <!-- FILTERS -->
    <div class="filters">
        filters:
        {#each categories as cat}
            <button
                class:selected={selectedCategory === cat}
                style="
                            color: {getColor(cat)};
                            border-color: {getColor(cat)}cc;
                            background-color: {getColor(cat)}10;
                        "
                on:click={() => (selectedCategory = cat)}
            >
                <!-- <span class="dot"></span> -->
                {cat}
            </button>
        {/each}
    </div>

    <!-- LIST WRAPPER (CENTERED) -->
    <div class="center">
        <div class="list">
            {#each filteredEntries as entry}
                <div
                    class="entry"
                    role="link"
                    tabindex="0"
                    on:click={() => goToPost(entry.slug)}
                    on:keydown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            goToPost(entry.slug);
                        }
                    }}
                >
                    <span class="date">{formatDate(entry.date)}</span>

                    <span
                        class="category"
                        style="color: {getColor(entry.category)}"
                    >
                        {entry.category}
                    </span>

                    <span class="name">{entry.title}</span>

                    <div class="keywords">
                        {#each entry.keywords as k}
                            <span class="tag">#{k}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    /* hr {
        border: none;
        height: 2px;
        width: 100%;
        background: var(--col-transparent-2);
    } */
    .devlog {
        grid-column: 1 / 10;
        width: 100%;
        font-family: monospace;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    /* TITLE */
    .title {
        font-size: 2rem;
        letter-spacing: 0.4rem;
        opacity: 0.9;
        margin-bottom: 0.3rem;
    }

    /* FILTERS */
    .filters {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .filters button {
        background: transparent;
        border: 1px solid var(--col-border);
        border-radius: 2px;
        padding: 0.3rem 0.7rem;
        cursor: pointer;
        font-family: monospace;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        transition: 0.15s;
    }

    .filters button.selected {
        background: rgba(255, 255, 255, 0.08);
    }

    /* CENTER CONTENT */
    .center {
        display: flex;
        justify-content: center;
    }

    .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .entry {
        position: relative;
        display: grid;
        grid-template-columns: 15% 15% 1fr;
        grid-template-rows: auto auto;
        padding: 0.8rem 0.5rem 0.8rem 1.4rem; /* extra left space for > */
        cursor: pointer;
        transition: 0.15s;
    }

    .entry::before {
        content: ">";
        position: absolute;
        left: 0.35rem;
        top: 0.8rem; /* aligns with first row */
        opacity: 0.45;
        transition: 0.15s;
    }

    .entry:hover {
        background: var(--bg-2);
        transform: translateX(4px);
    }

    /* ROW */
    .date {
        grid-column: 1;
        grid-row: 1;
        opacity: 0.6;
        font-size: 0.85rem;
    }

    .category {
        grid-column: 2;
        grid-row: 1;
        font-size: 0.8rem;
        text-transform: lowercase;
        font-weight: bold;
    }

    .name {
        grid-column: 3;
        grid-row: 1;
        font-weight: bold;
    }

    .keywords {
        grid-column: 3;
        grid-row: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        font-size: 0.85rem;
        opacity: 0.7;
        font-style: italic;
    }

    .tag {
        opacity: 0.6;
    }

    .entry:hover .tag {
        opacity: 1;
    }

    @media (max-width: 480px) {
        .devlog {
            margin: 0 auto;
            padding: 0.5rem;
        }

        .entry {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-rows: auto auto auto;
            column-gap: 0.6rem;
            row-gap: 0.15rem;

            padding: 0.6rem 0.35rem;
            border-left: 2px solid var(--col-border);
            cursor: pointer;
            transition: 0.15s;
        }

        /* title row */
        .name {
            grid-column: 1 / span 2;
            grid-row: 1;
            font-weight: bold;
        }

        /* date + category row */
        .date {
            grid-column: 1;
            grid-row: 2;
            font-size: 0.72rem;
            opacity: 0.6;
        }

        .category {
            grid-column: 2;
            grid-row: 2;
            font-size: 0.72rem;
        }

        /* keywords row */
        .keywords {
            grid-column: 1 / span 2;
            grid-row: 3;

            display: flex;
            flex-wrap: wrap;
            gap: 0.3rem;

            font-size: 0.72rem;
            opacity: 0.7;
        }
    }
</style>
