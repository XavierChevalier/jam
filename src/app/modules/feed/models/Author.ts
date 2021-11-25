import { InferType, object, string } from 'yup'

export const Author = object({
  name: string().required(),
  avatar: string().required().url(),
})

export type Author = InferType<typeof Author>
