<script lang="ts">
  import Header from "../components/Header.svelte";
  import { projects } from "../data/projects";
  import { onDestroy } from "svelte";
  import type { Project } from "../types/project";
  import type { Category } from "../types/project";

  let selectedCategory: Category | null = null;
  let selectedProject: Project | null = null;

  let categories: Category[] = [
    "installations",
    "performances",
    "releases",
    "talks",
    "programming",
  ];

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
    return sortedProjects.filter((project) =>
      project.category.includes(category)
    );
  };

  function parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, day);
  }

  const sortedProjects: Project[] = [...projects].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });
</script>

<div class="page-container">
  <Header />
  <main class="flex flex-row w-full justify-between">
    <div class="left-panel">
      <!-- Category list -->
      {#each categories as category}
        <div>
          <button
            class="category-btn"
            on:click={() => handleCategorySelect(category)}
          >
            {category}
          </button>
          {#if selectedCategory === category}
            <div class="project-list py-2">
              {#each getProjectsByCategory(category) as project}
                <div>
                  <button
                    class="project-header"
                    on:click={() => handleProjectSelect(project)}
                  >
                    <div class="flex flex-row items-center">
                      <p class="date pr-2">
                        {project.date}
                      </p>
                      <h4>
                        <span class="title">
                          {project.title}
                        </span>, {project.loc}
                      </h4>
                    </div>
                  </button>
                  {#if selectedProject === project}
                    <p class="desc pb-4">
                      {@html project.desc
                        .replace(/\n\n/g, "<br /><br />")
                        .replace(/\n/g, "<br />")}
                      {#if project.links && project.links.length > 0}
                        {#each project.links as link}
                          <br />
                          <a href={link.url} target="_blank">
                            ↗{link.label}
                          </a>
                        {/each}
                      {/if}
                    </p>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>

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
  button {
    cursor: crosshair;
    padding: 0;
    margin: 0;
    text-align: start;
  }
  h4 {
    line-height: 0.9rem;
    font-family: "Averia Serif Libre", serif;
  }

  .page-container {
    padding: 0 1rem;
    max-width: 1600px;
    margin: 0 auto;
  }
  .left-panel {
    /* flex: 1; */
    width: 45%;
    /* width: 780px; */
    /* border: solid 2px red; */
  }
  .category {
    cursor: crosshair;
    border-bottom: 1px solid white;
    transition: 0.5s ease;
  }

  .category-btn {
    cursor: crosshair;
    border-bottom: 1px solid white;
    transition: 0.5s ease;
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Libre Franklin", sans-serif;
    font-size: 0.8rem;
    user-select: none;
    width: 100%;
  }
  .category-btn:hover {
    border-bottom: 1px solid black;
  }
  .project-header {
    padding: 2px 0;
    cursor: help;
  }
  .project-header:hover {
    text-decoration: underline;
  }

  .date {
    font-family: "Roboto Mono";
    font-size: 0.8rem;
  }
  .title {
    font-family: "Averia Serif Libre", serif;
    font-size: 1rem;
    line-height: 1rem;
    font-style: italic;
    font-weight: 900;
  }
  .desc {
    text-align: justify;
    font-family: "Libre Franklin", sans-serif;
    font-size: 0.7rem;
  }
  a {
    text-align: justify;
    font-family: "Averia Serif Libre", serif;
    font-weight: 900;
    font-size: 0.8rem;
    text-decoration: underline;
  }
  a:hover {
    color: white;
    background: black;
  }
  .right-panel {
    /* flex: 1; */
    width: 40%;
    /* border: 1px solid black; */
  }
</style>
