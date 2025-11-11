<script>
  import { onMount } from 'svelte';

  export let min = 0;
  export let max = 3;
  export let step = 0.01;
  export let label = "Value";

  // Reactive variables
  let value = (min + max) / 2;   // primary slider
  let lerpValue = value;         // secondary slider
  const speed = 0.05;            // lerp speed

  let animationFrame;

  // Animate lerpValue toward value continuously
  function animate() {
    lerpValue = lerpValue + (value - lerpValue) * speed;
    animationFrame = requestAnimationFrame(animate);
  }

  onMount(() => {
    animate();
    return () => cancelAnimationFrame(animationFrame); // cleanup on unmount
  });
</script>

<div style="margin:10px 0;">
  <!-- Primary slider -->
  <label>{label}: {value.toFixed(2)}</label>
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    bind:value
  />

  <!-- Secondary slider -->
  <label style="margin-left:20px;">Follow: {lerpValue.toFixed(2)}</label>
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    bind:value={lerpValue}
    disabled
  />
</div>
