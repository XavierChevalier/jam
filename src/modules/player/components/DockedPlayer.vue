<script setup lang="ts">
  import { PropType } from 'vue'
  import { Track } from '@/modules/track/models/Track'
  import DotSeparator from '@/components/dot-separator/DotSeparator.vue'
  import PlayerProgressBar from '@/modules/player/components/PlayerProgressBar.vue'
  import LikeIcon from '@/components/like-icon/LikeIcon.vue'
  import Icon from '@/components/icon/Icon.vue'
  import { mdiPlayOutline } from '@mdi/js'
  import TrackCover from '@/modules/track/components/TrackCover.vue'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'

  defineProps({
    track: {
      type: Object as PropType<Track>,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: isPropertyValid(Track),
    },
  })
</script>

<template>
  <div>
    <TrackCover :track="track" />
    <span>{{ track.title }}</span>
    <DotSeparator />
    <span v-for="band in track.bands" :key="band">{{ band }}</span>
    <PlayerProgressBar :progress="50" />
    <LikeIcon class="text-black" />
    <Icon :path="mdiPlayOutline" />
  </div>
</template>
