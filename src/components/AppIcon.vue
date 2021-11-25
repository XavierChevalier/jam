<script lang="ts">
  import { defineComponent } from 'vue'
  import { SizeMixin } from '@/mixins/SizeMixin'

  export default defineComponent({
    mixins: [
      SizeMixin({
        sm: 'w-4.5 h-4.5',
        base: 'w-6 h-6',
        lg: 'w-7 h-7',
        xl: 'w-9 h-9',
      }),
    ],
  })
</script>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { MdiExtra } from '@/assets/images/icons/MdiExtra'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

  defineProps({
    path: {
      type: [String, Object] as PropType<MdiExtra>,
      required: true,
      validator: isPropertyValid(MdiExtra),
    },
  })
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
