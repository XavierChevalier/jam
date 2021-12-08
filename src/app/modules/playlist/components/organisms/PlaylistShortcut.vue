<script setup lang="ts">
  import VueHorizontal from 'vue-horizontal'
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
  import AppIcon from '@/app/components/atoms/AppIcon.vue'
  import { useVueHorizontalScroll } from '@/app/composable/VueHorizontalScroll'

  defineProps({
    title: {
      type: String,
      required: true,
    },
  })

  const { horizontalTemplateRef, prev, next, hasPrev, hasNext, onScroll } =
    useVueHorizontalScroll()
</script>

<template>
  <div class="flex flex-col gap-2">
    <header class="flex justify-between items-center">
      <h2 class="text-lg font-bold">{{ title }}</h2>

      <nav class="hidden sm:block">
        <button
          data-test="navigationPrev"
          class="transition-colors"
          :class="{ inactive: !hasPrev }"
          @click="prev"
        >
          <AppIcon :path="mdiChevronLeft" />
        </button>
        <button
          data-test="navigationNext"
          class="transition-colors"
          :class="{ inactive: !hasNext }"
          @click="next"
        >
          <AppIcon :path="mdiChevronRight" />
        </button>
      </nav>
    </header>

    <VueHorizontal
      ref="horizontalTemplateRef"
      :button="false"
      @scroll-debounce="onScroll"
    >
      <slot />
    </VueHorizontal>
  </div>
</template>

<style scoped lang="scss">
  ::v-deep(.v-hl-container) {
    @apply gap-3;
  }

  .inactive {
    @apply text-neutral-light;
  }
</style>
