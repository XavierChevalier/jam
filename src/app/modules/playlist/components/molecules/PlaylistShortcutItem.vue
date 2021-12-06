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
  <div class="flex flex-col min-w-[150px] w-[150px]">
    <img class="rounded" :src="cover" :alt="`Cover of ${title}`" />
    <span class="font-bold mt-2">{{ title }}</span>
    <span class="text-sm">{{ description }}</span>
  </div>
</template>
