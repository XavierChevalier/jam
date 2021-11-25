import FeedTrack from './FeedTrack.vue'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/app/modules/feed/components/FeedTrack.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import { Track } from '@/app/modules/track/models/Track'
import { omit } from 'lodash-es'

describe('FeedTrack', () => {
  generateStorybookSnapshotTests({ Default })

  const componentTests = new ComponentTestsGenerator(FeedTrack)
  componentTests.itShouldBeDefined()

  const track = {
    cover: 'https://picsum.photos/50',
    title: 'G.O.A.T.',
    bands: ['Polyphia'],
    durationMs: 125_000,
  }
  componentTests
    .property<Track>('track')
    .itShouldBeDefined()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(track)
    .itShouldFailWith('missing cover', omit(track, ['cover']))
    .itShouldFailWith('missing title', omit(track, ['title']))
    .itShouldFailWith('missing bands', omit(track, ['bands']))
    .itShouldFailWith('missing durationMs', omit(track, ['durationMs']))

  componentTests.generateTests()
})
