<script lang="ts">
  export let title = "jun suzuki";
</script>

<header class="sticky-header flex justify-between items-start py-2 m-0">
  <div class="flex flex-row gap-2 items-center">
    <h1 class="text-sm font-bold">{title}</h1>
    <img src="/png/jun.png" alt="jun-in-japanese" class="sign" />
  </div>
</header>

<style>
  * {
    font-family: "Inter", sans-serif;
    user-select: none;
    color: #FFFFFF;
  }

  .sticky-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #8F8F8F;
  }
  
  .sign {
    height: 18px;
    filter: invert(1);
  }

  @media (max-width: 760px) {
    * {
      font-size: 2rem;
      line-height: 2.2rem;
    }

    .sign {
      display: none;
    }
  }
</style>
