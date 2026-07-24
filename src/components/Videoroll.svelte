<script lang="ts">
    import raw from "../data/videoroll.json";

    type Video = {
        visibility: boolean;
        added?: string;
        created?: string;
        title?: string;
        name?: string;
        description?: string;
        abstract?: string;
        url?: string;
        to?: string;
        tags?: string[];
        keywords?: string[];
        notes?: string[];
        language?: string;
        author?: string;
        image?: string;
    };

    type Mode = "date" | "tag" | "lang" | "random";

    // Normalize incoming items to account for both JSON formats
    function normalizeVideo(v: Video) {
        const videoUrl = v.url || v.to || "";
        return {
            ...v,
            title: v.title || v.name || "Untitled Video",
            description: v.description || v.abstract || "",
            url: videoUrl,
            added: v.added || (v.created ? v.created.slice(0, 10) : ""),
            tags: v.tags || v.keywords || [],
            language: (v.language || "en").toLowerCase(),
            thumbnail: v.image || getYoutubeThumbnail(videoUrl),
        };
    }

    // Extract YouTube video ID and construct thumbnail URL
    function getYoutubeThumbnail(url: string): string {
        if (!url) return "";
        let videoId = "";
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            videoId = match[2];
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return "";
    }

    type NormalizedVideo = ReturnType<typeof normalizeVideo>;

    let videos: NormalizedVideo[] = (raw as Video[]).map(normalizeVideo);
    let mode: Mode = "date";
    let selectedTag = "all";
    let selectedLang = "all";

    let history: number[] = [];
    let historyCursor = -1;

    function hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
        }
        return hash;
    }

    const PALETTES: [string, string, string][] = [
        ["#7fd1ae18", "#7fd1ae55", "#7fd1ae"], // mint green
        ["#d8a0ff18", "#d8a0ff55", "#d8a0ff"], // lavender
        ["#f2c48d18", "#f2c48d55", "#f2c48d"], // warm peach
        ["#8ecbff18", "#8ecbff55", "#8ecbff"], // sky blue
        ["#f5d76e18", "#f5d76e55", "#f5d76e"], // soft yellow
        ["#9aa4b218", "#9aa4b255", "#9aa4b2"], // slate
        ["#c8c8c818", "#c8c8c855", "#c8c8c8"], // light gray
        ["#ffb3cc18", "#ffb3cc55", "#ffb3cc"], // blush pink
        ["#99ccff18", "#99ccff55", "#99ccff"], // periwinkle
        ["#b3e6a018", "#b3e6a055", "#b3e6a0"], // sage
        ["#ffd9a018", "#ffd9a055", "#ffd9a0"], // apricot
        ["#c9a8f518", "#c9a8f555", "#c9a8f5"], // lilac
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

    function sortByDateDesc(a: NormalizedVideo, b: NormalizedVideo) {
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

    $: visible = videos.filter((v) => v.visibility).sort(sortByDateDesc);

    $: allTags = ["all", ...new Set(visible.flatMap((v) => v.tags))].sort();

    $: allLangs = ["all", ...new Set(visible.map((v) => v.language))].sort();

    $: filteredByTag =
        selectedTag === "all"
            ? visible
            : visible.filter((v) => v.tags.includes(selectedTag));

    $: filteredByLang =
        selectedLang === "all"
            ? visible
            : visible.filter((v) => v.language === selectedLang);

    $: currentRandom =
        historyCursor >= 0 ? visible[history[historyCursor]] : null;

    $: if (mode === "random" && history.length === 0 && visible.length) {
        nextRandom();
    }
</script>

<div class="videoroll">
    <div class="header">
        <div class="title">#curated_videos</div>
        <div class="modes">
            <button class:active={mode === "date"} on:click={() => (mode = "date")}>date</button>
            <button class:active={mode === "tag"} on:click={() => (mode = "tag")}>tag</button>
            <button class:active={mode === "lang"} on:click={() => (mode = "lang")}>language</button>
            <button class:active={mode === "random"} on:click={() => (mode = "random")}>random</button>
        </div>
    </div>

    {#if mode === "tag"}
        <div class="filter-bar">
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

    {#if mode === "lang"}
        <div class="filter-bar">
            {#each allLangs as lang}
                <button
                    class:selected={selectedLang === lang}
                    on:click={() => (selectedLang = lang)}
                >
                    {lang.toUpperCase()}
                </button>
            {/each}
        </div>
    {/if}

    {#if mode === "random"}
        <div class="random-controls">
            <button on:click={prevRandom} disabled={historyCursor <= 0}>← prev</button>
            <button on:click={nextRandom}>next →</button>
        </div>
    {/if}

    <div class="list">
        {#if mode === "date"}
            {#each visible as video}
                <a class="card" href={video.url} target="_blank" rel="noopener noreferrer">
                    <div class="thumb-container">
                        {#if video.thumbnail}
                            <img src={video.thumbnail} alt={video.title} loading="lazy" />
                        {:else}
                            <div class="thumb-placeholder">No Thumbnail</div>
                        {/if}
                        <div class="play-icon">▶</div>
                    </div>
                    <div class="card-body">
                        <div class="row-meta">
                            <span class="date">{video.added}</span>
                            {#if video.language}<span class="lang">{video.language.toUpperCase()}</span>{/if}
                        </div>
                        <h2 class="row-title">{video.title}</h2>
                        {#if video.author}
                            <div class="author">by {video.author}</div>
                        {/if}
                        {#if video.description}
                            <p class="row-description">{video.description}</p>
                        {/if}
                        <div class="row-tags">
                            {#each video.tags as tag}
                                {@const col = getColorForLabel(tag)}
                                <span class="pill" style="background:{col.bg}; border-color:{col.border}; color:{col.text};">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        {:else if mode === "tag"}
            {#each filteredByTag as video}
                <a class="card" href={video.url} target="_blank" rel="noopener noreferrer">
                    <div class="thumb-container">
                        {#if video.thumbnail}
                            <img src={video.thumbnail} alt={video.title} loading="lazy" />
                        {:else}
                            <div class="thumb-placeholder">No Thumbnail</div>
                        {/if}
                        <div class="play-icon">▶</div>
                    </div>
                    <div class="card-body">
                        <div class="row-meta">
                            <span class="date">{video.added}</span>
                            {#if video.language}<span class="lang">{video.language.toUpperCase()}</span>{/if}
                        </div>
                        <h2 class="row-title">{video.title}</h2>
                        {#if video.author}
                            <div class="author">by {video.author}</div>
                        {/if}
                        {#if video.description}
                            <p class="row-description">{video.description}</p>
                        {/if}
                        <div class="row-tags">
                            {#each video.tags as tag}
                                {@const col = getColorForLabel(tag)}
                                <span class="pill" style="background:{col.bg}; border-color:{col.border}; color:{col.text};">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        {:else if mode === "lang"}
            {#each filteredByLang as video}
                <a class="card" href={video.url} target="_blank" rel="noopener noreferrer">
                    <div class="thumb-container">
                        {#if video.thumbnail}
                            <img src={video.thumbnail} alt={video.title} loading="lazy" />
                        {:else}
                            <div class="thumb-placeholder">No Thumbnail</div>
                        {/if}
                        <div class="play-icon">▶</div>
                    </div>
                    <div class="card-body">
                        <div class="row-meta">
                            <span class="date">{video.added}</span>
                            {#if video.language}<span class="lang">{video.language.toUpperCase()}</span>{/if}
                        </div>
                        <h2 class="row-title">{video.title}</h2>
                        {#if video.author}
                            <div class="author">by {video.author}</div>
                        {/if}
                        {#if video.description}
                            <p class="row-description">{video.description}</p>
                        {/if}
                        <div class="row-tags">
                            {#each video.tags as tag}
                                {@const col = getColorForLabel(tag)}
                                <span class="pill" style="background:{col.bg}; border-color:{col.border}; color:{col.text};">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        {:else if mode === "random" && currentRandom}
            <a class="card" href={currentRandom.url} target="_blank" rel="noopener noreferrer">
                <div class="thumb-container">
                    {#if currentRandom.thumbnail}
                        <img src={currentRandom.thumbnail} alt={currentRandom.title} />
                    {:else}
                        <div class="thumb-placeholder">No Thumbnail</div>
                    {/if}
                    <div class="play-icon">▶</div>
                </div>
                <div class="card-body">
                    <div class="row-meta">
                        <span class="date">{currentRandom.added}</span>
                        {#if currentRandom.language}<span class="lang">{currentRandom.language.toUpperCase()}</span>{/if}
                    </div>
                    <h2 class="row-title">{currentRandom.title}</h2>
                    {#if currentRandom.author}
                        <div class="author">by {currentRandom.author}</div>
                    {/if}
                    {#if currentRandom.description}
                        <p class="row-description">{currentRandom.description}</p>
                    {/if}
                    <div class="row-tags">
                        {#each currentRandom.tags as tag}
                            {@const col = getColorForLabel(tag)}
                            <span class="pill" style="background:{col.bg}; border-color:{col.border}; color:{col.text};">{tag}</span>
                        {/each}
                    </div>
                </div>
            </a>
        {/if}
    </div>
</div>

<style>
    .videoroll {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
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
        font-size: 1.8rem;
        letter-spacing: 0.2rem;
        font-weight: 700;
    }

    .modes,
    .filter-bar,
    .random-controls {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .filter-bar,
    .random-controls {
        margin-bottom: 2rem;
    }

    button {
        border: 1px solid var(--col-border, #333);
        background: transparent;
        color: inherit;
        padding: 0.45rem 0.9rem;
        font-size: 0.85rem;
        cursor: pointer;
        transition: 0.15s ease-in-out;
        opacity: 0.65;
        border-radius: 4px;
    }

    button:hover {
        background: var(--bg-2, rgba(255, 255, 255, 0.05));
        opacity: 1;
    }

    button.active,
    button.selected {
        background: var(--bg-2, rgba(255, 255, 255, 0.1));
        opacity: 1;
        font-weight: 600;
    }

    button:disabled {
        opacity: 0.25;
        cursor: not-allowed;
    }

    /* Single Column List Layout */
    .list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    /* Spacious Video Card */
    .card {
        display: flex;
        flex-direction: column;
        color: inherit;
        text-decoration: none;
        border: 1px solid var(--col-border, #2a2a2a);
        background: var(--bg-1, transparent);
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    @media (min-width: 680px) {
        .card {
            flex-direction: row;
            min-height: 210px;
        }
    }

    .card:hover {
        transform: translateY(-2px);
        background: var(--bg-2, rgba(255, 255, 255, 0.03));
        border-color: var(--col-text, #666);
    }

    .thumb-container {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        background: #00000033;
        overflow: hidden;
        flex-shrink: 0;
    }

    @media (min-width: 680px) {
        .thumb-container {
            width: 320px;
            aspect-ratio: auto;
        }
    }

    .thumb-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .card:hover .thumb-container img {
        transform: scale(1.04);
    }

    .thumb-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 0.85rem;
        opacity: 0.4;
    }

    .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 44px;
        height: 44px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        padding-left: 3px;
        opacity: 0;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .card:hover .play-icon {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.1);
    }

    .card-body {
        padding: 1.25rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex-grow: 1;
    }

    .row-meta {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .date {
        font-size: 0.8rem;
        opacity: 0.5;
        white-space: nowrap;
        font-variant-numeric: tabular-nums;
    }

    .lang {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        opacity: 0.6;
        border: 1px solid var(--col-border, #444);
        border-radius: 3px;
        padding: 0.05rem 0.35rem;
    }

    .row-title {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.35;
        margin: 0;
    }

    .author {
        font-size: 0.85rem;
        opacity: 0.65;
        font-style: italic;
    }

    .row-description {
        font-size: 0.92rem;
        opacity: 0.8;
        line-height: 1.5;
        margin: 0.2rem 0 0.5rem 0;
        display: -webkit-box;
        /* -webkit-line-clamp: 4; */
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .row-tags {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        margin-top: auto;
        padding-top: 0.5rem;
    }

    .pill {
        font-size: 0.72rem;
        padding: 0.2rem 0.55rem;
        border-radius: 3px;
        border: 1px solid transparent;
        font-weight: 500;
        letter-spacing: 0.02em;
        white-space: nowrap;
    }
</style>