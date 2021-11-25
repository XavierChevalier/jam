import { PropType } from 'vue'
import { TestsGeneratorContainer } from '@/tests/tests-generators/TestsGeneratorContainer'
import { TestsGenerator } from '@/tests/tests-generators/TestsGenerator'

// From "node_modules/@vue/runtime-core/dist/runtime-core.d.ts"
type ValidatorFunction<T = unknown> = (value: T) => boolean
export type PropOptions<T = unknown> = Readonly<{
  type?: PropType<T>
  required?: boolean
  default?: T | null | undefined | (() => T | null | undefined)
  validator?: ValidatorFunction<T>
}>

export class PropertyTestsGenerator<T> implements TestsGenerator {
  private readonly testsContainer = new TestsGeneratorContainer()

  constructor(
    private readonly propertyName: string,
    private readonly propertyDefinition: PropOptions
  ) {}

  itShouldBeDefined() {
    this.testsContainer.addTest('should be defined', () => {
      expect(this.propertyDefinition).toBeDefined()
      expect(typeof this.propertyDefinition).toBe('object')
    })

    return this
  }

  itShouldBeTypeOf<T>(type: PropType<T>) {
    this.testsContainer.addTest('should be type of', () => {
      expect(this.propertyDefinition.type).toBe(type)
    })

    return this
  }

  itShouldBeRequired() {
    this.testsContainer.addTest('should be required', () => {
      expect(this.propertyDefinition.required).toBe(true)
    })

    return this
  }

  itShouldNotBeRequired() {
    this.testsContainer.addTest('should not be required', () => {
      expect(this.propertyDefinition.required).toBe(false)
    })

    return this
  }

  itShouldHaveADefaultValue() {
    this.testsContainer.addTest('should have a default value', () => {
      const defaultValue =
        typeof this.propertyDefinition.default === 'function'
          ? typeof this.propertyDefinition.default()
          : typeof this.propertyDefinition.default
      expect(['string', 'boolean', 'number', 'object']).toContain(defaultValue)
    })

    return this
  }

  itShouldNotHaveADefaultValue() {
    this.testsContainer.addTest('should not have a default value', () => {
      expect(this.propertyDefinition.default).toBeUndefined()
    })

    return this
  }

  itShouldHaveAValidatorFunction() {
    this.testsContainer.addTest('should have a validator', () => {
      const validator = this.getPropertyValidator()
      expect(typeof validator).toBe('function')
    })

    return this
  }

  itShouldSuccessWith(propertyValue: T) {
    this.testsContainer.addTest(
      `GIVEN ANY valid ${this.propertyName} WHEN we validate it THEN it SHOULD ALWAYS be valid`,
      () => {
        const validator = this.getPropertyValidator() as ValidatorFunction
        expect(validator(propertyValue)).toBe(true)
      }
    )

    return this
  }

  itShouldFailWith(description: string, propertyValue: unknown) {
    this.testsContainer.addTest(
      `GIVEN ANY ${this.propertyName} with ${description} WHEN we validate it THEN it SHOULD ALWAYS be invalid`,
      () => {
        const validator = this.getPropertyValidator() as ValidatorFunction
        expect(validator(propertyValue)).toBe(false)
      }
    )

    return this
  }

  private getPropertyValidator() {
    return this.propertyDefinition.validator
  }

  generateTests() {
    this.testsContainer.generateTests(`property #${this.propertyName}`)
  }
}
