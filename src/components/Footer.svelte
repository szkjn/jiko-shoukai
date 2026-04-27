<script lang="ts">
  import { base } from '$app/paths';
</script>

<div class="footer-bg">
  <img src="{base}/images/banner_footer.jpg" alt="is this not real" class="footer-image" />
  <footer class="footer">
    <div class="footer-links">
      <a href="https://junsuzuki.bandcamp.com/" target="_blank"><img src="{base}/png/arrow-up-right.png" alt="" class="arrow" /> bandcamp</a>
      <a href="https://soundcloud.com/junsuzuki" target="_blank"><img src="{base}/png/arrow-up-right.png" alt="" class="arrow" /> soundcloud</a>
      <a href="https://instagram.com/einleit/" target="_blank"><img src="{base}/png/arrow-up-right.png" alt="" class="arrow" /> instagram</a>
      <a href="https://www.youtube.com/@junsuzuki404/videos" target="_blank"><img src="{base}/png/arrow-up-right.png" alt="" class="arrow" /> youtube</a>
      <a href="https://linkedin.com/in/jun-suzuki/" target="_blank"><img src="{base}/png/arrow-up-right.png" alt="" class="arrow" /> linkedin</a>
      <a href="https://blog.junsuzuki.xyz" target="_blank"><img src="{base}/png/arrow-up-right.png" alt="" class="arrow" /> blog</a>
    </div>
  </footer>
</div>

<style>
  .footer-bg {
    width: 100%;
    position: relative;
    display: block;
  }

  .footer-image {
    width: 100%;
    height: auto;
    display: block;
    opacity: 0.8;
    filter: grayscale(90%);
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 2rem 1rem 2rem;
    box-sizing: border-box;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .footer a {
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    line-height: 1.2;
    font-weight: 400;
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: crosshair;
    user-select: none;
    margin: 0;
  }

  .footer a:hover {
    text-decoration: underline;
  }

  .arrow {
    width: 10px;
    height: 10px;
    display: inline-block;
    filter: brightness(0) invert(1);
  }

  @media (max-width: 680px) {
    .footer {
      padding: 0 1rem 1rem 1rem;
    }

    .footer a {
      font-size: 0.9rem;
    }

    .arrow {
      width: 10px;
      height: 10px;
    }
  }
</style>
