import { TrackBands, TrackTitle } from '@/modules/track/models/Track'
import { InferType, object, string } from 'yup'

export const TrackCover = string().url().required()
export type TrackCover = InferType<typeof TrackCover>

export const TrackOfTrackCover = object({
  cover: TrackCover,
  title: TrackTitle,
  bands: TrackBands,
})
export type TrackOfTrackCover = InferType<typeof TrackOfTrackCover>
