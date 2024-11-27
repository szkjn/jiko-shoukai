<script lang="ts">
  import type { Project } from "../types/project";
  export let project: Project;

  function handleMissingImage(event: Event) {
    const target = event.target as HTMLImageElement;
    console.warn(`Image not found: ${target.src}`);
    target.style.display = "none"; // Hide the image if not found
  }
</script>

<div class="relative w-full overflow-hidden">
  {#each project.img as image}
    <img
      src={`/images/${image}`}
      alt=""
      class="w-full h-full object-cover absolute inset-0 grayscale hover:colorful"
      on:error={handleMissingImage}
    />
  {/each}
</div>

<style>
  img {
    height: 10vh;
    width: 100vw;
    object-fit: cover;
    cursor: crosshair;
    transition:
      height 1s ease,
      filter 0.3s ease;
  }

  .grayscale {
    filter: grayscale(100%);
  }

  .hover\:colorful:hover {
    filter: none;
    height: 15vh;
  }
</style>
