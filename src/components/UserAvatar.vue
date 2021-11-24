<script setup lang="ts">
  import { computed } from 'vue'
  import { string } from 'yup'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

  const props = defineProps({
    userName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: isPropertyValid(string().required().url()),
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
