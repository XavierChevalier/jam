<script setup lang="ts">
  import FeedPostSummarySeeMoreButton from '@/app/modules/feed/components/molecules/FeedPostSummarySeeMoreButton.vue'
</script>

<template>
  <div class="flex flex-col gap-3 bg-white rounded p-2">
    <slot />
    <FeedPostSummarySeeMoreButton />
  </div>
</template>
