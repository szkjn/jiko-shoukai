<script lang="ts">
  import Header from "../components/Header.svelte";
  import About from "../components/About.svelte";
  import { projects } from "../data/projects";
  import type { Project } from "../types/project";
  import type { Category } from "../types/project";
  import { onMount } from "svelte";

  let isPanelOffScreen = false;
  let selectedCategory: Category | null = null;
  let selectedProject: Project | null = null;

  function handleAboutClick() {
    isPanelOffScreen = !isPanelOffScreen;
    selectedProject = null;
    // Scroll the window to the top
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  $: {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isPanelOffScreen ? "hidden" : "";
    }
  }

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

  function formatDateShort(dateStr: string): string {
    const [day, month, year] = dateStr.split(".");
    return `${day}.${month}.${year.slice(-2)}`;
  }

  const sortedProjects: Project[] = [...projects].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });
</script>

<div class="page-container">
  <Header on:about-click={handleAboutClick} {isPanelOffScreen} />
  <main class="flex flex-row w-full justify-between">
    <div class="left-panel {isPanelOffScreen ? 'off-screen' : ''}">
      <!-- Display categories and their projects -->
      {#each categories as category}
        <div class="category-section">
          <button class="category-btn" aria-disabled="true">
            {category}
          </button>
          <div class="project-list py-2 flex flex-col">
            {#each getProjectsByCategory(category) as project}
              <button
                class="project-header"
                on:click={() => handleProjectSelect(project)}
              >
                <div class="flex flex-row items-center">
                  <p class="date pr-2">
                    {formatDateShort(project.date)}
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
                    <br />
                    {#each project.links as link}
                      <br />
                      <a href={link.url} target="_blank">
                        ↗{link.label}
                      </a>
                    {/each}
                  {/if}
                </p>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="right-panel" style="width: {!isPanelOffScreen ? '33%' : '50%'}">
      {#if selectedProject}
        <div class="image-container">
          {#each selectedProject.img as image}
            <img src="images/{image}" alt={selectedProject.title} />
          {/each}
        </div>
      {/if}
      {#if isPanelOffScreen}
        <About />
      {/if}
    </div>
  </main>
</div>

<style>
  button,
  a {
    cursor: crosshair;
    padding: 0;
    margin: 0;
    text-align: start;
  }
  h4 {
    font-size: 0.8rem;
    /* line-height: 0.8rem; */
    font-family: "Averia Serif Libre", serif;
  }

  img {
    max-width: 100%;
    max-height: 70vh;
    height: auto;
  }

  .page-container {
    padding: 0 1rem;
    max-width: 1600px;
    margin: 0 auto;
  }
  .left-panel {
    width: 50%;
    /* border: 2px solid black; */
    transition: transform 0.3s ease;
  }

  .left-panel.off-screen {
    transform: translateX(-110%);
  }

  .category-btn {
    cursor: crosshair;
    border-bottom: 1px solid black;

    transition: 0.5s ease;
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Libre Franklin", sans-serif;
    font-size: 0.8rem;
    user-select: none;
    width: 100%;
  }
  /* .category-btn:hover {
    color: #83a;
    border-bottom: 1px solid #83a;
  } */
  .project-header {
    padding: 0;
    width: fit-content;
    border: 1px solid white;
    user-select: none;
  }

  .project-header:hover {
    /* text-decoration: underline; */
    background: black;
    color: white;
  }

  .date {
    font-family: "Roboto Mono";
    font-size: 0.8rem;
    line-height: 0.8rem;
  }
  .title {
    font-family: "Averia Serif Libre", serif;
    font-size: 0.9rem;
    line-height: 0.9rem;
    font-style: italic;
    font-weight: 900;
  }
  .desc {
    text-align: justify;
    font-family: "Libre Franklin", sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1rem;
  }
  a {
    text-align: justify;
    font-family: "Averia Serif Libre", serif;
    font-weight: 900;
    font-size: 0.8rem;
    text-decoration: underline;
    color: white;
    background: black;
  }
  a:hover {
    color: black;
    background: white;
  }

  .right-panel {
    display: flex;
    justify-content: flex-end;
    user-select: none;
    position: sticky;
    top: 60px;
    height: 100%;
    /* border: 1px solid black; */
  }
</style>
