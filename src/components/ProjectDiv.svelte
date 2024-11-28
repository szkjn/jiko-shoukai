<script lang="ts">
  import type { Project } from "../types/project";
  export let project: Project;

  function handleMissingImage(event: Event) {
    const target = event.target as HTMLImageElement;
    console.warn(`Image not found: ${target.src}`);
    target.style.display = "none";
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="container overflow-hidden">
  {#each project.img as image}
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img
      src={`/images/${image}`}
      alt=""
      class="object-cover grayscale hover:colorful"
      on:error={handleMissingImage}
      on:mouseenter
      on:mouseleave
      on:click
    />
  {/each}
</div>

<style>
  img {
    /* height: 22vh; */
    opacity: 0.9;
    cursor: crosshair;
    transition: height 3s ease;
    /* filter 0.3s ease;
    opacity: 0.3s ease; */
  }

  .grayscale {
    filter: grayscale(100%);
    /* filter: none; */
  }

  .hover\:colorful:hover {
    /* filter: grayscale(100%) sepia(60%) hue-rotate(70deg) saturate(100%); */
    opacity: 1;
    /* height: 66vh; */
  }
</style>
