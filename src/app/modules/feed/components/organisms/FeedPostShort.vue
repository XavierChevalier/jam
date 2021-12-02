<script setup lang="ts">
  import FeedPostShortSeeMoreButton from '@/app/modules/feed/components/molecules/FeedPostShortSeeMoreButton.vue'
</script>

<template>
  <div class="flex flex-col gap-3 bg-white rounded p-2">
    <slot />
    <FeedPostShortSeeMoreButton />
  </div>
</template>
