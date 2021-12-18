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
    prev: (event: PointerEvent | MouseEvent) =>
      horizontalTemplateRef.value?.prev(event as PointerEvent),
    next: (event: PointerEvent | MouseEvent) =>
      horizontalTemplateRef.value?.next(event as PointerEvent),
    onScroll(horizontalScroll: VueHorizontalData) {
      hasPrev.value = horizontalScroll.hasPrev
      hasNext.value = horizontalScroll.hasNext
    },
  }
}
