import * as Stories from '@/app/modules/feed/components/molecules/FeedTrack.stories'
import { Track } from '@/app/modules/track/models/Track'
import { omit } from 'lodash-es'
import { StorybookTestsGenerator } from '@/tests/tests-generators/StorybookTestsGenerator'

describe('FeedTrack', () => {
  StorybookTestsGenerator.fromStoriesExports(Stories)
    .snapshotEachStories()
    .property<Track>('track', (property) => {
      const track = {
        cover: 'https://picsum.photos/50',
        title: 'G.O.A.T.',
        bands: ['Polyphia'],
        durationMs: 125_000,
      }
      property
        .itShouldBeDefined()
        .itShouldHaveAValidatorFunction()
        .itShouldSuccessWith(track)
        .itShouldFailWith('missing cover', omit(track, ['cover']))
        .itShouldFailWith('missing title', omit(track, ['title']))
        .itShouldFailWith('missing bands', omit(track, ['bands']))
        .itShouldFailWith('missing durationMs', omit(track, ['durationMs']))
    })
})
