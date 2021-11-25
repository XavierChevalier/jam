<script setup lang="ts">
  import { computed, PropType } from 'vue'
  import IconLike from '@/components/IconLike.vue'
  import { formatDuration } from '@/tools/date/FormatDuration'
  import { Track } from '@/modules/track/models/Track'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

  const props = defineProps({
    track: {
      type: Object as PropType<Track>,
      required: true,
      validator: isPropertyValid(Track),
    },
  })

  const trackDuration = computed(() => formatDuration(props.track.durationMs))
</script>

<template>
  <div class="bg-white-dark rounded p-2 flex">
    <img class="rounded w-16 h-16" :src="track.cover" alt="The track cover" />

    <div class="flex flex-col ml-2 leading-tight justify-center">
      <span class="font-bold">{{ track.title }}</span>
      <span v-for="band in track.bands" :key="band">{{ band }}</span>
    </div>

    <div class="flex self-center ml-auto">
      <IconLike class="text-black-light" />
      <span class="ml-3">{{ trackDuration }}</span>
    </div>
  </div>
</template>
