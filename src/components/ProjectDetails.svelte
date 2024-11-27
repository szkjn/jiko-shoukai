<!-- src/components/ProjectDetails.svelte -->
<script lang="ts">
  import type { Project } from "../types/project";

  export let project: Project | null = null;
</script>

{#if project}
  <div class="project-details">
    <h2>{project.title}</h2>
    <p>{project.loc}</p>
    <p>{project.date}</p>
    <!-- <p>{project.dec}</p> -->
    <!-- Add more details as needed -->
  </div>
{:else}
  <div class="empty-details">
    <!-- <p>Hover over a project to see details.</p> -->
  </div>
{/if}

<style>
  .project-details,
  .empty-details {
    padding: 1rem;
  }
</style>
