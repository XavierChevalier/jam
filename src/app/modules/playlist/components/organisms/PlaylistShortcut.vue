<script setup lang="ts">
  // noinspection TypeScriptCheckImport
  import VueHorizontal from 'vue-horizontal'
</script>

<template>
  <VueHorizontal :button="false">
    <slot />
  </VueHorizontal>
</template>

<style scoped lang="scss">
  ::v-deep(.v-hl-container) {
    @apply gap-3;
  }
</style>
