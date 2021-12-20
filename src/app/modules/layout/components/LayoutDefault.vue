<script setup lang="ts">
  import { generateImageUrl } from '@/app/tools/Faker'
  import PlayerDocked from '@/app/modules/player/components/organisms/PlayerDocked.vue'
  import NavigationBar from '@/app/modules/navigation/components/molecules/NavigationBar.vue'

  const track = {
    cover: generateImageUrl(),
    title: 'ANSI.SYS',
    bands: ['MASTER BOOT RECORD'],
    durationMs: 186_000,
  }
</script>

<template>
  <div class="p-2">
    <slot v-bind="$attrs" />
  </div>

  <div class="bottom-0 fixed w-full">
    <PlayerDocked class="p-1 pb-0.5" :track="track" />
    <NavigationBar />
  </div>
</template>
