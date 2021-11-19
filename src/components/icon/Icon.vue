<script setup lang="ts">
  defineProps({
    path: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: () => 24,
    },
  })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
    <path :d="path" style="fill: currentColor" />
  </svg>
</template>
