<script setup lang="ts">
  import { PropType } from 'vue'
  import { MdiExtra } from '@/assets/images/icons/MdiExtra'

  defineProps({
    path: {
      type: [String, Object] as PropType<MdiExtra>,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value: MdiExtra) => MdiExtra.safeParse(value).success,
    },
    size: {
      type: Number,
      default: () => 24,
    },
  })
</script>

<template>
  <svg :width="size" :height="size" :viewBox="path.viewBox || '0 0 24 24'">
    <path
      :transform="path.transform"
      :d="path.path || path"
      style="fill: currentColor"
    />
  </svg>
</template>
