<script setup lang="ts">
  import { mdiHeart } from '@mdi/js'
  import Icon from '@/components/icon/Icon.vue'
  import { computed, PropType } from 'vue'
  import { localeFormatDistance } from '@/tools/date/Date'
  import { Author } from '@/modules/feed/models/Author'

  const props = defineProps({
    author: {
      type: Object as PropType<Author>,
      required: true,
      validator: (value) => Author.safeParse(value).success, // eslint-disable-line vue/valid-define-props
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
  <div>
    <img alt="The author avatar" :src="author.avatar" />
    <span>{{ author.name }}</span>
    <span>{{ publicationDateDistance }}</span>
    <p>{{ content }}</p>
    <Icon :path="mdiHeart"></Icon>
    <span>{{ numberOfLikes }}</span>
  </div>
</template>
