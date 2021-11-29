<script setup lang="ts">
  import AppUserAvatar from '@/app/components/AppUserAvatar.vue'
  import { localeFormatDistance } from '@/app/tools/date/Date'
  import { computed, PropType } from 'vue'
  import { Author } from '@/app/modules/feed/models/Author'
  import { isPropertyValid } from '@/app/tools/component-properties/PropertyValidator'
  import { AvailableFeedPostType } from '@/app/modules/feed/models/FeedPostType'

  const publicationDate = localeFormatDistance(new Date(), new Date(), {
    addSuffix: false,
  })

  const props = defineProps({
    author: {
      type: Object as PropType<Author>,
      required: true,
      validator: isPropertyValid(Author),
    },
    postType: {
      type: String as PropType<keyof typeof AvailableFeedPostType>,
      required: true,
      validator: (value: string) =>
        Object.keys(AvailableFeedPostType).includes(value),
    },
  })
  const content = computed(() => `${props.author.name} à partagé un morceau`)
</script>

<template>
  <div class="flex gap-3 items-center">
    <AppUserAvatar size="sm" :user-name="author.name" :url="author.avatar" />
    <span>{{ content }}</span>
    <div class="flex relative flex-shrink-0 gap-2 items-center">
      <div
        class="absolute -left-3 w-0 h-0 rounded-full border-3 border-primary"
      />
      <span class="text-neutral">{{ publicationDate }}</span>
    </div>
  </div>
</template>
