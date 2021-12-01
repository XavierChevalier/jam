<script setup lang="ts">
  import { mdiHeart, mdiHeartOutline } from '@mdi/js'
  import AppIcon from '@/app/components/atoms/AppIcon.vue'
  import { number } from 'yup'
  import { isPropertyValid } from '@/app/tools/component-properties/PropertyValidator'

  defineProps({
    liked: {
      type: Boolean,
      default: false,
    },
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
  <span class="flex items-center text-neutral">
    <AppIcon
      :class="{ 'text-primary': liked }"
      :path="liked ? mdiHeart : mdiHeartOutline"
    />
    <span v-if="showCounter" class="ml-2">{{ counter }}</span>
  </span>
</template>
