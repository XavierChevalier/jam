import { z } from 'zod'

export const Author = z.strictObject({
  name: z.string(),
  avatar: z.string().url(),
})

export type Author = z.infer<typeof Author>
