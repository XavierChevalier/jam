<script setup lang="ts">
  import { mdiSpeechOutline } from '@/assets/images/icons/MdiExtra'
  import Icon from '@/app/components/AppIcon.vue'
  import { isPropertyValid } from '@/app/tools/component-properties/PropertyValidator'
  import { number } from 'yup'

  defineProps({
    showCounter: {
      type: Boolean,
      default: false,
    },
    counter: {
      type: Number,
      default: 0,
      validator: isPropertyValid(number().integer().min(0)),
    },
  })
</script>

<template>
  <span class="flex text-neutral">
    <Icon :path="mdiSpeechOutline" />
    <span v-if="showCounter" class="ml-2">{{ counter }}</span>
  </span>
</template>
