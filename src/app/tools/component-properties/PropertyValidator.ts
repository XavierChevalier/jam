import { AnySchema } from 'yup/lib/schema'
import Lazy from 'yup/lib/Lazy'

type SchemaParameter = AnySchema | Lazy<AnySchema>
export const isPropertyValid = (schema: SchemaParameter) => {
  return (input: unknown) => schema.isValidSync(input)
}
