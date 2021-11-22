<script setup lang="ts">
  import { z } from 'zod'
  import { computed } from 'vue'

  const props = defineProps({
    progress: {
      type: Number,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => z.number().gte(0).safeParse(value).success,
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
