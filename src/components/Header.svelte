<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let title = "jun suzuki";
  export let isPanelOffScreen: boolean;

  const dispatch = createEventDispatcher();

  function handleAboutClick() {
    dispatch("about-click");
  }
</script>

<header class="sticky-header flex justify-between items-start pt-2 pb-8 m-0">
  <div class="flex flex-row gap-2">
    <h1 class="text-sm font-bold">{title}</h1>
    <img src="/png/jun.png" alt="jun-in-japanese" class="sign" />
  </div>
  <nav class="flex flex-end items-start">
    <button
      class="text-sm font-bold pl-2 flex flex-row gap-2 items-center"
      on:click={handleAboutClick}
    >
      {#if isPanelOffScreen}<img
          src="/png/back.png"
          alt="jun-in-japanese"
          class="back"
        />back{:else}<img
          src="/png/about.png"
          alt="jun-in-japanese"
          class="about"
        />about{/if}
    </button>
  </nav>
</header>

<style>
  * {
    font-family: "Libre Franklin", sans-serif;
    user-select: none;
  }

  button {
    cursor: url("/png/cursor.png"), crosshair;
    background: black;
  }
  button:hover {
    background: white;
    color: black;
  }
  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #fff;
  }
  .sign {
    height: 20px;
  }
  .about,
  .back {
    height: 15px;
    filter: invert(1);
  }
</style>
