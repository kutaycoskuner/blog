<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import rawTreeData from "../data/content_tree.json";
    import { theme, STORAGE_KEY, getSystemTheme } from "../stores/theme";
    import ContentTreePreview from "./ContentTreePreview.svelte";
    import type { ContentDetails } from "../types";

    export let displayMode: "selection" | "linear";

    interface TreeNode {
        name: string;
        link?: string;
        details?: ContentDetails;
        children: TreeNode[] | null;
        collapsed?: boolean;
        visible?: boolean;
    }

    const selectedContentBase = {
        name: "",
        author: "",
        created: "",
        updated: "",
        translator: "",
        editor: "",
        abstract: "",
        keywords: [],
        language: "",
        visibility: false,
        image: "",
        imagecredit: "",
    };

    const dispatch = createEventDispatcher();
    // reactive derived state
    $: currentDisplayTheme = $theme === "system" ? getSystemTheme() : $theme;
    $: invertedColorComputed = currentDisplayTheme === "dark";

    const rawTree = rawTreeData.data;

    // The hierarchical tree structure. Svelte uses simple assignments for reactivity.
    let selectedContent: ContentDetails = selectedContentBase;
    let tree: TreeNode[] = [];
    let allCollapsed: boolean;
    $: allCollapsed = tree.length > 0 ? checkAllCollapsed(tree) : false;

    /**
     * Builds a hierarchical tree structure from the data
     */
    function buildTree() {
        tree = rawTree.reduce<TreeNode[]>((acc, item) => {
            let currentLevel = acc;

            // Process each category as a folder
            item.category.forEach((category) => {
                let folder = currentLevel.find((f) => f.name === category);
                if (!folder) {
                    folder = { name: category, children: [], collapsed: false };
                    currentLevel.push(folder);
                }
                currentLevel = folder.children!;
            });

            // Add the actual item as a leaf node
            currentLevel.push({
                name: item.name,
                link: item.to,
                details: {
                    ...item,
                    imagecredit: item["image-credit"], // map dash to camelCase
                },
                children: null, // Leaf nodes don't have children
                visible: item.visibility,
            });
            return acc;
        }, []);
        // Trigger Svelte's reactivity manually if needed, but simple assignment should cover it:
        // tree = tree;
    }

    function toggleCollapse(node: TreeNode) {
        node.collapsed = !node.collapsed;
        // The assignment to 'tree' forces Svelte to re-evaluate the reactive state
        // and update the DOM for deeply nested changes.
        tree = tree;
        updateCollapseState();
    }

    function expandAll() {
        setCollapseStateForAllNodes(false);
        updateCollapseState();
    }

    function collapseAll() {
        setCollapseStateForAllNodes(true);
        updateCollapseState();
    }

    function toggleExpandCollapse() {
        if (allCollapsed) {
            expandAll();
        } else {
            collapseAll();
        }
    }

    function setCollapseStateForAllNodes(state: boolean) {
        const setState = (nodes: TreeNode[]) => {
            nodes.forEach((node) => {
                node.collapsed = state;
                if (node.children && node.children.length > 0) {
                    setState(node.children);
                }
            });
        };
        setState(tree);
        // Ensure reactivity is triggered for the deep change
        tree = tree;
    }

    function updateCollapseState() {
        allCollapsed = checkAllCollapsed(tree);
    }

    function checkAllCollapsed(nodes: TreeNode[]): boolean {
        return nodes.every((node) => {
            if (!node.children || node.children.length === 0) {
                return true;
            }
            if (!node.collapsed) {
                return false;
            }
            return checkAllCollapsed(node.children);
        });
    }

    function selectNode(nodeName?: string) {
        // when leaving hover
        if (!nodeName) {
            selectedContent = selectedContentBase;
            return;
        }

        // find the actual node data
        const selectedNode = rawTree.find((item) => item.name === nodeName);

        if (!selectedNode) {
            selectedContent = selectedContentBase;
            return;
        }

        if (selectedNode) {
            selectedContent = {
                ...selectedNode,
                imagecredit: selectedNode["image-credit"], // map if needed
            };
        } else {
            selectedContent = selectedContentBase;
        }
        // console.log("selected node:", selectedNode);
    }

    onMount(() => {
        buildTree();
        updateCollapseState();
    });

    // The class is computed reactively based on the state of allCollapsed
    $: expanseReverseClass = allCollapsed ? "reverse" : "";
</script>

