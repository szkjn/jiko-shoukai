<script lang="ts">
  import Header from "../components/Header.svelte";
  import About from "../components/About.svelte";
  import RightSidebar from "../components/RightSidebar.svelte";
  import ProjectHoverPreview from "../components/ProjectHoverPreview.svelte";
  import type { Project } from "../types/project";
  import type { Category } from "../types/project";

  // Receive data from +page.ts
  export let data;
  const projects = data.projects;

  let isAboutVisible = false;
  let selectedProject: Project | null = null;
  let hoveredProject: Project | null = null;

  function handleAboutClick() {
    isAboutVisible = !isAboutVisible;
    selectedProject = null;
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  function handleBackClick() {
    selectedProject = null;
  }

  let categories: Category[] = [
    "installations",
    "performances",
    "releases",
    "talks",
  ];

  let activeFilter: Category | null = null;

  const categoryColors: Record<string, string> = {
    installations: 'rgba(255, 146, 146, 0.7)', // FF9292
    performances: 'rgba(171, 255, 171, 0.7)', // ABFFAB
    releases: 'rgba(180, 190, 255, 0.7)', // B4BEFF
    talks: 'rgba(113, 201, 255, 0.7)', // 71C9FF
  };

  const getCategoryColor = (category: string): string => {
    return categoryColors[category] || 'rgba(143, 143, 143, 0.7)';
  };

  const handleProjectSelect = (project: Project) => {
    selectedProject = selectedProject === project ? null : project;
  };

  const handleCategoryClick = (category: Category) => {
    activeFilter = activeFilter === category ? null : category;
    selectedProject = null;
  };

  const getPreviewImageUrl = (project: Project | null): string | null => {
    if (project && project.img && project.img.length > 0) {
      return project.img[0].thumb;
    }
    return null;
  };

  $: visibleProjects = sortedProjects.filter(project => 
    // Hide projects that are ONLY programming, but show if it has other categories too
    project.category.length > 1 || !project.category.includes('programming')
  );

  $: filteredProjects = activeFilter 
    ? visibleProjects.filter(project => activeFilter && project.category.includes(activeFilter))
    : visibleProjects;

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

  $: previewImageUrl = getPreviewImageUrl(hoveredProject);
</script>

<div class="page-wrapper">
  <div class="page-container">
    <Header />

    <ProjectHoverPreview 
      imageUrl={previewImageUrl}
      isVisible={!isAboutVisible && !selectedProject && hoveredProject !== null}
    />

    <main class="flex flex-row flex-no-wrap w-full {isAboutVisible ? 'invisible' : ''}">
      <!-- Category filters - LEFT COLUMN -->
      <div class="categories-container">
      {#if !isAboutVisible}
        {#each categories as category}
          <button 
            class="category-filter" 
            class:active={activeFilter === category}
            on:click={() => handleCategoryClick(category)}
          >
          {category}
          <span class="category-dot" style="background-color: {getCategoryColor(category)}"></span>
          </button>
        {/each}
        <button 
          class="about-button"
          on:click={handleAboutClick}
        >
          about
        </button>
      {/if}
    </div>

    <!-- Project list - RIGHT COLUMN -->
    <div class="projects-container">
      {#if selectedProject}
        <!-- Details view -->
        <div class="detail-view">
          <button class="back-button" on:click={handleBackClick}>
            &lt; back
          </button>
          <button class="project-header-detail">
            <span class="title">{selectedProject.title}</span><span class="loc">, {selectedProject.loc}</span>
            <span class="project-dot" style="background-color: {getCategoryColor(selectedProject.category[0])}"></span>
          </button>
          <div class="project-details">
            <div class="desc">
              <div class="project-date">{formatDateShort(selectedProject.date)}</div>
              {@html selectedProject.desc
                .replace(/\n\n/g, "<br /><br />")
                .replace(/\n/g, "<br />")}
              {#if selectedProject.links && selectedProject.links.length > 0}
                <br />
                {#each selectedProject.links as link}
                  <br />
                  <a href={link.url} target="_blank">
                    <img src="/png/arrow-up-right.png" alt="" class="arrow-icon" /> {link.label}
                  </a>
                {/each}
              {/if}
            </div>
            <div class="image-container">
              {#each selectedProject.img as image}
                <img src={image.full} alt={selectedProject.title} loading="lazy" />
              {/each}
            </div>
          </div>
        </div>
      {:else}
        <!-- List view -->
        {#each filteredProjects as project}
          {@const projectCategory = project.category[0]}
          <div class="project-item-wrapper">
            <button
              class="project-header"
              on:click={() => handleProjectSelect(project)}
              on:mouseenter={() => hoveredProject = project}
              on:mouseleave={() => hoveredProject = null}
            >
              <span class="title">{project.title}</span><span class="loc">, {project.loc}</span>
              <span class="project-dot" style="background-color: {getCategoryColor(projectCategory)}"></span>
            </button>
          </div>
        {/each}
      {/if}
    </div>
  </main>

    <div class="right-panel {isAboutVisible ? 'visible' : ''}">
      {#if isAboutVisible}
        <div class="about-left-sidebar">
          <button 
            class="about-button"
            on:click={handleAboutClick}
          >
            home
          </button>
        </div>
        <About />
      {/if}
    </div>
  </div>

  <div class="right-sidebar-panel">
    <RightSidebar />
  </div>
</div>

<style>
  * {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }

  button,
  a {
    padding: 0;
    margin: 0;
    text-align: start;
  }

  .page-wrapper {
    display: flex;
    min-height: 100vh;
    background-color: #8F8F8F;
  }

  .page-container {
    padding: 0 1rem;
    max-width: 1400px;
    margin: 0 auto;
    flex: 1;
    background-color: #8F8F8F;
    color: #FFFFFF;
  }

  .right-sidebar-panel {
    position: sticky;
    top: 0;
    right: 0;
    width: 120px;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    /* border-left: 1px solid #FFFFFF; */
  }

  main.invisible {
    display: none;
  }

  /* Category filters - LEFT COLUMN */
  .categories-container {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-top: 3rem;
    padding-right: 3rem;
    min-width: 200px;
    /* transition: opacity 0.3s ease; */
  }

  .category-filter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.2;
    user-select: none;
    background: none;
    border: none;
    color: #FFFFFF;
    /* transition: opacity 0.2s; */
  }

  /* When hovering over a specific category, dim all other categories */
  .categories-container:has(.category-filter:hover) .category-filter:not(:hover) {
    opacity: 0.3;
  }

  .category-filter.active {
    font-weight: 700;
  }

  .category-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .about-button {
    font-size: 0.9rem;
    line-height: 1.2;
    user-select: none;
    background: none;
    border: none;
    color: #FFFFFF;
    text-align: left;
    margin-top: 1rem;
    padding: 0;
    /* cursor: url("/png/cursor.png"), crosshair; */
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .about-button:hover {
    opacity: 0.7;
  }

  .arrow-icon {
    width: 10px;
    height: 10px;
    display: inline-block;
    filter: invert(1);
  }

  /* Projects container - RIGHT COLUMN */
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 0;
    flex: 1;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .project-item-wrapper {
    margin-bottom: 0;
    line-height: 0;
  }

  .detail-view {
    width: 100%;
  }

  .back-button {
    font-size: 0.9rem;
    line-height: 1.2;
    color: #FFFFFF;
    background: none;
    border: none;
    padding: 0;
    margin-bottom: 1rem;
    /* cursor: url("/png/cursor.png"), crosshair; */
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    /* transition: opacity 0.2s; */
  }

  .back-button:hover {
    opacity: 0.7;
  }

  .project-header-detail {
    display: flex;
    align-items: center;
    gap: 0;
    width: 100%;
    padding: 0.1rem 0 0.5rem 0;
    margin-bottom: 1rem;
    user-select: none;
    background: none;
    color: #FFFFFF;
    font-size: 0.9rem;
    line-height: 1.2;
    border: none;
  }

  .project-header {
    display: inline-flex;
    align-items: center;
    gap: 0;
    width: auto;
    padding: 0.1rem 0;
    user-select: none;
    background: none;
    color: #FFFFFF;
    font-size: 0.9rem;
    line-height: 1.2;
    cursor: url("/png/cursor.png"), crosshair;
    /* transition: opacity 0.2s; */
  }

  /* When hovering over a specific item, dim all other items */
  .projects-container:has(.project-header:hover) .project-header:not(:hover) {
    opacity: 0.3;
  }

  .project-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-left: 0.5rem;
  }

  .title {
    font-style: italic;
  }

  .loc {
    color: #FFFFFF;
  }

  .project-date {
    font-size: 0.9rem;
    line-height: 1.2;
    margin-bottom: 0.25rem;
    color: #FFFFFF;
  }

  /* Project details */
  .project-details {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-left: 0;
  }

  .desc {
    flex: 0 0 auto;
    font-size: 0.9rem;
    line-height: 1.4;
    color: #FFFFFF;
    max-width: 35%;
    /* text-align: justify; */
  }

  .desc a {
    color: #FFFFFF;
    text-decoration: none;
    cursor: url("/png/cursor.png"), crosshair;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }

  .desc a:hover {
    opacity: 0.7;
  }

  .image-container {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    max-width: 45%;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 75vh;
    object-fit: contain;
  }

  /* Right panel */
  .right-panel {
    display: none;
    justify-content: flex-end;
    user-select: none;
    width: 100%;
  }

  .right-panel.visible {
    width: 100%;
    display: flex !important;
    justify-content: flex-start;
  }

  .about-left-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    padding-right: 3rem;
    min-width: 200px;
  }

  .about-left-sidebar .about-button {
    margin-top: 0;
  }

  @media (max-width: 960px) {
    .page-wrapper {
      flex-direction: column;
    }

    .right-sidebar-panel {
      position: static;
      width: 100%;
      height: auto;
      border-left: none;
      border-top: 1px solid #FFFFFF;
      align-items: center;
    }

    main {
      flex-direction: column;
    }

    .categories-container {
      flex-direction: row;
      padding-right: 0;
      padding-top: 2rem;
      min-width: auto;
    }

    .projects-container {
      padding-top: 2rem;
    }

    .right-panel {
      display: none;
    }
    .right-panel.visible {
      width: 100%;
    }

    .about-left-sidebar {
      padding-right: 0;
      padding-top: 2rem;
      min-width: auto;
    }
  }

  @media (max-width: 760px) {
    .categories-container {
      gap: 1rem;
    }

    .project-details {
      flex-direction: column;
      padding-left: 0;
    }

    .desc,
    .image-container {
      max-width: 100%;
    }
  }
</style>
