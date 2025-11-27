<script lang="ts">
  let mouseX = $state(0);
  let mouseY = $state(0);
  let isHoveringLink = $state(false);
  let isHoveringClickable = $state(false);

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (!element) {
      isHoveringLink = false;
      isHoveringClickable = false;
      return;
    }

    // Check if it's a button
    const buttonElement = element.tagName === 'BUTTON' ? element : element.closest('button');
    const isButton = buttonElement !== null;

    // Check if it's a link
    const linkElement = element.tagName === 'A' ? element as HTMLAnchorElement : element.closest('a') as HTMLAnchorElement | null;
    const isLink = linkElement !== null;

    // Check if it's an external link
    let isExternalLink = false;
    if (linkElement) {
      const href = linkElement.getAttribute('href');
      const target = linkElement.getAttribute('target');
      isExternalLink = target === '_blank' || (href !== null && (href.startsWith('http://') || href.startsWith('https://')));
    }

    // Update states
    isHoveringLink = isLink && isExternalLink;
    
    // Rotate when hovering over clickable elements that are NOT external links
    // This includes: buttons, internal links (not external)
    isHoveringClickable = isButton || (isLink && !isExternalLink);
  }
</script>

<svelte:window onmousemove={handleMouseMove} />

<div 
  class="crosshair-container {isHoveringClickable ? 'rotate-anticlockwise' : ''}" 
  style="transform-origin: {mouseX}px {mouseY}px; --mouse-x: {mouseX}px; --mouse-y: {mouseY}px;"
>
  <div 
    class="crosshair-vertical {isHoveringLink ? 'hover-link' : ''}" 
    style="left: {mouseX}px; top: {mouseY}px"
  ></div>
  <div 
    class="crosshair-horizontal {isHoveringLink ? 'hover-link' : ''}" 
    style="left: {mouseX}px; top: {mouseY}px"
  ></div>
</div>

<style>
  .crosshair-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: visible;
    transform: rotate(10deg);
    transition: transform 0.3s ease;
  }

  @keyframes rotate-anticlockwise {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(-350deg);
    }
  }

  .crosshair-container.rotate-anticlockwise {
    animation: rotate-anticlockwise 10s linear infinite;
  }

  .crosshair-vertical {
    position: absolute;
    width: 2px;
    height: 1rem;
    background-color: #ffffff77;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: height 0.2s ease, top 0.2s ease;
  }

  .crosshair-horizontal {
    position: absolute;
    width: 1rem;
    height: 2px;
    background-color: #FFFFFF77;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: width 0.2s ease, left 0.2s ease;
  }

  .crosshair-vertical.hover-link {
    height: 200vh;
    top: calc(var(--mouse-y) - 100vh) !important;
    transform: translateX(-50%);
  }

  .crosshair-horizontal.hover-link {
    width: 200vw;
    left: calc(var(--mouse-x) - 100vw) !important;
    transform: translateY(-50%);
  }
</style>
