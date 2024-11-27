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

<div class="bg-gray-100 py-4 px-6 flex gap-2">
  {#each categories as category}
    <button
      on:click={() => toggleCategory(category)}
      class="px-3 py-1 border rounded-md {selectedCategories.includes(category)
        ? 'bg-gray-800 text-white'
        : 'bg-white'}"
    >
      {category}
    </button>
  {/each}
</div>
