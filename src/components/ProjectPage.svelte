<script lang="ts">
  import type { Project } from "../types/project";

  export let project: Project | null = null;
</script>

{#if project}
  <div class="project-page flex flex-row justify-between p-0 m-0">
    <p class="desc">{project.desc}</p>
    <div class="close-panel"></div>
  </div>
{/if}

<style>
  .desc {
    padding: 0 1rem;
    /* Add your styles here */
  }
</style>
