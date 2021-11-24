import { Prop } from 'vue'
import { TestsGeneratorContainer } from '@/tests/tests-generators/TestsGeneratorContainer'
import { TestsGenerator } from '@/tests/tests-generators/TestsGenerator'

export class PropertyTestsGenerator<T> implements TestsGenerator {
  private readonly testsContainer = new TestsGeneratorContainer()

  constructor(
    private readonly propertyName: string,
    private readonly propertyDefinition: Prop<unknown>
  ) {}

  itShouldBeDefined() {
    this.testsContainer.addTest('should be defined', () => {
      expect(this.propertyDefinition).toBeDefined()
      expect(typeof this.propertyDefinition).toBe('object')
    })

    return this
  }

  itShouldHaveAValidatorFunction() {
    this.testsContainer.addTest('should have a validator', () => {
      const validator = this.getPropertyValidator()
      expect(validator).toBeDefined()
      expect(typeof validator).toBe('function')
    })

    return this
  }

  itShouldSuccessWith(propertyValue: T) {
    this.testsContainer.addTest(
      `GIVEN ANY valid ${this.propertyName} WHEN we validate it THEN it SHOULD ALWAYS be valid`,
      () => {
        const validator = this.getPropertyValidator()
        expect(validator(propertyValue)).toBe(true)
      }
    )

    return this
  }

  itShouldFailWith(description: string, propertyValue: unknown) {
    this.testsContainer.addTest(
      `GIVEN ANY ${this.propertyName} with ${description} WHEN we validate it THEN it SHOULD ALWAYS be invalid`,
      () => {
        const validator = this.getPropertyValidator()
        expect(validator(propertyValue)).toBe(false)
      }
    )

    return this
  }

  private getPropertyValidator() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.propertyDefinition?.validator
  }

  generateTests() {
    this.testsContainer.generateTests(`property #${this.propertyName}`)
  }
}
