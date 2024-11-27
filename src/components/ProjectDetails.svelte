<!-- src/components/ProjectDetails.svelte -->
<script lang="ts">
  import type { Project } from "../types/project";

  export let project: Project | null = null;
</script>

{#if project}
  <div class="project-details text-center">
    <h2>{project.title}</h2>
    <div class="subtitle">
      <p>{project.loc}</p>
      <p>{project.date}</p>
    </div>
    <div class="tags flex flex-col justify-between">
      {#each project.tags as tag}
        <p id="tag">#{tag}</p>
      {/each}
    </div>
  </div>
{:else}
  <div class="empty-details">
    <!-- <p>Hover over a project to see details.</p> -->
  </div>
{/if}

<style>
  .project-details {
    padding: 0 1rem;
    justify-content: center;
  }
  div,
  h2 {
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 1rem;
    line-height: 2rem;
    font-family: "Averia Serif Libre", serif;
    font-style: italic;
    font-weight: 900;
  }
  .subtitle > p {
    font-family: "Averia Serif Libre", serif;
  }
  .tags {
    padding-top: 1rem;
  }
  #tag {
    font-weight: 700;
    font-family: "Libre Franklin", sans-serif;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
</style>