{#if displayMode === "selection"}
    <div class="linear-display">this is sekret not implemented linear display.</div>
{:else}
    <div class="content-navigator no-select">
        <div class="tree-container">
            {#each tree as node}
                {#if node.children && node.children.length > 0}
                    <div class="folder">
                        <span
                            on:click={() => toggleCollapse(node)}
                            on:keydown={(e) => {
                                // Trigger collapse/expand on Enter (key: 'Enter') or Space (key: ' ')
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault(); // Prevent default action (like scrolling)
                                    toggleCollapse(node);
                                }
                            }}
                            role="button"
                            tabindex="0"
                            class="toggle-btn"
                        >
                            {node.collapsed ? "+" : "-"}
                        </span>
                        <span class="folder-name">{node.name}</span>
                    </div>
                    {#if !node.collapsed}
                        <div class="children">
                            {#each node.children as child}
                                {#if child.children && child.children.length > 0}
                                    <div class="folder">
                                        <span
                                            on:click={() =>
                                                toggleCollapse(child)}
                                            on:keydown={(e) => {
                                                // Trigger the collapse/expand on Enter or Space key press
                                                if (
                                                    e.key === "Enter" ||
                                                    e.key === " "
                                                ) {
                                                    e.preventDefault(); // Prevent default action (like page scrolling)
                                                    toggleCollapse(child);
                                                }
                                            }}
                                            role="button"
                                            tabindex="0"
                                            aria-expanded={!child.collapsed}
                                            class="toggle-btn"
                                        >
                                            {child.collapsed ? "+" : "-"}
                                        </span>
                                        <span class="folder-name"
                                            >{child.name}</span
                                        >
                                    </div>
                                    {#if !child.collapsed}
                                        <div class="children">
                                            {#each child.children as subChild}
                                                {#if subChild.visible}
                                                    <a
                                                        href={subChild.link}
                                                        on:mouseover={() =>
                                                            selectNode(
                                                                subChild.name,
                                                            )}
                                                        on:focus={() =>
                                                            selectNode(
                                                                subChild.name,
                                                            )}
                                                        on:mouseleave={() =>
                                                            selectNode(
                                                                undefined,
                                                            )}
                                                        on:blur={() =>
                                                            selectNode(
                                                                undefined,
                                                            )}
                                                        class="leaf-link"
                                                        target="_blank"
                                                    >
                                                        {subChild.name}
                                                    </a>
                                                {/if}
                                            {/each}
                                        </div>
                                    {/if}
                                {:else}
                                    <a
                                        href={child.link}
                                        class="leaf-link"
                                        target="_blank">{child.name}</a
                                    >
                                {/if}
                            {/each}
                        </div>
                    {/if}
                {:else}
                    <div class="leaf">
                        <a
                            href={node.link}
                            class="leaf-link"
                            target="_blank">{node.name}</a
                        >
                    </div>
                {/if}
            {/each}

            <div class="toggle-container">
                <div class="toggle-all-btn">
                    <button
                        type="button"
                        on:click={toggleExpandCollapse}
                        class="toggle-all-btn expand-collapse"
                        class:inverted-color={invertedColorComputed}
                        class:reverse={allCollapsed}
                        aria-expanded={allCollapsed}
                        aria-label={allCollapsed
                            ? "Expand All Content"
                            : "Collapse All Content"}
                    >
                        <img
                            src="icons/arrow_left-256.png"
                            alt="Toggle expand/collapse"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}

<ContentTreePreview
    {selectedContent}
    style="display: {displayMode === 'selection' && selectedContent ? 'block' : 'none'}"
/>


<style scoped>
    .expand-collapse {
        user-select: none;
        cursor: pointer;
    }

    .expand-collapse img {
        transform: rotate(90deg);
        max-width: 100%;
        max-height: 0.6em;
    }

    .expand-collapse.reverse img {
        transform: rotate(-90deg);
    }

    .tree-container {
        font-family: monospace;
        padding: 0;
        margin: 0;
    }

    .folder {
        display: flex;
        align-items: center;
    }

    .toggle-btn {
        cursor: pointer;
        margin-right: 8px;
    }

    .folder-name {
        font-weight: bold;
    }

    .children {
        padding-left: 20px;
    }

    .leaf {
        margin-left: 20px;
    }

    .leaf-link {
        display: block;
        text-decoration: none;
    }

    .leaf-link:hover {
        text-decoration: underline;
    }

    .toggle-all-btn {
        border: none;
        background: none;
    }

    .content-navigator {
        margin: auto;
        grid-column: 4 / 8;
        display: grid;
        place-items: center;
    }
</style>
