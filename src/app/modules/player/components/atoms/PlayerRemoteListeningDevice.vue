<script setup lang="ts">
  import Icon from '@/app/components/AppIcon.vue'
  import { mdiMusicVideo } from '@/assets/images/icons/MdiExtra'

  defineProps({
    remoteDeviceName: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <span class="text-primary">
    <Icon size="sm" :path="mdiMusicVideo" />
    <span class="ml-1 align-middle">{{ remoteDeviceName }}</span>
  </span>
</template>
