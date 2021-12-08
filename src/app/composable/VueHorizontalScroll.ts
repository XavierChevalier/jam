import { ref } from 'vue'
import VueHorizontal, { VueHorizontalData } from 'vue-horizontal'

export function useVueHorizontalScroll() {
  const hasPrev = ref(false)
  const hasNext = ref(true)
  const horizontalTemplateRef = ref<InstanceType<typeof VueHorizontal>>()

  return {
    horizontalTemplateRef,
    hasPrev,
    hasNext,
    prev: (event: PointerEvent) => horizontalTemplateRef.value?.prev(event),
    next: (event: PointerEvent) => horizontalTemplateRef.value?.next(event),
    onScroll(horizontalScroll: VueHorizontalData) {
      hasPrev.value = horizontalScroll.hasPrev
      hasNext.value = horizontalScroll.hasNext
    },
  }
}
