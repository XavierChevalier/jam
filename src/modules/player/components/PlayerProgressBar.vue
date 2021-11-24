<script setup lang="ts">
  import { computed } from 'vue'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'
  import { number } from 'yup'

  const props = defineProps({
    progress: {
      type: Number,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: isPropertyValid(number().integer().min(0)),
    },
  })

  const progressFill = computed(() => props.progress + '%')
</script>

<template>
  <div class="h-1 bg-primary-light">
    <div
      class="h-full rounded-full bg-primary"
      :style="{ width: progressFill }"
    />
  </div>
</template>
