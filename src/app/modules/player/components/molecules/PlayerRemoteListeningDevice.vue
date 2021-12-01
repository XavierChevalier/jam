<script setup lang="ts">
  import Icon from '@/app/components/atoms/AppIcon.vue'
  import { mdiMusicVideoOutline } from '@/assets/images/icons/MdiExtra'

  defineProps({
    remoteDeviceName: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <span class="text-primary">
    <Icon size="sm" :path="mdiMusicVideoOutline" />
    <span class="ml-1 align-middle">{{ remoteDeviceName }}</span>
  </span>
</template>
