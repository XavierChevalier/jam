<script setup lang="ts">
  import AppIcon from '@/app/components/atoms/AppIcon.vue'
  import { mdiHomeOutline } from '@mdi/js'
  import {
    mdiBookShelfOutline,
    mdiCommunicationOutline,
    mdiNewsOutline,
    mdiSearchOutline,
  } from '@/assets/images/icons/MdiExtra'

  const icons = {
    mdiHomeOutline,
    mdiNewsOutline,
    mdiSearchOutline,
    mdiCommunicationOutline,
    mdiBookShelfOutline,
  }
</script>

<template>
  <div class="flex justify-between items-center px-5 h-14 bg-white">
    <div
      v-for="(icon, iconName) in icons"
      :key="iconName"
      class="
        flex
        justify-center
        items-center
        box-content
        h-full
        w-56
        text-neutral
      "
    >
      <AppIcon :path="icon" size="lg" />
    </div>
  </div>
</template>
