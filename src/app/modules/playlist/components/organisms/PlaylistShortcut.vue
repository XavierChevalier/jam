<script setup lang="ts">
  import VueHorizontal, { VueHorizontalData } from 'vue-horizontal'
  import { ref } from 'vue'
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
  import AppIcon from '@/app/components/atoms/AppIcon.vue'

  defineProps({
    title: {
      type: String,
      required: true,
    },
  })

  const horizontalList = ref<InstanceType<typeof VueHorizontal>>()
  const hasPrev = ref(false)
  const hasNext = ref(true)
  const onScroll = (horizontalScroll: VueHorizontalData) => {
    hasPrev.value = horizontalScroll.hasPrev
    hasNext.value = horizontalScroll.hasNext
  }
</script>

<template>
  <div class="flex flex-col gap-2">
    <header class="flex justify-between items-center">
      <h2 class="text-xl font-bold">{{ title }}</h2>

      <nav>
        <button
          data-test="navigationPrev"
          class="transition-colors"
          :class="{ inactive: !hasPrev }"
          @click="horizontalList.prev"
        >
          <AppIcon :path="mdiChevronLeft" />
        </button>
        <button
          data-test="navigationNext"
          class="transition-colors"
          :class="{ inactive: !hasNext }"
          @click="horizontalList.next"
        >
          <AppIcon :path="mdiChevronRight" />
        </button>
      </nav>
    </header>

    <VueHorizontal
      ref="horizontalList"
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
