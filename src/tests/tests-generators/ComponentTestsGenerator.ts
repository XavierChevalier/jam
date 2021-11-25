import { TestsGeneratorContainer } from '@/tests/tests-generators/TestsGeneratorContainer'
import {
  PropertyTestsGenerator,
  PropOptions,
} from '@/tests/tests-generators/ComponentPropertyTestsGenerator'
import { TestsGenerator } from '@/tests/tests-generators/TestsGenerator'
import { ComponentOptionsBase } from '@vue/runtime-core'

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

export class ComponentTestsGenerator implements TestsGenerator {
  private readonly testsContainer = new TestsGeneratorContainer()
  private propertyTests: PropertyTestsGenerator<unknown>[] = []

  constructor(private readonly component: AnyComponentOptionsBase) {}

  itShouldBeDefined() {
    this.testsContainer.addTest('component should be defined', () =>
      expect(this.component).toBeDefined()
    )

    return this
  }

  property<T = unknown>(propertyName: string) {
    const propertyTestsGenerator = new PropertyTestsGenerator<T>(
      propertyName,
      this.getPropertyDefinition(propertyName)
    )

    this.propertyTests.push(propertyTestsGenerator)

    return propertyTestsGenerator
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

  generateTests() {
    this.testsContainer.generateTests()
    this.propertyTests.forEach((propertyTest) => propertyTest.generateTests())
  }
}
