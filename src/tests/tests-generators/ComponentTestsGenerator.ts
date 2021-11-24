import { DefineComponent } from 'vue'
import { TestsGeneratorContainer } from '@/tests/tests-generators/TestsGeneratorContainer'
import { PropertyTestsGenerator } from '@/tests/tests-generators/ComponentPropertyTestsGenerator'
import { TestsGenerator } from '@/tests/tests-generators/TestsGenerator'

export class ComponentTestsGenerator implements TestsGenerator {
  private readonly testsContainer = new TestsGeneratorContainer()
  private propertyTests: PropertyTestsGenerator<unknown>[] = []

  constructor(private readonly component: DefineComponent) {}

  itShouldBeDefined() {
    this.testsContainer.addTest('component should be defined', () =>
      expect(this.component).toBeDefined()
    )

    return this
  }

  property<T = unknown>(propertyName: string) {
    const propertyTestsGenerator = new PropertyTestsGenerator<T>(
      propertyName,
      this.component?.props?.[propertyName]
    )

    this.propertyTests.push(propertyTestsGenerator)

    return propertyTestsGenerator
  }

  generateTests() {
    this.testsContainer.generateTests()
    this.propertyTests.forEach((propertyTest) => propertyTest.generateTests())
  }
}
