import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import FeedPostSummaryItem from './FeedPostSummaryItem.vue'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/app/modules/feed/components/FeedPostSummaryItem.stories'
import { Author } from '@/app/modules/feed/models/Author'
import { omit } from 'lodash-es'
import { AvailableFeedPostType } from '@/app/modules/feed/models/FeedPostType'

describe('FeedPostSummaryItem', () => {
  generateStorybookSnapshotTests({ Default })

  const componentTestsGenerator = new ComponentTestsGenerator(
    FeedPostSummaryItem
  )
  componentTestsGenerator.itShouldBeDefined()

  const author = { name: 'Test', avatar: 'https://picsum.photos/50' }
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
    .itShouldSuccessWith('newSingle')
    .itShouldSuccessWith('newAlbum')

  componentTestsGenerator.generateTests()
})
