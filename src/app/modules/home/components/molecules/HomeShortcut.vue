<script setup lang="ts">
  import { string } from 'yup'
  import { isPropertyValid } from '@/app/tools/component-properties/PropertyValidator'

  defineProps({
    imageUrl: {
      type: String,
      required: true,
      validator: isPropertyValid(string().required().url()),
    },
  })
</script>

<template>
  <div class="flex items-center bg-white rounded">
    <img class="rounded" :src="imageUrl" alt="Song or album image" />
    <span class="ml-3">
      <slot />
    </span>
  </div>
</template>
