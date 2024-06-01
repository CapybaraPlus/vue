import { PropType } from 'vue'
import { hasKey } from '../object'

/**
 * define a prop type
   @example: definePropType<string>(String)
   @example: definePropType<string | number>([String, Number])
   @example: definePropType<Person>(Object)
 */
export const definePropType = <Type>(type: any): PropType<Type> => type

type Prop<
  Type,
  Values extends Array<any>,
  Required extends boolean,
  Default
> = {
  type: PropType<Type> | null | undefined
  values?: Values
  validator?: (val: any) => boolean
  required?: Required
  default?: Default
}

// build a prop
export const buildProp = <
  Type,
  Values extends Array<any>,
  Required extends boolean = false,
  Default = undefined
>(
  prop: Prop<Type, Values, Required, Default>
) => {
  const { values, validator, required, default: _default, type } = prop

  // generate validator function
  const _validator =
    values || validator
      ? (val: unknown) => {
          let isVailded = false // whether the validation is passed
          const allowValues: unknown[] = [] // allowed values array
          if (values) {
            allowValues.push(...values)
            // check whether prop has the key of default
            if (hasKey(prop, 'default')) {
              if (!allowValues.includes(_default)) {
                console.warn(
                  `Invalid prop: validation failed! The values are ${allowValues.join(
                    ', '
                  )}, but you use the default value: ${_default}`
                )
              }
            }
            isVailded ||= allowValues.includes(val)
          }
          if (validator) {
            isVailded ||= validator(val)
          }
          return isVailded
        }
      : undefined
  const _prop: any = {
    type,
    required: !!required,
    validator: _validator,
  }
  if (hasKey(prop, 'default')) {
    _prop.default = _default
  }

  return _prop
}

console.log(
  buildProp({
    type: String,
    values: ['a', 1, 2],
    default: 'a',
    validator: (val: any) => val === 'b',
  }).validator('b')
)
