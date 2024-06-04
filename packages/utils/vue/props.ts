import { PropType } from 'vue'
import { hasKey, isObject } from '../object'

/**
 * @description define a prop type
   @example: definePropType<string>(String)
   @example: definePropType<string | number>([String, Number])
   @example: definePropType<Person>(Object)
 */
export const definePropType = <Type>(type: any): PropType<Type> => type

// vue prop native type
type NativeType<T> = PropType<T> | null | undefined

// prop options
type PropOptions<
  Type,
  Values extends Array<any>,
  Required extends boolean,
  Default
> = {
  type: NativeType<Type>
  values?: Values
  validator?: (val: any) => boolean
  required?: Required
  default?: Default
}

/**
 * build prop options
 * @param @requires type: prop type
 * @param values: allowed values
 * @param validator: custom validator
 * @param required: whether the prop is required
 * @param default: default value
 */
export const buildPropOptions = <
  Type,
  Values extends Array<any>,
  Required extends boolean = false,
  Default = undefined
>(
  options: PropOptions<Type, Values, Required, Default>
) => {
  if (options == null || !isObject(options)) {
    return options
  }

  const { values, validator, required, default: _default, type } = options

  // generate validator function
  const _validator =
    values || validator
      ? (val: unknown) => {
          let isVailded = false // whether the validation is passed
          const allowValues: unknown[] = [] // allowed values array
          if (values) {
            allowValues.push(...values)
            // check whether prop has the key of default
            if (hasKey(options, 'default')) {
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
  const _options: any = {
    type,
    required: !!required,
    validator: _validator,
  }
  if (hasKey(options, 'default')) {
    _options.default = _default
  }

  return _options
}

/**
 * build props
 * @example: buildProps({
 *   type: {
 *     type: String,
 *     values: ['primary', 'success', 'warning', 'danger'],
 *     default: 'primary',
 *   },
 *   size: {
 *     type: String,
 *     default: 'medium',
 *   },
 * })
 */
export const buildProps = (
  props: Record<string, PropOptions<any, any, any, any> | NativeType<any>>
) => {
  const _props: Record<string, any> = {}
  for (const [key, options] of Object.entries(props)) {
    _props[key] = buildPropOptions(options as any)
  }
  return _props
}

// console.log(
//   buildPropOptions({
//     type: String,
//     values: ['a', 1, 2],
//     default: 'a',
//     validator: (val: any) => val === 'b',
//   }).validator('b')
// )

// console.log(
//   buildProps({
//     type: {
//       type: String,
//       values: ['primary', 'success', 'warning', 'danger'],
//       default: 'primary',
//     },
//     size: {
//       type: String,
//       default: 'medium',
//     },
//     disabled: undefined,
//   })
// )
