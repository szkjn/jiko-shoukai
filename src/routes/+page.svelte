<script lang="ts">
  import Header from "../components/Header.svelte";
  import ProjectDiv from "../components/ProjectDiv.svelte";
  import ProjectDetails from "../components/ProjectDetails.svelte";
  import { projects } from "../data/projects";
  import type { Project } from "../types/project";
  import type { Category } from "../types/project";

  let hoveredProject: Project | null = null;

  let categories = Array.from(
    new Set(projects.flatMap((project) => project.category))
  );
  let selectedCategories: Category[] = [];

  // Helper function to parse date strings to Date objects
  function parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, day);
  }

  // Sort projects by date in descending order (most recent first)
  const sortedProjects: Project[] = [...projects].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  // Filter projects based on selected categories
  const filteredProjects = () =>
    selectedCategories.length === 0
      ? sortedProjects
      : sortedProjects.filter((project) =>
          selectedCategories.some((category) =>
            project.category.includes(category)
          )
        );

  const handleFilter = (category: Category) => {
    if (selectedCategories.includes(category)) {
      selectedCategories = selectedCategories.filter((t) => t !== category);
    } else {
      selectedCategories = [...selectedCategories, category];
    }
  };
</script>

<div class="page-container">
  <Header
    {categories}
    {selectedCategories}
    on:filter={(event) => handleFilter(event.detail)}
  />
  <main class="flex flex-row w-full justify-between">
    <div class="projects flex flex-col">
      {#each filteredProjects() as project}
        <ProjectDiv
          {project}
          on:mouseenter={(event) => {
            hoveredProject = project;
          }}
          on:mouseleave={(event) => {
            hoveredProject = null;
          }}
        />
      {/each}
    </div>
    <div class="side-panel flex justify-center">
      <ProjectDetails project={hoveredProject} />
    </div>
    <div class="left-panel">hello</div>
  </main>
</div>

<style>
  .page-container {
    padding: 0 1rem;
    max-width: 1600px;
    margin: 0 auto;
  }
  main {
    /* border: 2px solid red; */
  }
  .projects {
    flex: 1;
    /* width: 780px; */
    /* border: solid 2px red; */
  }
  .side-panel {
    flex: 1;
    position: sticky;
    top: 60px;
    left: 200px;
    height: fit-content;
  }
  .left-panel {
    flex: 1;
  }
</style>
