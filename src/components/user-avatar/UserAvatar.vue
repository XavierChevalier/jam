<script setup lang="ts">
  import { z } from 'zod'
  import { computed } from 'vue'

  const props = defineProps({
    userName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => z.string().url().safeParse(value).success,
    },
  })

  const avatarAlt = computed(() => `The ${props.userName}'s avatar`)
</script>

<template>
  <div
    class="
      w-10
      h-10
      relative
      after:absolute
      after:w-12
      after:h-12
      after:-top-1
      after:-left-1
      after:rounded-full
      after:border-2
      after:border-neutral-light
    "
  >
    <img class="rounded-full w-full h-full" :alt="avatarAlt" :src="url" />
  </div>
</template>
