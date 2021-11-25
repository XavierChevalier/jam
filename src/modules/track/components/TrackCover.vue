<script setup lang="ts">
  import { TrackOfTrackCover } from '@/modules/track/models/TrackCover'
  import { computed, PropType } from 'vue'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

  const props = defineProps({
    size: {
      type: Number,
      required: false,
      default: 4,
    },
    track: {
      type: Object as PropType<TrackOfTrackCover>,
      required: true,
      validator: isPropertyValid(TrackOfTrackCover),
    },
  })

  const alt = computed(() => {
    const bands = props.track.bands.join(', ')

    return `The track cover of ${props.track.title} • ${bands}`
  })
  const size = computed(() => `${props.size}rem`)
</script>

<template>
  <img
    class="rounded"
    :src="track.cover"
    :alt="alt"
    :style="{ width: size, height: size }"
  />
</template>
