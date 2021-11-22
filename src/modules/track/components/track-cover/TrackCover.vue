<script setup lang="ts">
  import { TrackOfTrackCover } from '@/modules/track/models/TrackCover'
  import { computed, PropType } from 'vue'

  const props = defineProps({
    track: {
      type: Object as PropType<TrackOfTrackCover>,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: (value) => TrackOfTrackCover.safeParse(value).success,
    },
  })

  const alt = computed(() => {
    const bands = props.track.bands.join(', ')

    return `The track cover of ${props.track.title} • ${bands}`
  })
</script>

<template>
  <img class="rounded w-16 h-16" :src="track.cover" :alt="alt" />
</template>
