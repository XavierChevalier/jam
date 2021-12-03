import * as Stories from '@/app/modules/feed/components/organisms/FeedPost.stories'
import { Author } from '@/app/modules/feed/models/Author'
import { omit } from 'lodash-es'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import { generateImageUrl } from '@/app/tools/Faker'

describe('FeedPost', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories).property<Author>(
    'author',
    (property) => {
      const author = { name: 'Test', avatar: generateImageUrl() }
      property
        .itShouldBeDefined()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith(author)
        .itShouldFailWith('missing name', omit(author, ['name']))
        .itShouldFailWith('a null avatar', { name: 'Test', avatar: null })
        .itShouldFailWith('a null name and avatar', {
          name: null,
          avatar: null,
        })
    }
  )
})
