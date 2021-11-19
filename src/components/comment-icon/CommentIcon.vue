<script setup lang="ts">
  import { mdiSpeechOutline } from '@/assets/images/icons/MdiExtra'
  import Icon from '@/components/icon/Icon.vue'
  import { z } from 'zod'

  defineProps({
    showCounter: {
      type: Boolean,
      default: false,
    },
    counter: {
      type: Number,
      default: 0,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => z.number().int().gte(0).safeParse(value).success,
    },
  })
</script>

<template>
  <span class="flex text-neutral">
    <Icon :path="mdiSpeechOutline" />
    <span v-if="showCounter" class="ml-2">{{ counter }}</span>
  </span>
</template>
