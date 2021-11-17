<script setup lang="ts">
  import { mdiHeart } from '@mdi/js'
  import Icon from '@/components/icon/Icon.vue'
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
  <span>{{ author }}</span>
  <span>{{ publicationDateDistance }}</span>
  <p>{{ content }}</p>
  <Icon :path="mdiHeart"></Icon>
  <span>{{ numberOfLikes }}</span>
</template>
