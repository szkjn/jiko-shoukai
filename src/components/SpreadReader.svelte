<script lang="ts">
  import { onMount } from 'svelte';

  export let pages: string[];
  export let title: string;

  let currentIndex = 0;
  let isFullscreen = false;
  let isTransitioning = false;
  let touchStartX = 0;
  let touchStartY = 0;

  $: total = pages.length;
  $: hasPrev = currentIndex > 0;
  $: hasNext = currentIndex < total - 1;

  function prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function go(delta: number) {
    const next = currentIndex + delta;
    if (next < 0 || next >= total) return;
    if (prefersReducedMotion()) {
      currentIndex = next;
      return;
    }
    isTransitioning = true;
    setTimeout(() => {
      currentIndex = next;
      isTransitioning = false;
    }, 150);
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
      go(-1);
    } else if (e.key === 'ArrowRight') {
      go(1);
    } else if (e.key === 'Escape' && isFullscreen) {
      isFullscreen = false;
    }
  }

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;
    go(dx < 0 ? 1 : -1);
  }

  function openFullscreen() {
    isFullscreen = true;
  }

  function closeFullscreen() {
    isFullscreen = false;
  }

  onMount(() => {
    pages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  });

  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = isFullscreen ? 'hidden' : '';
  }
</script>

<svelte:window on:keydown={handleKey} />

<div
  class="reader"
  role="region"
  aria-roledescription="reader"
  aria-label="{title} — page {currentIndex + 1} of {total}"
>
  <div
    class="spread-frame"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
  >
    <button
      class="spread-button"
      on:click={openFullscreen}
      aria-label="Open spread fullscreen"
    >
      <img
        class="spread"
        class:transitioning={isTransitioning}
        src={pages[currentIndex]}
        alt="{title}, page {currentIndex + 1} of {total}"
      />
    </button>
  </div>

  <div class="controls">
    <button
      class="nav-button"
      on:click={() => go(-1)}
      disabled={!hasPrev}
      aria-label="Previous spread"
    >←</button>
    <span class="indicator">{currentIndex + 1} / {total}</span>
    <button
      class="nav-button"
      on:click={() => go(1)}
      disabled={!hasNext}
      aria-label="Next spread"
    >→</button>
  </div>
</div>

{#if isFullscreen}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
  <div
    class="fullscreen-backdrop"
    on:click={closeFullscreen}
    role="dialog"
    aria-modal="true"
    aria-label="{title} fullscreen reader"
  >
    <button
      class="close-button"
      on:click|stopPropagation={closeFullscreen}
      aria-label="Close fullscreen"
    >×</button>
    <button
      class="fs-nav fs-nav-prev"
      on:click|stopPropagation={() => go(-1)}
      disabled={!hasPrev}
      aria-label="Previous spread"
    >←</button>
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="fullscreen-frame" on:click|stopPropagation>
      <img
        class="fullscreen-spread"
        src={pages[currentIndex]}
        alt="{title}, page {currentIndex + 1} of {total}"
      />
    </div>
    <button
      class="fs-nav fs-nav-next"
      on:click|stopPropagation={() => go(1)}
      disabled={!hasNext}
      aria-label="Next spread"
    >→</button>
  </div>
{/if}

<style>
  .reader {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .spread-frame {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .spread-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .spread {
    width: 100%;
    height: auto;
    display: block;
    background-color: #fff;
    transition: opacity 150ms ease;
  }

  .spread.transitioning {
    opacity: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .spread {
      transition: none;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.9rem;
    color: #FFFFFF;
    user-select: none;
  }

  .nav-button {
    background: none;
    border: none;
    color: #FFFFFF;
    font-size: 1.2rem;
    line-height: 1;
    padding: 0.25rem 0.5rem;
  }

  .nav-button:disabled {
    opacity: 0.3;
  }

  .nav-button:not(:disabled):hover {
    opacity: 0.7;
  }

  .indicator {
    font-variant-numeric: tabular-nums;
  }

  .fullscreen-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.92);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
  }

  .fullscreen-frame {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: pinch-zoom;
    overflow: auto;
  }

  .fullscreen-spread {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    background-color: #fff;
  }

  .close-button {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #FFFFFF;
    font-size: 2rem;
    line-height: 1;
    padding: 0.5rem;
    z-index: 10000;
  }

  .close-button:hover {
    opacity: 0.7;
  }

  .fs-nav {
    background: none;
    border: none;
    color: #FFFFFF;
    font-size: 2rem;
    line-height: 1;
    padding: 1rem;
    z-index: 10000;
    flex-shrink: 0;
  }

  .fs-nav:disabled {
    opacity: 0.2;
  }

  .fs-nav:not(:disabled):hover {
    opacity: 0.7;
  }

  @media (max-width: 680px) {
    .controls {
      font-size: 1.6rem;
      gap: 2rem;
    }
    .nav-button {
      font-size: 2rem;
      padding: 0.5rem 1rem;
    }
    .fs-nav {
      font-size: 2.4rem;
      padding: 0.5rem;
    }
    .close-button {
      font-size: 2.8rem;
    }
  }
</style>
