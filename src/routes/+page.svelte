<script lang="ts">
  import Header from "../components/Header.svelte";
  import About from "../components/About.svelte";
  import { projects } from "../data/projects";
  import type { Project } from "../types/project";
  import type { Category } from "../types/project";

  let isAboutVisible = false;
  let selectedProject: Project | null = null;

  function handleAboutClick() {
    isAboutVisible = !isAboutVisible;
    selectedProject = null;
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  let categories: Category[] = [
    "installations",
    "performances",
    "releases",
    "talks",
    "programming",
  ];

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
  <Header on:about-click={handleAboutClick} {isAboutVisible} />
  <main class="flex flex-row flex-no-wrap w-full justify-between">
    <div class="left-panel {isAboutVisible ? 'invisible' : ''}">
      <!-- Display categories and their projects -->
      {#each categories as category}
        <div class="category-section">
          <button class="category-btn" aria-disabled="true">
            {category}
          </button>
          <div class="project-list py-2 flex flex-col">
            {#each getProjectsByCategory(category) as project}
              <button
                class="project-header flex flex-row items-center"
                on:click={() => handleProjectSelect(project)}
              >
                <p class="date pr-2">
                  {formatDateShort(project.date)}
                </p>
                <h4>
                  <span class="title">
                    {project.title}
                  </span><span class="loc">, {project.loc}</span>
                </h4>
              </button>
              {#if selectedProject === project}
                <div
                  class="project-details flex flex-row align-items justify-between pb-4"
                >
                  <p class="desc">
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
                  <div
                    class="image-container flex flex-row flex-wrap justify-end"
                  >
                    {#each selectedProject.img as image}
                      <img src="images/{image}" alt={selectedProject.title} />
                    {/each}
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="right-panel {isAboutVisible ? 'visible' : ''}">
      {#if isAboutVisible}
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
    max-width: 70%;
    max-height: 70vh;
    height: auto;
  }

  .page-container {
    padding: 0 1rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  .left-panel {
    width: 100%;
    /* border: 2px solid red; */
    transition: transform 0.3s ease;
  }

  .left-panel.invisible {
    display: none;
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
  .project-list {
    width: 100%;
  }
  .project-header {
    padding: 0;
    width: 100%;
    /* border: 1px solid pink; */
    user-select: none;
  }
  .project-header > div,
  .desc {
    width: 50%;
  }

  .project-header:hover {
    /* text-decoration: underline; */
    background: black;
    color: white;
  }

  .image-container {
    width: 45%;
    /* border: 1px solid green; */
    align-items: end;
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
    display: none;
    justify-content: flex-end;
    user-select: none;
    width: 100%;
    /* border: 1px solid blue; */
  }

  .right-panel.visible {
    width: 100%;
    display: flex !important;
  }
  @media (max-width: 960px) {
    .left-panel {
      width: 100%;
    }
    .left-panel.invisible {
      display: none;
    }

    .category-btn {
      width: 100%;
    }

    .right-panel {
      display: none;
    }
    .right-panel.visible {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    .category-btn {
      font-size: 2rem;
      line-height: 2.5rem;
      border-bottom: 6px solid black;
      margin-bottom: 0;
      padding-top: 1rem;
    }
    .project-list {
      padding: 0;
    }
    .project-header {
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid #aaa;
    }
    /* .date {1 */
    .project-details {
      flex-direction: column;
      gap: 1rem;
    }
    .project-header,
    .desc,
    .image-container {
      width: 100%;
    }
    .image-container {
      justify-content: start;
    }
    img {
      max-width: 100%;
    }

    a,
    button,
    h4,
    .date {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
    .desc {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
    .title {
      font-size: 1.6rem;
      line-height: 1rem;
    }
  }
</style>
