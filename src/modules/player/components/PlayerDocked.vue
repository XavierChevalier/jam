<script setup lang="ts">
  import { PropType } from 'vue'
  import { Track } from '@/modules/track/models/Track'
  import DotSeparator from '@/components/DotSeparator.vue'
  import PlayerProgressBar from '@/modules/player/components/PlayerProgressBar.vue'
  import IconLike from '@/components/IconLike.vue'
  import Icon from '@/components/Icon.vue'
  import { mdiPlayOutline } from '@mdi/js'
  import TrackCover from '@/modules/track/components/TrackCover.vue'
  import { isPropertyValid } from '@/tools/component-properties/PropertyValidator'
  import PlayerRemoteListeningDevice from '@/modules/player/components/PlayerRemoteListeningDevice.vue'

  defineProps({
    track: {
      type: Object as PropType<Track>,
      required: true,
      // eslint-disable-next-line vue/valid-define-props
      validator: isPropertyValid(Track),
    },
    remoteListeningDevice: {
      type: String,
      required: false,
      default: null,
    },
  })
</script>

<template>
  <div>
    <TrackCover :track="track" />
    <span>{{ track.title }}</span>
    <DotSeparator />
    <span v-for="band in track.bands" :key="band">{{ band }}</span>
    <IconLike class="text-black" />
    <Icon :path="mdiPlayOutline" />
    <PlayerRemoteListeningDevice
      v-if="remoteListeningDevice"
      :remote-device-name="remoteListeningDevice"
    />
    <PlayerProgressBar :progress="50" />
  </div>
</template>
