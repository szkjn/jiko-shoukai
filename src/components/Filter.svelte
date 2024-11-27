<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Category } from "../types/project";

  export let categories: Category[];
  export let selectedCategories: Category[];

  const dispatch = createEventDispatcher();

  const toggleCategory = (category: Category) => {
    dispatch("filter", category);
  };
</script>

<div class="flex items-start gap-2">
  {#each categories as category}
    <button
      on:click={() => toggleCategory(category)}
      class={`text-sm px-1 ${
        selectedCategories.includes(category)
          ? "bg-gray-800 text-white"
          : "bg-white"
      }`}
    >
      {category}
    </button>
  {/each}
</div>

<style>
  button {
    cursor: crosshair;
    border: 1px solid black;
  }
</style>
