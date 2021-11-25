<script lang="ts">
  export const availableSizes = {
    sm: 'w-4.5 h-4.5',
    base: 'w-6 h-6',
    lg: 'w-7 h-7',
    xl: 'w-9 h-9',
  }
  export default {}
</script>

<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { MdiExtra } from '@/assets/images/icons/MdiExtra'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

  type AvailableSizes = keyof typeof availableSizes
  const props = defineProps({
    path: {
      type: [String, Object] as PropType<MdiExtra>,
      required: true,
      validator: isPropertyValid(MdiExtra),
    },
    size: {
      type: String as PropType<AvailableSizes>,
      default: 'base',
      validator: (value: AvailableSizes) =>
        Object.keys(availableSizes).includes(value),
    },
  })

  const sizeClass = computed(() => availableSizes[props.size])
</script>

<template>
  <svg
    class="inline-block align-middle"
    :class="sizeClass"
    :viewBox="path.viewBox || '0 0 24 24'"
  >
    <path
      :transform="path.transform"
      :d="path.path || path"
      style="fill: currentColor"
    />
  </svg>
</template>
