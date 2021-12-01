// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as matches from 'jest-extended'
import toMatchStructure from '@/tests/extensions/ToMatchStructure'

expect.extend(matches)
expect.extend({ toMatchStructure })
