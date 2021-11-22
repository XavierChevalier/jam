import { z } from 'zod'
import { TrackBands, TrackTitle } from '@/modules/track/models/Track'

export const TrackCover = z.string().url()
export type TrackCover = z.infer<typeof TrackCover>

export const TrackOfTrackCover = z.strictObject({
  cover: TrackCover,
  title: TrackTitle,
  bands: TrackBands,
})
export type TrackOfTrackCover = z.infer<typeof TrackOfTrackCover>
