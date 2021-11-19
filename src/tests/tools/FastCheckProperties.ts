import fc from 'fast-check'

export const fcNotString = fc.oneof(
  fc.integer(),
  fc.date(),
  fc.boolean(),
  fc.falsy().filter((value) => value !== '')
)
export const fcNotUrl = fc.oneof(
  fc.integer(),
  fc.date(),
  fc.boolean(),
  fc.falsy(),
  fc.string()
)
export const fcPositiveNumber = fc.integer({ min: 0 })
export const fcNotPositiveNumber = fc.oneof(
  fc.integer({ max: -1 }),
  fc.date(),
  fc.boolean(),
  fc.falsy().filter((value) => value !== 0),
  fc.string()
)