import { TrackCover } from '@/app/modules/track/models/TrackCover'
import { array, InferType, number, object, string } from 'yup'

export const TrackTitle = string().required()
export const TrackBands = array(string().required()).required().min(1)

export const Track = object({
  cover: TrackCover,
  title: TrackTitle,
  bands: TrackBands,
  durationMs: number().positive().required(),
})
export type Track = InferType<typeof Track>
