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

  @media (max-width: 760px) {
    .footer-wrapper {
      padding: 0 1rem;
    }
  }

  .footer-image {
    width: 100%;
    display: block;
  }

  .footer-image img {
    width: 100%;
    height: auto;
    display: block;
    opacity: 0.8;
  }
</style>
