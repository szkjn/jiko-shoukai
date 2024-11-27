<script lang="ts">
  import Header from "../components/Header.svelte";
  import Filter from "../components/Filter.svelte";
  import ProjectDiv from "../components/ProjectDiv.svelte";
  import { projects } from "../data/projects";
  import type { Project } from "../types/project";
  import type { Category } from "../types/project";

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
  <Header />
  <Filter {categories} {selectedCategories} onFilter={handleFilter} />
  <main class="flex flex-col">
    {#each filteredProjects() as project}
      <ProjectDiv {project} />
    {/each}
  </main>
</div>

<style>
  .page-container {
    padding: 1rem;
    max-width: 500px;
  }
</style>
