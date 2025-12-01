<script>
    import { onMount } from "svelte";
    import {getLanguageDescription, formatDate} from "../utils/utils"

    export let selectedContent = null;

    // Listen to global event
    onMount(() => {
        document.addEventListener("browseArticle", (event) => {
            if (event.detail) {
                selectedContent = event.detail;
            }
        });
    });
</script>

<div class="preview">
    {#if selectedContent != undefined && selectedContent != null}
        <!-- Image -->
        {#if selectedContent.image && selectedContent.image !== ""}
            <img
                src={selectedContent.image}
                alt={selectedContent.name || "Article preview background"}
                class="preview-image"
            />
        {/if}

        {#if selectedContent.name !== ""}
            <div class="content-title">{selectedContent.name}</div>
        {/if}

        {#if selectedContent.abstract !== ""}
            <div class="content-abstract">{selectedContent.abstract}</div>
        {/if}

        {#if selectedContent.author}
            <div class="content-author">
                {#if selectedContent.language}
                    <div class="content-language">
                        {getLanguageDescription(selectedContent.language)}<br />
                    </div>
                {/if}

                {#if selectedContent.editor}
                    <div class="content-editor">
                        edited by {selectedContent.editor}<br />
                    </div>
                {/if}

                {#if selectedContent.translator}
                    <div class="content-translator">
                        translated by {selectedContent.translator}<br />
                    </div>
                {/if}

                {selectedContent.author},
                {formatDate(selectedContent.created, 'yyyy')}
            </div>
        {/if}
    {/if}
</div>

<style scoped>
    .main {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        gap: 0px;
    }

    .main-navigation {
        grid-column: -1 / 1;
    }

    .content-navigator {
        margin: auto;
        grid-column: 4 / 8;
        display: grid;
        place-items: center;
    }

    .preview {
        width: auto;
        position: relative;
        padding: 0.2em;
        grid-column: 9 / 13;
        margin: auto;
        border-radius: 2px;
    }

    .preview img {
        object-fit: contain;
        width: 100%;
        max-width: 860px;
        max-height: 480px;
        max-width: 100%;
        z-index: -1;
        opacity: 0.6;
    }

    .preview .content-title {
        font-family: monospace;
        font-weight: bold;
        font-size: 2em;
    }

    .preview .content-abstract {
        font-style: italic;
        font-family: monospace;
        margin-top: 2em;
    }

    .preview .content-language,
    .preview .content-editor,
    .content-translator {
        font-style: italic;
        opacity: 0.6;
    }

    .preview .content-author {
        text-align: right;
        margin-top: 4em;
        font-family: monospace;
        bottom: 0;
        right: 0;
    }

    @media (max-width: 480px) {
        .content-navigator {
            margin: 0 auto;
            grid-column: 2 / 16;
            display: grid;
            place-items: center;
        }
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        .content-navigator {
            margin: 0 auto;
            grid-column: 2 / 16;
            display: grid;
            place-items: center;
            height: 80vh;
        }
    }
</style>
