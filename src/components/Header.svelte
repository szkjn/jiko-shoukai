<script lang="ts">
  export let title = "jun suzuki";
</script>

<header class="sticky-header flex justify-between items-start pt-2 pb-8 m-0">
  <h1 class="text-sm font-bold">{title}</h1>
  <nav class="flex flex-end items-start">
    <p class="text-sm pl-2">about</p>
  </nav>
</header>

<style>
  * {
    font-family: "Libre Franklin", sans-serif;
  }
  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #fff;
  }
</style>
