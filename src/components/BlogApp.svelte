<script lang="ts">
    import DisplayMode from "./DisplayMode.svelte";
    import ContentTree from "./ContentTree.svelte";

    let displayMode: "selection" | "linear" = "linear";

    $: console.log("Initial displayMode:", displayMode);
</script>

<!-- <DisplayMode
    mode={displayMode}
    on:change={(e) => (displayMode = e.detail)}
/> -->
<ContentTree {displayMode}/>