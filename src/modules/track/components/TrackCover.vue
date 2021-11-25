<script lang="ts">
  import { defineComponent } from 'vue'
  import { SizeMixin } from '@/mixins/SizeMixin'

  export default defineComponent({
    mixins: [
      SizeMixin({
        sm: 'w-9 h-9',
        base: 'w-16 h-16',
      }),
    ],
  })
</script>

<script setup lang="ts">
  import { TrackOfTrackCover } from '@/modules/track/models/TrackCover'
  import { computed, PropType } from 'vue'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

  const props = defineProps({
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
</script>

<template>
  <img class="rounded" :class="sizeClass" :src="track.cover" :alt="alt" />
</template>
