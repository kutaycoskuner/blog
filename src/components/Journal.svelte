<script lang="ts">
    import raw from "../data/journal.json";

    type Asset = {
        type: "image" | "link";
        value: string;
        position: number;
    };

    type JournalEntry = {
        visibility: boolean;
        date: string;
        category: string;
        content: string[];
        assets?: Asset[];
    };

    let entries: JournalEntry[] = raw;

    $: visibleEntries = entries.filter((e) => e.visibility);

    function sortByDateDesc(a: JournalEntry, b: JournalEntry) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    function formatMonthYear(dateStr: string) {
        const date = new Date(dateStr);
        return `${date.toLocaleString("en-US", { month: "long" })} ${date.getFullYear()}`;
    }

    function getAssetsAt(entry: JournalEntry, position: number) {
        return entry.assets?.filter((a) => a.position === position) ?? [];
    }

    function getEndAssets(entry: JournalEntry) {
        return getAssetsAt(entry, -1);
    }

    function getStartAssets(entry: JournalEntry) {
        return getAssetsAt(entry, 0);
    }

    $: grouped = (() => {
        const sorted = [...visibleEntries].sort(sortByDateDesc);
        const map = new Map<string, JournalEntry[]>();

        for (const entry of sorted) {
            const key = formatMonthYear(entry.date);
            if (!map.has(key)) map.set(key, []);
            map.get(key)!.push(entry);
        }

        return map;
    })();
</script>

<div class="journal">
    <div class="title">#journal</div>

    {#each Array.from(grouped.entries()) as [month, items]}
        <div class="month">
            <div class="month-title">{month}</div>

            <div class="entries">
                {#each items as entry}
                    <div class="entry">
                        <div class="meta">
                            <span class="date">{entry.date}</span>
                            <span class="category">{entry.category}</span>
                        </div>

                        <div class="content">
                            <!-- ASSETS AT START (position 0) -->
                            {#each getStartAssets(entry) as asset}
                                <div class="asset">
                                    {#if asset.type === "image"}
                                        <img
                                            src={asset.value}
                                            alt="asset"
                                        />
                                    {:else if asset.type === "link"}
                                        <a
                                            href={asset.value}
                                            target="_blank"
                                        >
                                            {asset.value}
                                        </a>
                                    {/if}
                                </div>
                            {/each}

                            <!-- CONTENT WITH INJECTED ASSETS -->
                            {#each entry.content as paragraph, i}
                                <p>{paragraph}</p>

                                {#each getAssetsAt(entry, i + 1) as asset}
                                    <div class="asset">
                                        {#if asset.type === "image"}
                                            <img
                                                src={asset.value}
                                                alt="asset"
                                            />
                                        {:else if asset.type === "link"}
                                            <a
                                                href={asset.value}
                                                target="_blank"
                                            >
                                                {asset.value}
                                            </a>
                                        {/if}
                                    </div>
                                {/each}
                            {/each}

                            <!-- END ASSETS (position -1) -->
                            {#each getEndAssets(entry) as asset}
                                <div class="asset">
                                    {#if asset.type === "image"}
                                        <img
                                            src={asset.value}
                                            alt="asset"
                                        />
                                    {:else if asset.type === "link"}
                                        <a
                                            href={asset.value}
                                            target="_blank"
                                        >
                                            {asset.value}
                                        </a>
                                    {/if}
                                </div>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .journal {
        width: 100%;
        max-width: none;
        flex: 1;
        align-self: stretch;
        grid-column: 1 / -1;
    }

    .title {
        font-size: 2rem;
        letter-spacing: 0.3rem;
        margin-bottom: 1rem;
    }

    .month {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .month-title {
        font-size: 1.2rem;
        opacity: 0.7;
        border-bottom: 1px solid var(--col-border);
        padding-bottom: 0.3rem;
    }

    .entries {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .entry {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 0.8rem 0.8rem 0.8rem 1.6rem;
        transition: 0.15s;
    }

    .entry::before {
        content: ">";
        position: absolute;
        left: 0.4rem;
        top: 0.8rem;
        font-weight: bold;
        opacity: 0.6;
        color: var(--col-text);
    }

    .entry:hover {
        transform: translateX(4px);
        background: var(--bg-2);
    }

    .meta {
        display: flex;
        gap: 1rem;
        font-size: 0.8rem;
        opacity: 0.6;
        margin-bottom: 0.5rem;
    }

    .category {
        text-transform: lowercase;
        font-weight: bold;
    }

    .content p {
        margin: 0 0 0.6rem 0;
        line-height: 1.4;
        opacity: 0.85;
    }

    .visual {
        margin: 0.8rem 0 1.2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .visual img {
        max-width: 50%;
        max-height: 50%;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 6px;
        opacity: 0.95;
        display: block;
    }

    .asset {
        margin: 0.8rem 0 1.2rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .asset img {
        max-width: 50%;
        height: auto;
        object-fit: contain;
        border-radius: 6px;
        opacity: 0.95;
        display: block;
    }
</style>
