<script lang="ts">
  import "../app.css";
  import Footer from "../components/Footer.svelte";

  let { children } = $props();
</script>

{@render children()}
<div class="footer-bg">
  <div class="footer-wrapper">
    <Footer />
  </div>
  <div class="footer-image">
    <img src="/images/banner_footer.jpg" alt="is this not real" />
    <p class="copyright-overlay">jun suzuki ©2025</p>
  </div>
</div>

<style>
  .footer-bg {
    width: 100%;
    background: #FFFFFF;
    border-top: 1px solid #FFFFFF;
  }

  .footer-wrapper {
    padding: 0 2rem 0 2rem;
  }

  @media (max-width: 680px) {
    .footer-wrapper {
      padding: 0 1rem;
    }
  }

  .footer-image {
    width: 100%;
    display: block;
    position: relative;
  }

  .footer-image img {
    width: 100%;
    height: auto;
    display: block;
    opacity: 0.8;
  }

  .copyright-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0;
    user-select: none;
    white-space: nowrap;
  }

  @media (max-width: 680px) {
    .copyright-overlay {
      font-size: 1.6rem;
    }
  }
</style>
