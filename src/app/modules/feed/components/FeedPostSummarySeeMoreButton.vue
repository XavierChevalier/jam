<script setup lang="ts">
  import { mdiNewsOutline } from '@/assets/images/icons/MdiExtra'
  import { mdiChevronDown } from '@mdi/js'
  import { useI18n } from 'vue-i18n'
  import AppIcon from '@/app/components/AppIcon.vue'

  const { t } = useI18n()
</script>

<template>
  <div class="text-neutral text-center">
    <AppIcon size="sm" :path="mdiNewsOutline" />
    <span class="pl-2 align-middle">{{ t('seeMore') }}</span>
    <div>
      <AppIcon size="sm" :path="mdiChevronDown" />
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  seeMore: 'See all news'
fr:
  seeMore: 'Voir toutes les news'
</i18n>
