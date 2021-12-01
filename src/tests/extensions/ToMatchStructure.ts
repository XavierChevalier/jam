import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils'
import { AnyRecord } from '@/types/AnyRecord'
import { diff } from 'jest-diff'
import { isObject } from 'lodash-es'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toMatchStructure(actual: AnyRecord): R
    }
  }
}

type FormatMessageOptions = {
  expected?: string
  received?: string
  difference?: string
}

function formatMessage({
  expected,
  received,
  difference,
}: FormatMessageOptions): string {
  return (
    matcherHint('toMatchStructure', undefined, undefined, {
      comment: 'deep structure equality',
    }) +
    '\n\n' +
    (difference ? `Difference:\n\n${difference}` : '') +
    (expected ? `Expected: ${expected}\n` : '') +
    (received ? `Received: ${received}` : '')
  )
}

function getMessageFunction(
  pass: boolean,
  received: AnyRecord,
  expected: AnyRecord
) {
  if (pass) {
    return () =>
      formatMessage({
        expected: `not ${printExpected(expected)}`,
        received: printReceived(received),
      })
  }

  return () => {
    const diffString = diff(expected, received)
    if (diffString?.includes('- Expect')) {
      return formatMessage({
        difference: diffString,
      })
    }

    return formatMessage({
      expected: printExpected(expected),
      received: printReceived(received),
    })
  }
}

function predicate<Received extends AnyRecord, Expected extends AnyRecord>(
  received: Received,
  expected: Expected
): boolean {
  return Object.keys(received).every((receivedKey) => {
    const receivedElement = received[receivedKey]
    const expectedElement = expected[receivedKey]
    if (isObject(receivedElement) && isObject(expectedElement)) {
      return predicate(receivedElement as Received, expectedElement as Expected)
    }

    return Object.keys(expected).includes(receivedKey)
  })
}

export default function toMatchStructure(
  received: AnyRecord,
  expected: AnyRecord
) {
  const pass = predicate(received, expected)

  return {
    pass,
    actual: received,
    message: getMessageFunction(pass, received, expected),
  }
}
