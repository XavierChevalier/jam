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
    <div
      class="
        text-xs
        flex
        px-5
        py-3
        text-sm
        rounded
        shadow-lg
        bg-primary-light
        items-center
      "
    >
      <TrackCover class="mr-3" :size="3" :track="track" />

      <div class="flex flex-col">
        <div>
          <span class="font-bold">{{ track.title }}</span>
          <DotSeparator />
          <span v-for="band in track.bands" :key="band">{{ band }}</span>
        </div>

        <PlayerRemoteListeningDevice
          v-if="remoteListeningDevice"
          :remote-device-name="remoteListeningDevice"
        />
      </div>

      <div class="flex ml-auto">
        <IconLike class="mr-3 text-black" />
        <Icon :path="mdiPlayOutline" />
      </div>
    </div>

    <PlayerProgressBar class="mx-5 translate-y-[-50%]" :progress="50" />
  </div>
</template>
