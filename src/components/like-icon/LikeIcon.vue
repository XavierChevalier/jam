<script setup lang="ts">
  import { mdiHeart, mdiHeartOutline } from '@mdi/js'
  import Icon from '@/components/icon/Icon.vue'
  import { z } from 'zod'

  defineProps({
    liked: {
      type: Boolean,
      default: false,
    },
    showCounter: {
      type: Boolean,
      default: true,
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
  <span class="flex">
    <Icon
      :class="liked ? 'text-primary' : 'text-neutral'"
      :path="liked ? mdiHeart : mdiHeartOutline"
    />
    <span v-if="showCounter" class="ml-2">{{ counter }}</span>
  </span>
</template>
