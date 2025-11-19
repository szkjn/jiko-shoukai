<script lang="ts">
  import { base } from '$app/paths';

  const collaborators = [
    { name: 'Alvin Collantes', url: 'https://www.alvincollantes.com/', title: 'dancer, choreographer' },
    { name: 'Anastasia Zhylinskaya', url: 'https://www.instagram.com/a_zhylinskaya/', title: 'audiovisual artist' },
    { name: 'Daloy Dance Company', url: 'https://www.daloydancecompany.net/', title: 'dance company' },
    { name: 'Edda Rabold', url: 'https://eddarabold.com/', title: 'fine artist, industrial designer' },
    { name: 'Egregore', url: 'https://soundcloud.com/egr3g0re', title: 'electronic producer' },
    { name: 'Emilia Gentis', url: 'https://emiliagentis.com/', title: 'new media designer' },
    { name: 'Harshini J. Karunaratne', url: 'https://harshinijk.xyz/', title: 'new media artist, curator' },
    { name: 'Nicolas Michel', url: 'https://www.milkorva.com/home-page/', title: 'visual artist, director' },
    { name: 'Ninon Devis', url: 'https://www.instagram.com/ninondevis/', title: 'phd researcher, electronic producer' },
  ];
</script>

<div class="collaborators-container">
  <!-- Title row - visible only on tablet/mobile -->
  <div class="title-row">
    <p>collaborators</p>
  </div>

  <!-- Left column - visible only on widescreen (LG) -->
  <div class="label-column">
    <p>collaborators</p>
  </div>

  <!-- Right column - collaborators list -->
  <div class="collaborators-column">
    {#each collaborators as collaborator}
      <div class="collaborator-item">
        <a href={collaborator.url} target="_blank" rel="noopener noreferrer" class="collaborator-name">
          {collaborator.name} <span class="collaborator-title"> — {collaborator.title}</span>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  * {
    font-family: "Inter", sans-serif;
    user-select: none;
    color: #FFFFFF;
  }

  .collaborators-container {
    display: block;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 961px) {
    .collaborators-container {
      display: flex;
      gap: 0;
    }
  }

  /* Title row - visible only on tablet/mobile */
  .title-row {
    display: none;
    width: 100%;
    margin-bottom: 1rem;
  }

  .title-row p {
    font-size: 0.9rem;
    line-height: 1.2;
    margin: 0;
  }

  /* Left column with "collaborators" label - only visible on widescreen */
  .label-column {
    min-width: 200px;
    padding-right: 3rem;
    display: flex;
    align-items: flex-start;
  }

  .label-column p {
    font-size: 0.9rem;
    line-height: 1.2;
    margin: 0;
  }

  /* Right column with collaborators - styled like project list */
  .collaborators-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .collaborator-item {
    margin-bottom: 0;
    line-height: 0;
  }

  .collaborator-name {
    display: inline-block;
    font-size: 0.9rem;
    line-height: 1.2;
    padding: 0.1rem 0;
    color: #FFFFFF;
    text-decoration: none;
    background: none;
    border: none;
    user-select: none;
  }

  .collaborator-title {
    opacity: 0;
    transition: opacity 0.2s;
  }

  a.collaborator-name {
    cursor: url('{base}/png/cursor.png'), crosshair;
    transition: opacity 0.2s;
  }

  /* a.collaborator-name:hover {
    opacity: 0.7;
  } */

  a.collaborator-name:hover .collaborator-title,
  span.collaborator-name:hover .collaborator-title {
    opacity: 1;
  }

  /* When hovering over a specific item, dim all other items (widescreen only) */
  @media (min-width: 961px) {
    .collaborators-column:has(.collaborator-name:hover) .collaborator-name:not(:hover) {
      opacity: 0.3;
    }
  }

  /* Tablet and mobile - hide label column, show title row */
  @media (max-width: 960px) {
    .label-column {
      display: none;
    }

    .title-row {
      display: block;
      margin: 2rem 0;
    }

    .collaborators-column {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    .collaborators-container {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    .title-row p {
      font-size: 1.6rem;
      line-height: 1.2;
    }

    .collaborator-name {
      font-size: 1.6rem;
      line-height: 1.2;
    }

    .collaborator-title {
      display: none;
    }
  }
</style>
