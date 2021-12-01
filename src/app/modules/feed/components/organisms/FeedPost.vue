<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import { localeFormatDistance } from '@/app/tools/date/Date'
  import { Author } from '@/app/modules/feed/models/Author'
  import UserAvatar from '@/app/components/atoms/AppUserAvatar.vue'
  import IconLike from '@/app/components/molecules/AppIconLike.vue'
  import IconComment from '@/app/components/molecules/AppIconComment.vue'
  import Icon from '@/app/components/atoms/AppIcon.vue'
  import { mdiDotsVertical } from '@mdi/js'
  import { isPropertyValid } from '@/app/tools/component-properties/PropertyValidator'

  const props = defineProps({
    author: {
      type: Object as PropType<Author>,
      required: true,
      validator: isPropertyValid(Author),
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
  <div class="p-5 bg-white rounded group">
    <div class="flex items-center">
      <UserAvatar :user-name="author.name" :url="author.avatar" />

      <div class="flex flex-col pl-3">
        <span>{{ author.name }}</span>
        <span class="text-neutral">{{ publicationDateDistance }}</span>
      </div>

      <Icon
        class="
          ml-auto
          opacity-0
          transition-opacity
          text-neutral
          group-hover:opacity-100
        "
        :path="mdiDotsVertical"
      />
    </div>

    <p class="mt-5">{{ content }}</p>

    <div v-if="!!$slots.default" class="mt-2">
      <slot />
    </div>

    <div class="flex justify-end mt-5">
      <IconLike show-counter :counter="numberOfLikes" />
      <IconComment show-counter :counter="numberOfComments" class="ml-5" />
    </div>
  </div>
</template>
