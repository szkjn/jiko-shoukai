<script lang="ts">
  let mouseX = $state(0);
  let mouseY = $state(0);
  let isHoveringLink = $state(false);
  let isHoveringClickable = $state(false);
  let isHoveringIntro = $state(false);

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    
    const element = document.elementFromPoint(event.clientX, event.clientY);
    if (!element) {
      isHoveringLink = false;
      isHoveringClickable = false;
      isHoveringIntro = false;
      return;
    }

    // Check if hovering over intro image
    const introElement = element.closest('.intro-image');
    isHoveringIntro = introElement !== null;

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
    // This includes: buttons, internal links (not external), intro screen image
    isHoveringClickable = isButton || (isLink && !isExternalLink) || isHoveringIntro;
  }
</script>

<svelte:window onmousemove={handleMouseMove} />

<div 
  class="crosshair-container {isHoveringClickable ? 'rotate-anticlockwise' : ''} {isHoveringLink ? 'rotate-anticlockwise-external' : ''} {isHoveringIntro ? 'intro-scale' : ''}" 
  style="transform-origin: {mouseX}px {mouseY}px; --mouse-x: {mouseX}px; --mouse-y: {mouseY}px;"
>
  <div 
    class="crosshair-vertical {isHoveringLink ? 'hover-link' : ''} {isHoveringIntro ? 'intro-scale' : ''}" 
    style="left: {mouseX}px; top: {mouseY}px"
  ></div>
  <div 
    class="crosshair-horizontal {isHoveringLink ? 'hover-link' : ''} {isHoveringIntro ? 'intro-scale' : ''}" 
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
    mix-blend-mode: difference;
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
    animation: rotate-anticlockwise 5s linear infinite;
  }

  .crosshair-container.rotate-anticlockwise-external {
    animation: rotate-anticlockwise 120s linear infinite;
  }

  .crosshair-vertical {
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: #ffffff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: top 0.01s ease, left 0.01s ease;
  }

  .crosshair-horizontal {
    position: absolute;
    width: 1rem;
    height: 4px;
    background-color: #FFFFFF;
    transform: translate(-50%, -50%);
    pointer-events: none;
    /* transition: height 0.2s ease, top 0.1s ease, left 0.1s ease; */
  }

  .crosshair-vertical.hover-link {
    height: 200vh;
    top: calc(var(--mouse-y) - 100vh) !important;
    transform: translateX(-50%);
    transition: height .4s ease;
    /* transition: height 0.2s ease, top 0.2s ease, left 0.2s ease; */
  }

  .crosshair-horizontal.hover-link {
    width: 200vw;
    left: calc(var(--mouse-x) - 100vw) !important;
    transform: translateY(-50%);
    transition: width .4s ease;

    /* transition: width 0.2s ease, left 0.2s ease, top 0.2s ease; */
  }

  .crosshair-vertical.intro-scale {
    width: 4px;
    height: 6rem;
    transform: translate(-50%, -50%);
  }

  .crosshair-horizontal.intro-scale {
    width: 4rem;
    height: 16px;
    transform: translate(-50%, -50%);
    transition: .1s ease;
  }
</style>
