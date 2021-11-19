import { formatDuration } from '@/tools/date/FormatDuration'

describe('FormatDuration', () => {
  describe.each`
    description       | durationMs | humanDuration
    ${'with 0'}       | ${0}       | ${'0:00'}
    ${'with 1'}       | ${1}       | ${'0:01'}
    ${'with 2'}       | ${2}       | ${'0:01'}
    ${'with 10'}      | ${10}      | ${'0:01'}
    ${'with 20'}      | ${20}      | ${'0:01'}
    ${'with 100'}     | ${100}     | ${'0:01'}
    ${'with 200'}     | ${200}     | ${'0:01'}
    ${'with 1_000'}   | ${1_000}   | ${'0:01'}
    ${'with 2_000'}   | ${2_000}   | ${'0:02'}
    ${'with 10_000'}  | ${10_000}  | ${'0:10'}
    ${'with 20_000'}  | ${20_000}  | ${'0:20'}
    ${'with 60_000'}  | ${60_000}  | ${'1:00'}
    ${'with 70_000'}  | ${70_000}  | ${'1:10'}
    ${'with 120_000'} | ${120_000} | ${'2:00'}
    ${'with 125_000'} | ${125_000} | ${'2:05'}
    ${'with 125_001'} | ${125_001} | ${'2:06'}
    ${'with 600_000'} | ${600_000} | ${'10:00'}
    ${'with 3.54e6'}  | ${3.54e6}  | ${'59:00'}
    ${'with 3.6e6'}   | ${3.6e6}   | ${'1:00:00'}
  `('$description', ({ durationMs, humanDuration }) => {
    it('should format to a comprehensible format', () => {
      expect(formatDuration(durationMs)).toBe(humanDuration)
    })
  })
})
