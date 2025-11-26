<script>
    export let width = 400;
    export let height = 200;
    const padding = 40;

    // Clamped Function Constants
    const clampMin = 0.2;
    const clampMax = 0.8;
    const range = clampMax - clampMin;

    // Y = 0.2 if X < 0.5, otherwise Y = 0.8
    const stepFnClamped = (x) => (x < 0.5 ? clampMin : clampMax);

    // Y = 0.2 + X * 0.6 (where 0.6 is the range)
    const lerpFnClamped = (x) => clampMin + x * range;

    const ticks = [0, 1];

    // Slider input value (0 to 1)
    let t = 0.5;

    // Reactive declarations for the RED MARKER's Y position
    $: stepY = stepFnClamped(t);
    $: lerpY = lerpFnClamped(t);

    // Function to convert normalized coordinates (0 to 1) to SVG coordinates
    const toSVG = (x, y) => ({
        cx: padding + x * (width - 2 * padding),
        cy: height - padding - y * (height - 2 * padding),
    });

    // Generate data points for the PLOTTED lines
    const points = 101;
    const stepData = Array.from({ length: points }, (_, i) => {
        const x = i / (points - 1);
        return { x, y: stepFnClamped(x) };
    });
    const lerpData = Array.from({ length: points }, (_, i) => {
        const x = i / (points - 1);
        return { x, y: lerpFnClamped(x) };
    });

    // KaTeX Initialization
    let katexReady = false;
    let katex;

    const loadKatex = () => {
        if (window.katex) {
            katex = window.katex;
            katexReady = true;
            renderEquations();
        } else {
            // Fallback or wait for the script to load
            console.error("KaTeX not loaded. Ensure scripts are executed.");
        }
    };

    // Function to render the LaTeX equations
    const renderEquations = () => {
        if (!katexReady) return;

        // Step Function Equation
        const stepElement = document.getElementById("step-equation");
        if (stepElement) {
            katex.render(
                `f_{\\text{step}}(x) = \\begin{cases} ${clampMin} & \\text{if } x < 0.5 \\\\ ${clampMax} & \\text{if } x \\ge 0.5 \\end{cases}`,
                stepElement,
                { displayMode: true, throwOnError: false }
            );
        }

        // Lerp Function Equation
        const lerpElement = document.getElementById("lerp-equation");
        if (lerpElement) {
            katex.render(
                `f_{\\text{lerp}}(x) = ${clampMin} + x \\times (0.6) \\quad \\text{for } x \\in [0, 1]`,
                lerpElement,
                { displayMode: true, throwOnError: false }
            );
        }
    };

    // Rerender when KaTeX is ready or component updates
    $: if (katexReady) renderEquations();

    // Ensure KaTeX loads and renders on mount/hydrate
    if (typeof window !== "undefined") {
        window.addEventListener("load", loadKatex);
    }
</script>

<svelte:head>
    <!-- KaTeX CSS for rendering math -->
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        xintegrity="sha384-GvrF9wI5x7H187d7bN+v8+5Q/vR+bV+C28v8+Q/1Q/g="
        crossorigin="anonymous"
    />
    <!-- KaTeX JS library -->
    <script
        src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"
        xintegrity="sha384-5R7C8/v2zQ/iQ8Nq9K7q/rP/8u2e/B4z/1P/y8/A/p"
        crossorigin="anonymous"
        on:load={loadKatex}
    ></script>
</svelte:head>

<!-- Main Container for the entire visualization -->
<div
    class="vis-container equation-row"
    style="display:flex; flex-direction:column; align-items:center;"
