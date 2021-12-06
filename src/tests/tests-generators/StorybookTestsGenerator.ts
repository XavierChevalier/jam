import {
  PropertyTestsGenerator,
  PropOptions,
} from '@/tests/tests-generators/ComponentPropertyTestsGenerator'
import { ComponentOptionsBase } from '@vue/runtime-core'
import { omit } from 'lodash-es'
import { Meta, Story } from '@storybook/vue3'
import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { ComponentOptionsWithoutProps } from 'vue'

/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyComponentOptionsBase = ComponentOptionsBase<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>

/* eslint-enable @typescript-eslint/no-explicit-any */
type Stories = Record<string, Story>
export type StoriesExports = { readonly default: Meta } & Stories

export class StorybookTestsGenerator {
  private constructor(
    private readonly component: AnyComponentOptionsBase,
    private readonly stories: Stories = {}
  ) {}

  static fromComponent(component: AnyComponentOptionsBase) {
    return new StorybookTestsGenerator(component)
  }

  static fromStoriesExports(storiesExports: unknown) {
    const stories = omit(storiesExports as StoriesExports, ['default'])
    const component = (storiesExports as StoriesExports).default
      .component as AnyComponentOptionsBase

    return new StorybookTestsGenerator(component, stories)
  }

  snapshotEachStories() {
    describe('stories snapshots', () => {
      generateStorybookSnapshotTests(this.stories)
    })

    return this
  }

  property<T = unknown>(
    propertyName: string,
    fn: (property: PropertyTestsGenerator<T>) => void
  ) {
    const propertyTestsGenerator = new PropertyTestsGenerator<T>(
      propertyName,
      this.getPropertyDefinition(propertyName)
    )

    describe(`property #${propertyName}`, () => {
      fn(propertyTestsGenerator)
    })

    return this
  }

  getComponent() {
    return this.component as ComponentOptionsWithoutProps
  }

  private getPropertyDefinition(propertyName: string) {
    const getFromComponentProperties = () =>
      this.component?.props?.[propertyName]

    const getFromComponentMixins = () =>
      this.component?.mixins
        ?.map((mixin: AnyComponentOptionsBase) => mixin?.props?.[propertyName])
        .find((property: PropOptions) => property !== undefined)

    return getFromComponentProperties() || getFromComponentMixins()
  }
}
