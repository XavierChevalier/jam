<script setup lang="ts">
  import { generateImageUrl } from '@/app/tools/Faker'
  import FeedPostShort from '@/app/modules/feed/components/organisms/FeedPostShort.vue'
  import FeedPostShortItem from '@/app/modules/feed/components/molecules/FeedPostShortItem.vue'
  import HomeFrequentlyListenedShortcuts from '@/app/modules/home/components/organisms/HomeFrequentlyListenedShortcuts.vue'
  import HomeFrequentlyListenedShortcut from '@/app/modules/home/components/molecules/HomeFrequentlyListenedShortcut.vue'
  import PlaylistShortcut from '@/app/modules/playlist/components/organisms/PlaylistShortcut.vue'
  import PlaylistShortcutItem from '@/app/modules/playlist/components/molecules/PlaylistShortcutItem.vue'
</script>

<template>
  <div class="flex flex-col gap-5">
    <FeedPostShort>
      <FeedPostShortItem
        :author="{
          name: 'TheBaronless',
          avatar: generateImageUrl(40),
        }"
        post-type="userShareSong"
        :publication-date="new Date()"
      />
      <FeedPostShortItem
        :author="{
          name: 'TheBaronless',
          avatar: generateImageUrl(40),
        }"
        post-type="userShareAlbum"
        :publication-date="new Date()"
      />
      <FeedPostShortItem
        :author="{
          name: 'TheBaronless',
          avatar: generateImageUrl(40),
        }"
        post-type="userSharePlaylist"
        :publication-date="new Date()"
      />
    </FeedPostShort>

    <HomeFrequentlyListenedShortcuts>
      <HomeFrequentlyListenedShortcut :image-url="generateImageUrl()">
        Transfer
      </HomeFrequentlyListenedShortcut>
      <HomeFrequentlyListenedShortcut :image-url="generateImageUrl()">
        Saas Club
      </HomeFrequentlyListenedShortcut>
      <HomeFrequentlyListenedShortcut :image-url="generateImageUrl()">
        Radar des sorties
      </HomeFrequentlyListenedShortcut>
      <HomeFrequentlyListenedShortcut :image-url="generateImageUrl()">
        Titres likés
      </HomeFrequentlyListenedShortcut>
    </HomeFrequentlyListenedShortcuts>

    <PlaylistShortcut title="Vos mix préférés">
      <PlaylistShortcutItem
        :cover="generateImageUrl(150)"
        title="Polyphia"
        description="New levels new devils"
      />
      <PlaylistShortcutItem
        :cover="generateImageUrl(150)"
        title="Polyphia"
        description="New levels new devils"
      />
      <PlaylistShortcutItem
        :cover="generateImageUrl(150)"
        title="Polyphia"
        description="New levels new devils"
      />
      <PlaylistShortcutItem
        :cover="generateImageUrl(150)"
        title="Polyphia"
        description="New levels new devils"
      />
    </PlaylistShortcut>

    <PlaylistShortcut title="Écoutés récemment">
      <PlaylistShortcutItem
        :cover="generateImageUrl(151)"
        title="Polyphia"
        description="New levels new devils"
      />
      <PlaylistShortcutItem
        :cover="generateImageUrl(151)"
        title="Polyphia"
        description="New levels new devils"
      />
      <PlaylistShortcutItem
        :cover="generateImageUrl(151)"
        title="Polyphia"
        description="New levels new devils"
      />
      <PlaylistShortcutItem
        :cover="generateImageUrl(151)"
        title="Polyphia"
        description="New levels new devils"
      />
    </PlaylistShortcut>
  </div>
</template>
