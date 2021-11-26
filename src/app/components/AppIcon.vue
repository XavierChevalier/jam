<script lang="ts">
  import { defineComponent } from 'vue'
  import { SizeMixin } from '@/app/mixins/SizeMixin'

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
  import { computed, PropType } from 'vue'
  import { MdiExtra, MdiExtraObject } from '@/assets/images/icons/MdiExtra'
  import { isPropertyValid } from '@/app/tools/component-properties/PropertyValidator'

  const props = defineProps({
    path: {
      type: [String, Object] as PropType<MdiExtra>,
      required: true,
      validator: isPropertyValid(MdiExtra),
    },
  })
  const pathObject = computed<MdiExtraObject>(() =>
    typeof props.path === 'object' ? props.path : { path: props.path }
  )
</script>

<template>
  <svg
    class="inline-block align-middle"
    :class="sizeClass"
    :viewBox="pathObject.viewBox || '0 0 24 24'"
  >
    <path
      :transform="pathObject.transform"
      :d="pathObject.path"
      style="fill: currentColor"
    />
  </svg>
</template>
