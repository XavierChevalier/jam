import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import {
  Default,
  WithSizeOf6,
} from '@/modules/track/components/TrackCover.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import TrackCover from './TrackCover.vue'
import { TrackOfTrackCover } from '@/modules/track/models/TrackCover'
import { omit } from 'lodash-es'

describe('TrackCover', () => {
  generateStorybookSnapshotTests({ Default, WithSizeOf6 })

  const componentTestsGenerator = new ComponentTestsGenerator(TrackCover)
  componentTestsGenerator.itShouldBeDefined()

  const track = {
    cover: 'https://picsum.photos/50',
    title: 'G.O.A.T.',
    bands: ['Polyphia'],
  }
  componentTestsGenerator
    .property<TrackOfTrackCover>('track')
    .itShouldBeDefined()
    .itShouldBeRequired()
    .itShouldHaveAValidatorFunction()
    .itShouldSuccessWith(track)
    .itShouldFailWith('missing cover', omit(track, 'cover'))
    .itShouldFailWith('missing title', omit(track, 'title'))
    .itShouldFailWith('missing bands', omit(track, 'bands'))

  componentTestsGenerator
    .property<number>('size')
    .itShouldBeDefined()
    .itShouldBeTypeOf(Number)
    .itShouldHaveADefaultValue()

  componentTestsGenerator.generateTests()
})
