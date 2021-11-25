<script setup lang="ts">
  import { computed } from 'vue'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'
  import { number } from 'yup'

  const props = defineProps({
    progress: {
      type: Number,
      required: true,
      validator: isPropertyValid(number().integer().min(0)),
    },
  })

  const progressFill = computed(() => `${props.progress}%`)
</script>

<template>
  <div class="overflow-hidden h-1 rounded-full bg-primary/20">
    <div class="h-full bg-primary" :style="{ width: progressFill }" />
  </div>
</template>
