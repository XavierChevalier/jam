import * as Stories from '@/app/modules/track/components/atoms/TrackCover.stories'
import { TrackOfTrackCover } from '@/app/modules/track/models/TrackCover'
import { omit } from 'lodash-es'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'
import { generateImageUrl } from '@/app/tools/Faker'

describe('TrackCover', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<TrackOfTrackCover>('track', (property) => {
      const track = {
        cover: generateImageUrl(),
        title: 'G.O.A.T.',
        bands: ['Polyphia'],
      }
      property
        .itShouldBeDefined()
        .itShouldBeRequired()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith(track)
        .itShouldFailWith('missing cover', omit(track, 'cover'))
        .itShouldFailWith('missing title', omit(track, 'title'))
        .itShouldFailWith('missing bands', omit(track, 'bands'))
    })
    .property<string>('size', (property) => {
      property
        .itShouldBeDefined()
        .itShouldBeTypeOf(String)
        .itShouldHaveADefaultValue()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith('sm')
        .itShouldSuccessWith('base')
        .itShouldFailWith('unknown size type', 'unknown')
    })
})
