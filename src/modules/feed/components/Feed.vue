<script setup lang="ts">
  import { mdiHeart } from '@mdi/js'
  import MDIcon from '@/components/icon/Icon.vue'
  import { computed } from 'vue'
  import { localeFormatDistance } from '@/tools/date/Date'

  const props = defineProps({
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    numberOfLikes: {
      type: Number,
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
  })

  const publicationDateDistance = computed(() =>
    localeFormatDistance(props.publicationDate, new Date())
  )
</script>

<template>
  <span data-test="author">{{ author }}</span>
  <span data-test="publicationDate">{{ publicationDateDistance }}</span>
  <p data-test="content">{{ content }}</p>
  <MDIcon data-test="heart" :path="mdiHeart"></MDIcon>
  <span data-test="numberOfLikes">{{ numberOfLikes }}</span>
</template>
