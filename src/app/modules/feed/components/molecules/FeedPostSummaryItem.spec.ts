import FeedPostSummaryItem from './FeedPostSummaryItem.vue'
import * as Stories from '@/app/modules/feed/components/molecules/FeedPostSummaryItem.stories'
import { Author } from '@/app/modules/feed/models/Author'
import { omit } from 'lodash-es'
import { AvailableFeedPostType } from '@/app/modules/feed/models/FeedPostType'
import { changeLocale } from '@/plugins/VueI18n'
import { shallowMountWithPlugins } from '@/tests/tools/MountWithPlugins'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('FeedPostSummaryItem', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<Author>('author', (property) => {
      const author = { name: 'John Gomm', avatar: 'https://picsum.photos/50' }
      property
        .itShouldBeDefined()
        .itShouldBeRequired()
        .itShouldHaveAValidatorFunction()
        .itShouldFailWith('missing name', omit(author, ['name']))
        .itShouldFailWith('a null avatar', { name: 'Test', avatar: null })
        .itShouldFailWith('a null name and avatar', {
          name: null,
          avatar: null,
        })
    })
    .property<keyof typeof AvailableFeedPostType>('postType', (property) => {
      property
        .itShouldBeDefined()
        .itShouldBeTypeOf(String)
        .itShouldBeRequired()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith('userShareSong')
        .itShouldSuccessWith('userShareAlbum')
        .itShouldSuccessWith('userSharePlaylist')
        .itShouldSuccessWith('artistReleaseSong')
        .itShouldSuccessWith('artistReleaseAlbum')
    })
    .property<Date>('publicationDate', (property) => {
      property.itShouldBeDefined().itShouldBeTypeOf(Date).itShouldBeRequired()
    })

  it.each`
    postType                                    | lang    | expectedDisplayText
    ${AvailableFeedPostType.userShareSong}      | ${'fr'} | ${'John Gomm a partagé un morceau'}
    ${AvailableFeedPostType.userShareSong}      | ${'en'} | ${'John Gomm shared a song'}
    ${AvailableFeedPostType.userShareAlbum}     | ${'fr'} | ${'John Gomm a partagé un album'}
    ${AvailableFeedPostType.userShareAlbum}     | ${'en'} | ${'John Gomm shared an album'}
    ${AvailableFeedPostType.userSharePlaylist}  | ${'fr'} | ${'John Gomm a partagé une playlist'}
    ${AvailableFeedPostType.userSharePlaylist}  | ${'en'} | ${'John Gomm shared a playlist'}
    ${AvailableFeedPostType.artistReleaseSong}  | ${'fr'} | ${'John Gomm a sortie un nouveau morceau'}
    ${AvailableFeedPostType.artistReleaseSong}  | ${'en'} | ${'John Gomm released a new song'}
    ${AvailableFeedPostType.artistReleaseAlbum} | ${'fr'} | ${'John Gomm a sortie un nouvel album'}
    ${AvailableFeedPostType.artistReleaseAlbum} | ${'en'} | ${'John Gomm released a new album'}
  `(
    'should display "$expectedDisplayText" on "$postType" postType',
    ({ postType, lang, expectedDisplayText }) => {
      changeLocale(lang)
      const wrapper = shallowMountWithPlugins(FeedPostSummaryItem, {
        props: {
          author: { name: 'John Gomm', avatar: 'https://picsum.photos/50' },
          publicationDate: new Date(),
          postType,
        },
      })

      expect(wrapper.text()).toContain(expectedDisplayText)
    }
  )
})
