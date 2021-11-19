import fc from 'fast-check'

export const fcNotString = fc.oneof(
  fc.integer(),
  fc.date(),
  fc.falsy(),
  fc.constant(null),
  fc.string()
)
export const fcNotUrl = fc.oneof(
  fc.integer(),
  fc.date(),
  fc.falsy(),
  fc.constant(null),
  fc.string()
)
