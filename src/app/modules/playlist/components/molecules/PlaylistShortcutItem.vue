<script setup lang="ts">
  defineProps({
    cover: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="flex flex-col max-w-[160px]">
    <img class="rounded" :src="cover" :alt="`Cover of ${title}`" />
    <span class="font-bold mt-2">{{ title }}</span>
    <span class="text-sm">{{ description }}</span>
  </div>
</template>
