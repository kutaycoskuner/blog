<script lang="ts">
    import raw from "../data/journal.json";

    type JournalEntry = {
        visibility: boolean;
        date: string;
        category: string;
        content: string[];
        links?: string[];
    };

    let entries: JournalEntry[] = raw;

    // only visible entries
    $: visibleEntries = entries.filter((e) => e.visibility);

    function sortByDateDesc(a: JournalEntry, b: JournalEntry) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }

    function formatMonthYear(dateStr: string) {
        const date = new Date(dateStr);
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();
        return `${month} ${year}`;
    }

    // group by month/year
    $: grouped = (() => {
        const sorted = [...visibleEntries].sort(sortByDateDesc);

        const map = new Map<string, JournalEntry[]>();

        for (const entry of sorted) {
            const key = formatMonthYear(entry.date);

            if (!map.has(key)) {
                map.set(key, []);
            }

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
                            {#each entry.content as paragraph}
                                <p>{paragraph}</p>
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
    }

    .month {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
        width: 100%;
        box-sizing: border-box;
        padding: 0.8rem;
        border-left: 2px solid var(--col-border);
        transition: 0.15s;
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
</style>