>
    <!-- Row for Graphs -->
    <div style="display:flex; gap:40px;">
        <!-- Column 1: Step Function -->
        <div
            style="width: {width}px; display:flex; flex-direction:column; align-items:center;"
        >
            <svg
                {width}
                {height}
            >
                <!-- Axes (Reduced opacity) -->
                <line
                    x1={padding}
                    y1={height - padding}
                    x2={width - padding}
                    y2={height - padding}
                    stroke="currentColor"
                    stroke-opacity="0.5"
                />
                <line
                    x1={padding}
                    y1={padding}
                    x2={padding}
                    y2={height - padding}
                    stroke="currentColor"
                    stroke-opacity="0.5"
                />

                <text
                    x="50%"
                    y={height - 5}
                    stroke="currentColor"
                    text-anchor="middle"
                    font-size="14"
                >
                    t (time)
                </text>

                <text
                    x={padding - 25}
                    y="50%"
                    stroke="currentColor"
                    text-anchor="middle"
                    font-size="14"
                    transform="rotate(-90, {padding - 25}, {height / 2})"
                >
                    value
                </text>
                <!-- Ticks and Labels -->
                {#each ticks as tick}
                    <!-- X-Axis Tick & Label (Skipping X=0 label) -->
                    <line
                        x1={toSVG(tick, 0).cx}
                        y1={height - padding}
                        x2={toSVG(tick, 0).cx}
                        y2={height - padding + 5}
                        stroke="currentColor"
                    />
                    {#if tick !== 0}
                        <text
                            x={toSVG(tick, 0).cx}
                            y={height - padding + 15}
                            font-size="12"
                            text-anchor="middle"
                            stroke="currentColor"
                            stroke-opacity="0.5">{tick}</text
                        >
                    {/if}

                    <!-- Y-Axis Tick & Label -->
                    <line
                        x1={padding - 5}
                        y1={toSVG(0, tick).cy}
                        x2={padding}
                        y2={toSVG(0, tick).cy}
                        stroke="currentColor"
                    />
                    <text
                        x={padding - 10}
                        y={toSVG(0, tick).cy + 4}
                        font-size="12"
                        stroke="currentColor"
                        text-anchor="end"
                        stroke-opacity="0.5">{tick}</text
                    >
                {/each}

                <!-- Graph lines -->
                {#each stepData as point, i}
                    {#if i > 0}
                        <line
                            x1={toSVG(stepData[i - 1].x, stepData[i - 1].y).cx}
                            y1={toSVG(stepData[i - 1].x, stepData[i - 1].y).cy}
                            x2={toSVG(point.x, point.y).cx}
                            y2={toSVG(point.x, point.y).cy}
                            stroke="currentColor"
                            stroke-width="2"
                        />
                    {/if}
                {/each}

                <!-- Slider marker (Green dot) -->
                <circle
                    cx={toSVG(t, stepY).cx}
                    cy={toSVG(t, stepY).cy}
                    r="6"
                    fill="green"
                    stroke="currentColor"
                    stroke-width="1"
                />
            </svg>
            <sub
                class="caption"
                style="margin:0; font-size: 1.1em; font-weight: 500;"
            >
                <b> Clamped Step Function [0.2, 0.8] </b>
            </sub>
        </div>

        <!-- Column 2: Lerp Function -->
        <div
            style="width: {width}px; display:flex; flex-direction:column; align-items:center;"
        >
            <svg
                {width}
                {height}
            >
                <!-- Axes (Reduced opacity) -->
                <line
                    x1={padding}
                    y1={height - padding}
                    x2={width - padding}
                    y2={height - padding}
                    stroke="currentColor"
                    stroke-opacity="0.5"
                />
                <line
                    x1={padding}
                    y1={padding}
                    x2={padding}
                    y2={height - padding}
                    stroke="currentColor"
                    stroke-opacity="0.5"
                />

                <!-- Ticks and Labels -->
                {#each ticks as tick}
                    <!-- X-Axis Tick & Label (Skipping X=0 label) -->
                    <line
                        x1={toSVG(tick, 0).cx}
                        y1={height - padding}
                        x2={toSVG(tick, 0).cx}
                        y2={height - padding + 5}
                        stroke="currentColor"
                    />
                    {#if tick !== 0}
                        <text
                            x={toSVG(tick, 0).cx}
                            y={height - padding + 15}
                            font-size="12"
                            text-anchor="middle"
                            stroke="currentColor"
                            stroke-opacity="0.5">{tick}</text
                        >
                    {/if}

                    <!-- Y-Axis Tick & Label -->
                    <line
                        x1={padding - 5}
                        y1={toSVG(0, tick).cy}
                        x2={padding}
                        y2={toSVG(0, tick).cy}
                        stroke="currentColor"
                    />
                    <text
                        x={padding - 10}
                        y={toSVG(0, tick).cy + 4}
                        font-size="12"
                        text-anchor="end"
                        stroke="currentColor"
                        stroke-opacity="0.5">{tick}</text
                    >
                {/each}

                <!-- Graph lines -->
                {#each lerpData as point, i}
                    {#if i > 0}
                        <line
                            x1={toSVG(lerpData[i - 1].x, lerpData[i - 1].y).cx}
                            y1={toSVG(lerpData[i - 1].x, lerpData[i - 1].y).cy}
                            x2={toSVG(point.x, point.y).cx}
                            y2={toSVG(point.x, point.y).cy}
                            stroke="currentColor"
                            stroke-width="2"
                        />
                    {/if}
                {/each}

                <text
                    x="50%"
                    y={height - 5}
                    stroke="currentColor"
                    text-anchor="middle"
                    font-size="14"
                >
                    t (time)
                </text>

                <text
                    x={padding - 25}
                    y="50%"
                    stroke="currentColor"
                    text-anchor="middle"
                    font-size="14"
                    transform="rotate(-90, {padding - 25}, {height / 2})"
                >
                    value
                </text>
                <!-- Slider marker (Green dot) -->
                <circle
                    cx={toSVG(t, lerpY).cx}
                    cy={toSVG(t, lerpY).cy}
                    r="6"
                    fill="green"
                    stroke="currentColor"
                    stroke-width="1"
                />
            </svg>
            <sub
                class="caption"
                style="margin:0; font-size: 1.1em; font-weight: 500;"
            >
                <b> Clamped Linear Interpolation [0.2, 0.8] </b>
            </sub>
        </div>
    </div>

    <!-- Mathematical Functions Section -->
    <div
        style="display:flex; gap:40px; margin-top:2rem; width:100%; max-width: {width *
            2 +
            40}px;"
    >
        <!-- Step Function Equation -->
        <div
            style="width: {width}px; display:flex; flex-direction:column; align-items:center; text-align:center;"
        >
            <div
                id="step-equation"
                style="min-height: 80px;"
            ></div>
        </div>

        <!-- Lerp Function Equation -->
        <div
            style="width: {width}px; display:flex; flex-direction:column; align-items:center; text-align:center;"
        >
            <div
                id="lerp-equation"
                style="min-height: 80px;"
            ></div>
        </div>
    </div>
</div>

<!-- Slider Control (Centered) -->
<div style="margin-top:2rem; text-align: center;">
    <label style="font-size: 1.1em; font-weight: bold;">
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            bind:value={t}
        />
        {t.toFixed(2)}
    </label>
</div>

<!-- Custom CSS for the slider bar -->
<style>
    /* Base styles for the range input */
    input[type="range"] {
        width: 300px; /* fixed width for better visual control */
        margin: 7px 0;
        background: transparent;
    }

    /* Styles for the track (the line itself) */
    input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 3px; /* Thin line */
        cursor: pointer;
        background: #555; /* Dark gray line */
        border-radius: 1px;
        border: 0.2px solid #000;
    }
    input[type="range"]::-moz-range-track {
        width: 100%;
        height: 3px; /* Thin line */
        cursor: pointer;
        background: #555;
        border-radius: 1px;
        border: 0.2px solid #000;
    }
    input[type="range"]::-ms-track {
        width: 100%;
        height: 3px; /* Thin line */
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 6px 0;
        color: transparent;
    }

    /* Styles for the thumb (the handle) */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: 1px solid #000;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: var(--col-2);
        cursor: pointer;
        margin-top: -7.5px;
    }
    input[type="range"]::-moz-range-thumb {
        border: 1px solid #000;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #3498db;
        cursor: pointer;
    }
    input[type="range"]::-ms-thumb {
        border: 1px solid #000;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #3498db;
        cursor: pointer;
    }
    @media (max-width: 480px) {
        .vis-container {
            width: 100%;
            padding: 1rem 0.5rem;
        }

        /* Stack the two graphs vertically */
        .vis-container > div {
            flex-direction: column !important;
            gap: 20px !important;
            width: 100% !important;
        }

        /* Each graph container becomes full width */
        .vis-container > div > div {
            width: 100% !important;
        }

        /* Make SVG scale and not overflow */
        svg {
            width: 100% !important;
            height: auto !important;
        }

        /* Equation row stacks vertically */
        .equation-row {
            flex-direction: column !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 20px !important;
        }

        /* Each equation expands to full width */
        .equation {
            width: 100% !important;
        }

        /* Make slider full width on mobile */
        input[type="range"] {
            width: 100% !important;
            max-width: 320px;
        }
    }
</style>
