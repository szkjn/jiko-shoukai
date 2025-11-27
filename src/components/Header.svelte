<script lang="ts">
  import { base } from '$app/paths';
  export let title = "jun suzuki";
  export let isAboutVisible = false;
  export let onAboutClick: () => void;
</script>

<header class="sticky-header flex justify-between items-start py-2 m-0 px-0">
  <div class="flex flex-row gap-2 items-center">
    <h1 class="header-title font-bold">{title}</h1>
    <img src="{base}/png/jun.png" alt="jun-in-japanese" class="sign" />
  </div>

  <div class="nav-links">
    <button
      class="nav-button"
      on:click={onAboutClick}
    >
      {isAboutVisible ? 'home' : 'about'}
    </button>
  </div>
</header>

<style>
  * {
    font-family: "Inter", sans-serif;
    user-select: none;
    color: #FFFFFF;
  }

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #8F8F8F;
    width: 100%;
    max-width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }

  .header-title {
    font-size: 0.9rem;
    line-height: 1.2;
  }

  .sign {
    height: 14px;
    filter: invert(1);
  }

  .nav-links {
    display: flex;
    align-items: center;
  }

  .nav-button {
    font-size: 0.9rem;
    line-height: 1.2;
    user-select: none;
    background: none;
    border: none;
    color: #FFFFFF;
    padding: 0;
    text-decoration: none;
  }

  .nav-button:hover {
    opacity: 0.7;
  }

  @media (max-width: 680px) {
    .sticky-header {
      padding-left: 1rem;
      padding-right: 1rem;
      margin-bottom: 2rem;
    }

    .header-title {
      font-size: 1.6rem;
      line-height: 1.2;
    }

    .sign {
      display: none;
    }

    .nav-button {
      font-size: 1.6rem;
      line-height: 1.2;
    }
  }
</style>
