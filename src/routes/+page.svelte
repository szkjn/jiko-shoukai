<script lang="ts">
  import Header from "../components/Header.svelte";
  import ProjectDiv from "../components/ProjectDiv.svelte";
  import ProjectDetails from "../components/ProjectDetails.svelte";
  import ProjectPage from "../components/ProjectPage.svelte";
  import { projects } from "../data/projects";
  import { onDestroy } from "svelte";
  import type { Project } from "../types/project";
  import type { Category } from "../types/project";

  let selectedCategory: Category | null = null;
  let selectedProject: Project | null = null;

  let categories = Array.from(
    new Set(projects.flatMap((project) => project.category))
  );
  let selectedCategories: Category[] = [];

  const handleCategorySelect = (category: Category) => {
    // Toggle category selection
    selectedCategory = selectedCategory === category ? null : category;
    // Deselect project when category changes
    if (selectedCategory !== category) {
      selectedProject = null;
    }
  };

  const handleProjectSelect = (project: Project) => {
    selectedProject = selectedProject === project ? null : project;
  };

  const getProjectsByCategory = (category: Category) => {
    return projects.filter((project) => project.category.includes(category));
  };

  function parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, day);
  }

  const sortedProjects: Project[] = [...projects].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

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

  const deselectProject = () => {
    selectedProject = null;
  };

  // Function to handle clicks outside defined panels
  function handleClickOutside(event: MouseEvent) {
    const midPanel = document.querySelector(".mid-panel");
    const rightPanel = document.querySelector(".right-panel");

    if (
      midPanel &&
      rightPanel &&
      !midPanel.contains(event.target as Node) &&
      !rightPanel.contains(event.target as Node)
    ) {
      deselectProject();
    }
  }

  // Listen for click events on the entire document
  document.addEventListener("click", handleClickOutside);

  // Clean up event listener on component destroy
  onDestroy(() => {
    document.removeEventListener("click", handleClickOutside);
  });
</script>

<div class="page-container">
  <Header
    {categories}
    {selectedCategories}
    on:filter={(event) => handleFilter(event.detail)}
  />
  <main class="flex flex-row w-full justify-between">
    <div class="left-panel">
      <!-- Category list -->
      {#each categories as category}
        <div>
          <div class="category">
            <h3 on:click={() => handleCategorySelect(category)}>
              {category}
            </h3>
          </div>
          <!-- Project list under the selected category -->
          {#if selectedCategory === category}
            <div class="project-list py-2">
              {#each getProjectsByCategory(category) as project}
                <div>
                  <div
                    class="project-header"
                    on:click={() => handleProjectSelect(project)}
                  >
                    <div class="flex flex-row items-center">
                      <h4>
                        <span class="title">
                          {project.title}
                        </span>, {project.loc}
                      </h4>
                    </div>
                    <p class="date">
                      {project.date}
                    </p>
                  </div>
                  <!-- Project details under the selected project -->
                  {#if selectedProject === project}
                    <p class="desc pb-4">
                      {@html project.desc
                        .replace(/\n\n/g, "<br /><br />")
                        .replace(/\n/g, "<br />")}
                    </p>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Right Panel -->
    <div class="right-panel">
      {#if selectedProject}
        {#each selectedProject.img as image}
          <img src="images/{image}" alt={selectedProject.title} />
        {/each}
      {/if}
    </div>
  </main>
</div>

<style>
  h4 {
    line-height: 1.1rem;
    font-family: "Averia Serif Libre", serif;
  }

  .page-container {
    padding: 0 1rem;
    max-width: 1600px;
    margin: 0 auto;
  }
  .left-panel {
    /* flex: 1; */
    width: 40%;
    /* width: 780px; */
    /* border: solid 2px red; */
  }
  .category {
    cursor: crosshair;
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Libre Franklin", sans-serif;
    font-size: 0.9rem;
    border-bottom: 1px solid black;
    transition: 0.5s ease;
  }

  .category:hover {
    /* text-decoration: underline; */
    border-bottom: 1px solid purple;
  }
  .project-header {
    padding: 2px 0;
    cursor: help;
  }
  .project-header:hover {
    text-decoration: underline;
  }

  .date,
  .desc {
    font-family: "Libre Franklin", sans-serif;
    font-size: 0.8rem;
  }
  .title {
    font-family: "Averia Serif Libre", serif;

    font-size: 1.1rem;
    line-height: 1.1rem;
    font-style: italic;
    font-weight: 900;
  }
  .desc {
    text-align: justify;
  }
  .right-panel {
    /* flex: 1; */
    width: 40%;
    /* border: 1px solid black; */
  }
</style>
