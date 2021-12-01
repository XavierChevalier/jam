import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import FeedPostSummaryItem from './FeedPostSummaryItem.vue'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/app/modules/feed/components/FeedPostSummaryItem.stories'
import { Author } from '@/app/modules/feed/models/Author'
import { omit } from 'lodash-es'
import { AvailableFeedPostType } from '@/app/modules/feed/models/FeedPostType'
import { shallowMount } from '@vue/test-utils'
import { changeLocale, i18n } from '@/plugins/VueI18n'

describe('FeedPostSummaryItem', () => {
  generateStorybookSnapshotTests({ Default })

  const componentTestsGenerator = new ComponentTestsGenerator(
    FeedPostSummaryItem
  )
  componentTestsGenerator.itShouldBeDefined()

  const author = { name: 'John Gomm', avatar: 'https://picsum.photos/50' }
  componentTestsGenerator
    .property<Author>('author')
    .itShouldBeDefined()
    .itShouldBeRequired()
    .itShouldHaveAValidatorFunction()
    .itShouldFailWith('missing name', omit(author, ['name']))
    .itShouldFailWith('a null avatar', { name: 'Test', avatar: null })
    .itShouldFailWith('a null name and avatar', { name: null, avatar: null })

  componentTestsGenerator
    .property<keyof typeof AvailableFeedPostType>('postType')
    .itShouldBeDefined()
    .itShouldBeTypeOf(String)
    .itShouldBeRequired()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith('userShareSong')
    .itShouldSuccessWith('userShareAlbum')
    .itShouldSuccessWith('userSharePlaylist')
    .itShouldSuccessWith('artistReleaseSong')
    .itShouldSuccessWith('artistReleaseAlbum')

  componentTestsGenerator.generateTests()

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
      const wrapper = shallowMount(FeedPostSummaryItem, {
        global: { plugins: [i18n] },
        props: {
          author,
          postType,
        },
      })

      expect(wrapper.text()).toContain(expectedDisplayText)
    }
  )
})
