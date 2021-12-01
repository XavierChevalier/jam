<script lang="ts">
  import { defineComponent } from 'vue'
  import { SizeMixin } from '@/app/mixins/SizeMixin'

  export default defineComponent({
    mixins: [
      SizeMixin({
        xs: 'w-4.5 h-4.5', // TODO
        sm: 'w-8 h-8',
        base: 'w-10 h-10', // TODO
        lg: 'w-7 h-7', // TODO
      }),
    ],
  })
</script>

<script setup lang="ts">
  import { computed } from 'vue'
  import { string } from 'yup'
  import { isPropertyValid } from '@/app/tools/component-properties/PropertyValidator'

  const props = defineProps({
    userName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      validator: isPropertyValid(string().required().url()),
    },
  })

  const avatarAlt = computed(() => `The ${props.userName}'s avatar`)
</script>

<template>
  <img
    class="box-content p-0.5 rounded-full border-2 border-neutral-light"
    :class="sizeClass"
    :alt="avatarAlt"
    :src="url"
  />
</template>
