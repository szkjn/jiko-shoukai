<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="supported-by-container">
  <!-- Title row - visible only on tablet/mobile -->
  <div class="title-row">
    <p>supported by</p>
  </div>

  <!-- Left column - visible only on widescreen (LG) -->
  <div class="label-column">
    <p>supported by</p>
  </div>

  <!-- Right column - logos -->
  <div class="logos-column">
    <a href="https://www.3am-energy.com/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/3am-logo.png" alt="3AM Energy" />
    </a>
    <a href="https://apal.info/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/apal-logo.png" alt="APAL" />
    </a>
    <a href="https://www.manifestio.art/" target="_blank" rel="noopener noreferrer" class="larger">
      <img src="{base}/png/manifestio-logo.png" alt="Manifest:IO"/>
    </a>
    <a href="https://terenor.com/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/terenor-logo.png" alt="Terenor" />
    </a>
    <a href="https://xviiip.com/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/xviiip-logo.png" alt="XVIIIPENINSULE" />
    </a>
    <a href="https://futurehain.com/" target="_blank" rel="noopener noreferrer" class="smaller">
      <img src="{base}/png/futurehain-logo.webp" alt="Futurehain" />
    </a>
    <a href="https://jfmo.org.ph/" target="_blank" rel="noopener noreferrer" class="larger">
      <img src="{base}/png/jf-logo.png" alt="Japan Foundation" />
    </a>
    <a href="https://www.goethe.de/" target="_blank" rel="noopener noreferrer" class="larger">
      <img src="{base}/png/goethe-logo.png" alt="Goethe Institut" />
    </a>
  </div>
</div>

<style>
  * {
    font-family: "Inter", sans-serif;
    user-select: none;
    color: #FFFFFF;
  }

  .supported-by-container {
    display: block;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 961px) {
    .supported-by-container {
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

  /* Left column with "supported by" label - only visible on widescreen */
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

  /* Right column with logos */
  .logos-column {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    min-height: 40px;
  }

  .logos-column a {
    display: block;
    height: 40px;
    transition: opacity 0.2s ease;
    flex-shrink: 0;
  }

  .logos-column a.larger {
    height: 50px;
  }

  .logos-column a.smaller {
    height: 30px;
  }

  /* When hovering over a specific logo, dim all other logos (widescreen only) */
  @media (min-width: 961px) {
    .logos-column:has(a:hover) a:not(:hover) {
      opacity: 0.3;
    }
  }

  .logos-column img {
    height: 100%;
    width: auto;
    filter: brightness(0) invert(1);
  }

  /* Tablet and mobile - hide label column, show title row */
  @media (max-width: 960px) {
    .label-column {
      display: none;
    }

    .title-row {
      display: block;
      margin-bottom: 2rem;
    }

    .logos-column {
      width: 100%;
      gap: 1.5rem;
    }

    .logos-column a {
      height: 35px;
    }

    .logos-column a.larger {
      height: 45px;
    }

    .logos-column a.smaller {
      height: 25px;
    }
  }

  @media (max-width: 680px) {
    .supported-by-container {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    .title-row p {
      font-size: 1.6rem;
      line-height: 1.2;
    }

    .logos-column {
      gap: 1rem;
    }

    .logos-column a {
      height: 30px;
    }

    .logos-column a.larger {
      height: 40px;
    }

    .logos-column a.smaller {
      height: 22px;
    }
  }
</style>
