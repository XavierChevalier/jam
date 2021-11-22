import { z } from 'zod'

export const MdiExtra = z
  .strictObject({
    viewBox: z.optional(z.string()),
    transform: z.optional(z.string()),
    path: z.string(),
  })
  .or(z.string())
export type MdiExtra = z.infer<typeof MdiExtra>

export const mdiSpeechOutline: MdiExtra = {
  viewBox: '0 0 452.000000 452.000000',
  transform: 'translate(0.000000,452.000000) scale(0.100000,-0.100000)',
  path: 'M2006 4129 c-434 -56 -842 -250 -1137 -541 -255 -251 -412 -549 -471 -892 -17 -103 -19 -148 -15 -296 8 -257 47 -414 162 -645 282 -567 876 -943 1572 -995 99 -8 167 -8 225 0 45 5 88 10 95 10 10 0 13 -63 13 -300 l0 -299 188 121 c389 250 652 465 878 719 320 358 509 710 591 1099 24 111 27 148 27 330 1 226 -10 304 -66 480 -206 643 -820 1117 -1568 1210 -99 12 -395 11 -494 -1z m548 -389 c133 -23 212 -45 333 -94 460 -184 789 -567 864 -1006 17 -104 15 -296 -4 -407 -73 -407 -322 -787 -777 -1185 l-135 -118 -5 138 -5 137 -25 -3 c-14 -1 -82 -13 -151 -27 -70 -13 -167 -29 -215 -35 -513 -58 -1060 144 -1371 510 -204 239 -306 502 -307 795 0 138 14 233 55 360 97 307 334 585 643 756 205 114 417 176 691 203 79 8 300 -5 409 -24z',
}