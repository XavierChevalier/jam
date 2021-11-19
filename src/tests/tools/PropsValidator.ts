import { DefineComponent, Prop } from 'vue'
import fc, { Arbitrary } from 'fast-check'

type Validator = (value: unknown) => boolean
type States = { valid: Arbitrary<unknown>; invalid: Arbitrary<unknown> }

function generatePropertyTests(property: Prop<unknown>, validator: Validator) {
  it('should be defined', () => {
    expect(property).toBeDefined()
    expect(typeof property).toBe('object')
  })

  it('should have a validator', () => {
    expect(validator).toBeDefined()
    expect(typeof validator).toBe('function')
  })
}

/**
 * Shortcut to retrieve the validator function of a component property.
 * Also add unit tests to check the existence of the property and the validator.
 */
function getPropertyValidator(
  component: DefineComponent,
  propertyName: string
) {
  const property = component.props[propertyName]
  const validator = property?.validator

  generatePropertyTests(property, validator)

  return validator
}

function generatePropertyValidationTest(
  propertyName: string,
  component: DefineComponent,
  states: States
) {
  describe(`property #${propertyName}`, () => {
    const validator = getPropertyValidator(component, propertyName)

    test(`GIVEN ANY valid ${propertyName} WHEN we validate it THEN it SHOULD ALWAYS be valid`, () => {
      fc.assert(fc.property(states.valid, (cover) => validator(cover)))
    })

    test(`GIVEN ANY invalid ${propertyName} WHEN we validate it THEN it SHOULD ALWAYS be invalid`, () => {
      fc.assert(fc.property(states.invalid, (cover) => !validator(cover)))
    })
  })
}

export const generatePropertyValidationTests = (
  component: DefineComponent
) => ({
  forProperty: (propertyName: string) => ({
    states: (states: States) => {
      generatePropertyValidationTest(propertyName, component, states)

      return generatePropertyValidationTests(component)
    },
  }),
})
