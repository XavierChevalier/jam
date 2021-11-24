<script setup lang="ts">
  import { mdiHeart, mdiHeartOutline } from '@mdi/js'
  import Icon from '@/components/icon/Icon.vue'
  import { number } from 'yup'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

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
      // eslint-disable-next-line vue/valid-define-props
      validator: isPropertyValid(number().integer().min(0)),
    },
  })
</script>

<template>
  <span class="flex text-neutral">
    <Icon
      :class="{ 'text-primary': liked }"
      :path="liked ? mdiHeart : mdiHeartOutline"
    />
    <span v-if="showCounter" class="ml-2">{{ counter }}</span>
  </span>
</template>
