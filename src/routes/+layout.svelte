<script lang="ts">
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import CrosshairCursor from "../components/CrosshairCursor.svelte";

  let { children } = $props();
</script>

<CrosshairCursor />
{@render children()}
<Footer />

