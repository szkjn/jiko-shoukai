<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="flex flex-col align-items mt-4 mb-0 p-2">
  <p>
    Supported by:<br /><br />
    <a href="https://www.3am-energy.com/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/3am-logo.png" alt="3AM Energy" class="py-2" />
    </a>
    <a href="https://apal.info/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/apal-logo.png" alt="APAL" class="py-1" />
    </a>
    <a href="https://www.manifestio.art/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/manifestio-logo.png" alt="Manifest:IO"/>
    </a>
    <a href="https://terenor.com/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/terenor-logo.png" alt="Terenor" class="py-2" />
    </a>
    <a href="https://futurehain.com/" target="_blank" rel="noopener noreferrer">
      <img src="{base}/png/futurehain-logo.webp" alt="Futurehain" class="py-3 pb-2" />
    </a>
    <img src="{base}/png/jf-logo.png" alt="Japan Foundation" class="py-2" />
    <img src="{base}/png/goethe-logo.png" alt="Goethe Institut" class="py-2" />

  </p>
</div>

<style>
  * {
    font-family: "Inter", sans-serif;
    font-size: 0.65rem;
    line-height: 17px;
    user-select: none;
    color: #FFFFFF;
  }

  div {
    margin-bottom: 0;
    width: 100%;
  }
  p {
    text-align: center;
  }
  a {
    display: block;
    border-left: 2px solid transparent;
    padding-left: 4px;
    margin-left: -6px;
    transition: border-color 0.2s ease;
  }
  a:hover {
    border-left-color: #FFFFFF;
  }
  img {
    width: 100%;
    margin: 0 auto;
    filter: brightness(0) invert(1);
  }
</style>

