import { PropType } from 'vue'

// From "node_modules/@vue/runtime-core/dist/runtime-core.d.ts"
type ValidatorFunction<T = unknown> = (value: T) => boolean
export type PropOptions<T = unknown> = Readonly<{
  type?: PropType<T>
  required?: boolean
  default?: T | null | undefined | (() => T | null | undefined)
  validator?: ValidatorFunction<T>
}>
type PropertyTypes =
  | typeof String
  | typeof Boolean
  | typeof Number
  | typeof Date
  | typeof Object
  | typeof Symbol

export class PropertyTestsGenerator<T> {
  constructor(
    private readonly propertyName: string,
    private readonly propertyDefinition: PropOptions
  ) {}

  itShouldBeDefined() {
    it('should be defined', () => {
      expect(this.propertyDefinition).toBeDefined()
      expect(typeof this.propertyDefinition).toBe('object')
    })

    return this
  }

  itShouldBeTypeOf<T extends PropertyTypes>(type: T) {
    it(`should be type of ${type.name}`, () => {
      expect(this.propertyDefinition.type).toBe(type)
    })

    return this
  }

  itShouldBeRequired() {
    it('should be required', () => {
      expect(this.propertyDefinition.required).toBe(true)
    })

    return this
  }

  itShouldNotBeRequired() {
    it('should not be required', () => {
      expect(this.propertyDefinition.required).toBe(false)
    })

    return this
  }

  itShouldHaveADefaultValue() {
    it('should have a default value', () => {
      const defaultValue =
        typeof this.propertyDefinition.default === 'function'
          ? typeof this.propertyDefinition.default()
          : typeof this.propertyDefinition.default
      expect(['string', 'boolean', 'number', 'object']).toContain(defaultValue)
    })

    return this
  }

  itShouldNotHaveADefaultValue() {
    it('should not have a default value', () => {
      expect(this.propertyDefinition.default).toBeUndefined()
    })

    return this
  }

  itShouldHaveAValidatorFunction() {
    it('should have a validator', () => {
      const validator = this.getPropertyValidator()
      expect(typeof validator).toBe('function')
    })

    return this
  }

  itShouldSuccessWith(propertyValue: T): this
  itShouldSuccessWith(description: string, propertyValue: T): this
  itShouldSuccessWith(...args: (string | T)[]) {
    if (args.length === 2) {
      const [description, propertyValue] = args

      return this.itShouldSuccessWithValue(
        description as string,
        propertyValue as T
      )
    }

    const [propertyValue] = args as T[]

    return this.itShouldSuccessWithValue(
      JSON.stringify(propertyValue),
      propertyValue
    )
  }

  itShouldFailWith(propertyValue: unknown): this
  itShouldFailWith(description: string, propertyValue: unknown): this
  itShouldFailWith(...args: (string | unknown)[]) {
    if (args.length === 2) {
      const [description, propertyValue] = args

      return this.itShouldFailWithValue(description as string, propertyValue)
    }

    const [propertyValue] = args

    return this.itShouldFailWithValue(
      JSON.stringify(propertyValue),
      propertyValue
    )
  }

  private itShouldSuccessWithValue(description: string, propertyValue: T) {
    it(`should success with ${description}`, () => {
      const validator = this.getPropertyValidator() as ValidatorFunction
      expect(validator(propertyValue)).toBe(true)
    })

    return this
  }

  private itShouldFailWithValue(description: string, propertyValue: unknown) {
    it(`should fail with ${description}`, () => {
      const validator = this.getPropertyValidator() as ValidatorFunction
      expect(validator(propertyValue)).toBe(false)
    })

    return this
  }

  private getPropertyValidator() {
    return this.propertyDefinition.validator
  }
}
