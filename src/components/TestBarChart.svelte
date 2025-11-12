<script>
    import { onMount } from "svelte";
    onMount(() => {
        // D3 code that selects SVG and draws bars
    });
    export let title = "Quarterly Sales";
    export let labels = ["Q1", "Q2", "Q3", "Q4"];
    export let data = [1500, 2200, 1800, 2900];
    export let color = "#4CAF50";

    const width = 400;
    const height = 200;
    const barWidth = 50;
    const spacing = 20;

    // Scale data to fit SVG height
    const maxData = Math.max(...data);
    const scale = height / maxData;
</script>

<div>
    <h3>{title}</h3>
    <svg
        {width}
        height={height + 30}
    >
        {#each data as d, i}
            <!-- Bar -->
            <rect
                x={i * (barWidth + spacing)}
                y={height - d * scale}
                width={barWidth}
                height={d * scale}
                fill={color}
            />
            <!-- Label -->
            <text
                x={i * (barWidth + spacing) + barWidth / 2}
                y={height + 15}
                text-anchor="middle"
                font-size="12"
                fill="#333"
            >
                {labels[i]}
            </text>
        {/each}
    </svg>
</div>
