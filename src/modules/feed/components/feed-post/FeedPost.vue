<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { localeFormatDistance } from '@/tools/date/Date'
  import { Author } from '@/modules/feed/models/Author'
  import UserAvatar from '@/components/user-avatar/UserAvatar.vue'
  import LikeIcon from '@/components/like-icon/LikeIcon.vue'
  import CommentIcon from '@/components/comment-icon/CommentIcon.vue'

  const props = defineProps({
    author: {
      type: Object as PropType<Author>,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => Author.safeParse(value).success,
    },
    content: {
      type: String,
      required: true,
    },
    numberOfLikes: {
      type: Number,
      required: true,
    },
    numberOfComments: {
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
  <div class="bg-white rounded p-5">
    <div class="flex items-center">
      <UserAvatar :user-name="author.name" :url="author.avatar" />

      <div class="flex flex-col pl-5">
        <span>{{ author.name }}</span>
        <span class="text-neutral">{{ publicationDateDistance }}</span>
      </div>
    </div>

    <p class="mt-5">{{ content }}</p>

    <div v-if="!!$slots.default" class="mt-2">
      <slot />
    </div>

    <div class="flex mt-5 justify-end">
      <LikeIcon show-counter :counter="numberOfLikes" />
      <CommentIcon show-counter :counter="numberOfComments" class="ml-5" />
    </div>
  </div>
</template>
