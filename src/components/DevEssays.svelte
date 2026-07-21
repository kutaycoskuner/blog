<script lang="ts">
    export let essays;
</script>

<div class="list">
    {#each essays as essay}
        <div class="entry">
            <a
                href={`${import.meta.env.BASE_URL}essays/${essay.id.replace(/\.(md|mdx)$/, "")}`}
            >
                {essay.data.title}
            </a>
        </div>
    {/each}
</div>

<style scoped>
    .list {
        display: flex;
        flex-direction: column;
        font-family: monospace;
    }

    a {
        color: var(--col);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
        opacity: 0.8;
    }

    .entry {
        margin-bottom: 0.4rem;
    }
</style>
