<script lang="ts">
  import type { Category } from "../types/project";

  // Specify expected props (update props if applicable)
  export let categories: Category[];
  export let selectedCategories: Category[];

  export let onFilter: (category: Category) => void;

  const toggleCategory = (category: Category) => {
    onFilter(category);
  };
</script>

<div class="py-4 flex gap-2">
  {#each categories as category}
    <button
      on:click={() => toggleCategory(category)}
      class={`text-sm ${
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
  }
</style>
