<script>
    import { onMount, createEventDispatcher } from "svelte";
    import rawTreeData from "../data/content_tree.json";
    import { theme, STORAGE_KEY, getSystemTheme } from "../stores/theme";
    import ContentTreePreview from "./ContentTreePreview.svelte";

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
    let selectedContent;
    let tree = [];
    let allCollapsed;
    $: allCollapsed = tree.length > 0 ? checkAllCollapsed(tree) : false;
    // Use a reactive store for the raw data to ensure any imports are handled
    // correctly, though for a static import, a simple variable is fine.
    // We'll use a simple variable as it's static on component creation.

    // --- Functions (Equivalent to Vue Methods) ---

    /**
     * Builds a hierarchical tree structure from the data
     */
    function buildTree() {
        tree = rawTree.reduce((acc, item) => {
            let currentLevel = acc;

            // Process each category as a folder
            item.category.forEach((category) => {
                let folder = currentLevel.find((f) => f.name === category);
                if (!folder) {
                    folder = { name: category, children: [], collapsed: false };
                    currentLevel.push(folder);
                }
                currentLevel = folder.children;
            });

            // Add the actual item as a leaf node
            currentLevel.push({
                name: item.name,
                link: item.to,
                details: item,
                children: null, // Leaf nodes don't have children
                visible: item.visibility,
            });
            return acc;
        }, []);
        // Trigger Svelte's reactivity manually if needed, but simple assignment should cover it:
        // tree = tree;
    }

    function toggleCollapse(node) {
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

    function setCollapseStateForAllNodes(state) {
        const setState = (nodes) => {
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

    function checkAllCollapsed(nodes) {
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

    function selectNode(nodeName) {
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

        selectedContent = selectedNode; // ← THE IMPORTANT FIX
        // console.log("selected node:", selectedNode);
    }

    onMount(() => {
        buildTree();
        updateCollapseState();
    });

    // The class is computed reactively based on the state of allCollapsed
    $: expanseReverseClass = allCollapsed ? "reverse" : "";

    // --- Tree Node Component (Recursive Helper) ---
    function TreeNode({ node }) {
        return null;
    }
</script>

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
                                        on:click={() => toggleCollapse(child)}
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
                                    <span class="folder-name">{child.name}</span
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
                                                            subChild.name
                                                        )}
                                                    on:focus={() =>
                                                        selectNode(
                                                            subChild.name
                                                        )}
                                                    on:mouseleave={() =>
                                                        selectNode(undefined)}
                                                    on:blur={() =>
                                                        selectNode(undefined)}
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

<ContentTreePreview
    client:load
    {selectedContent}
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
