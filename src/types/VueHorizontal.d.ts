declare module 'vue-horizontal' {
  import { defineComponent } from 'vue'

  export interface VueHorizontalData {
    left: number
    width: number
    scrollWidth: number
    hasPrev: boolean
    hasNext: boolean
    debounceId?: number | undefined
  }

  /* eslint-disable @typescript-eslint/no-empty-function */
  export default defineComponent({
    name: 'VueHorizontal',
    props: {
      button: { type: Boolean, default: () => true },
      buttonBetween: { type: Boolean, default: () => true },
      scroll: { type: Boolean, default: () => false },
      responsive: { type: Boolean, default: () => false },
      displacement: { type: Number, default: () => 1.0 },
      snap: { type: String, default: () => 'start' },
    },
    methods: {
      prev(): void {},
      next(): void {},
      onScrollDebounce(): void {},
      /**
       * Index of the slots to scroll to.
       * @param i index
       */
      scrollToIndex(i: number): void {},
      /**
       * Manually refresh vue-horizontal
       * @param callback after refreshed, optional
       */
      refresh(callback: (data: VueHorizontalData) => void): void {},
    },
  })
}
