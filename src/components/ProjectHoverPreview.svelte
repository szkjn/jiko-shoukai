<script lang="ts">
  export let imageUrl: string | null = null;
  export let isVisible: boolean = false;
</script>

{#if isVisible && imageUrl}
  <div class="preview-container">
    <img src={imageUrl} alt="Project preview" />
  </div>
{/if}

<style>
  .preview-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    pointer-events: none;
    max-width: 20vw;
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
    filter: grayscale(100%);
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

