import FeedPost from './FeedPost.vue'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default, WithTrack } from '@/modules/feed/components/FeedPost.stories'
import { Author } from '@/modules/feed/models/Author'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import { omit } from 'lodash-es'

describe('FeedPost', () => {
  generateStorybookSnapshotTests({ Default, WithTrack })

  const componentTests = new ComponentTestsGenerator(FeedPost)
  componentTests.itShouldBeDefined()

  const author = { name: 'Test', avatar: 'https://picsum.photos/50' }
  componentTests
    .property<Author>('author')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(author)
    .itShouldFailWith('missing name', omit(author, ['name']))
    .itShouldFailWith('a null avatar', { name: 'Test', avatar: null })
    .itShouldFailWith('a null name and avatar', { name: null, avatar: null })

  componentTests.generateTests()
})
