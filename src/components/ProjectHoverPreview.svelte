<script lang="ts">
  export let imageUrl: string | null = null;
  export let isVisible: boolean = false;

  let randomX = 50;
  let randomY = 50;

  // Generate random position when image becomes visible
  $: if (isVisible && imageUrl) {
    // Random position between 20% and 80% to keep image within borders
    randomX = 20 + Math.random() * 60;
    randomY = 20 + Math.random() * 60;
  }
</script>

{#if isVisible && imageUrl}
  <div class="preview-container" style="left: {randomX}%; top: {randomY}%;">
    <img src={imageUrl} alt="Project preview" />
  </div>
{/if}

<style>
  .preview-container {
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 100;
    pointer-events: none;
    max-width: 25vw;
    max-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 40vh;
    object-fit: contain;
    filter: grayscale(100%) brightness(1.1) contrast(0.7);
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  @media (max-width: 760px) {
    .preview-container {
      display: none;
    }
  }
</style>

