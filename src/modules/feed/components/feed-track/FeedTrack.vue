<script setup lang="ts">
  import { z } from 'zod'
  import { PropType } from 'vue'
  import LikeIcon from '@/components/like-icon/LikeIcon.vue'

  defineProps({
    cover: {
      type: String,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => z.string().url().safeParse(value).success,
    },
    title: {
      type: String,
      required: true,
    },
    bands: {
      type: Array as PropType<string[]>,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => z.array(z.string()).safeParse(value).success,
    },
    duration: {
      type: Number,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => z.number().gte(0).safeParse(value).success,
    },
  })
</script>

<template>
  <img :src="cover" alt="The track cover" />
  <span>{{ title }}</span>
  <span v-for="band in bands" :key="band">{{ band }}</span>
  <LikeIcon />
  <span></span>
</template>
