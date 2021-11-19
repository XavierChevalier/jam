import { DefineComponent } from 'vue'

/**
 * Shortcut to retrieve the validator function of a component property.
 * Also add unit tests to check the existence of the property and the validator.
 */
export function getPropertyValidator(
  component: DefineComponent,
  propertyName: string
) {
  const property = component.props[propertyName]
  const validator = property?.validator

  describe(`property ${propertyName}`, () => {
    it('should be defined', () => {
      expect(property).toBeDefined()
      expect(typeof property).toBe('object')
    })

    it('should have a validator', () => {
      expect(validator).toBeDefined()
      expect(typeof validator).toBe('function')
    })
  })

  return validator
}
