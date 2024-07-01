import { PropType } from 'vue'
import { hasKey, isObject } from '../object'

/**
 * @todo 现在生成的props类型中的属性不正确，对于非required的属性，其类型不是可选的
 */

/**
 * @description define a prop type
   @example: definePropType<string>(String)
   @example: definePropType<string | number>([String, Number])
   @example: definePropType<Person>(Object)
 */
export const definePropType = <Type>(type: any): PropType<Type> => type

// vue prop native type
type NativeType<T> = PropType<T> | null | undefined

// vue prop native validator
// type NativeValidator = ((val: any) => boolean) | undefined

// prop options values
// type ExpandingValues<T> = Array<T | null | undefined>

// prop options default
// type ExpandingDefault<T> = T | null | undefined | never

// prop options
type ExpandingPropOptions<
  Type,
  Values,
  Validator,
  Required extends boolean,
  Default
> = {
  type: NativeType<Type>
  values?: Values
  validator?: ((val: any) => val is Validator) | undefined
  required?: Required
  default?: Default
}

// const propOptions: ExpandingPropOptions<string> = {
//   type: String,
//   values: ['a', 'b', null, undefined, 1],
//   validator: (val: number) => val,
//   default: true,
// }

// native prop options
type NativePropOptions<Type, Required, Default> = {
  readonly type: NativeType<Type>
  readonly required?: [Required] extends [true] ? true : false
  readonly validator?: ((val: any) => boolean) | undefined
  readonly default: Default extends [never] ? unknown : Default
}

// convert input prop options to native prop options
type PropOptionsConvert<I> = I extends ExpandingPropOptions<
  infer Type,
  any,
  any,
  infer Required,
  infer Default
>
  ? NativePropOptions<Type, Required, Default>
  : I extends NativeType<any>
  ? I
  : never

/**
 * build prop options
 * @param @requires type: prop type
 * @param values: allowed values
 * @param validator: custom validator
 * @param required: whether the prop is required
 * @param default: default value
 */
export const buildPropOptions = (
  options: ExpandingPropOptions<any, any, any, any, any>
): NativePropOptions<any, any, any> => {
  if (options == null || !isObject(options)) {
    return options as any
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

// console.log(
//   buildPropOptions({
//     type: String,
//     values: ['a', 1, 2],
//     default: 'a',
//     validator: (val: any) => val === 'b',
//   }).validator!('a')
// )

type ExpandingProps = Record<
  string,
  ExpandingPropOptions<any, any, any, any, any> | NativeType<any>
>

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
export const buildProps = <Props extends ExpandingProps>(
  props: Props
): {
  [K in keyof Props]: PropOptionsConvert<Props[K]>
} => {
  const _props: Record<string, any> = {}
  for (const [key, options] of Object.entries(props)) {
    _props[key] = buildPropOptions(options as any)
  }
  return _props as any
}

// console.log(
//   buildProps({
//     type: {
//       type: String,
//       values: ['primary', 'success', 'warning', 'danger'],
//       default: 'primary',
//     },
//     size: {
//       type: [String, Number],
//       default: 1,
//       validator: (val: boolean) => val,
//       required: true,
//     },
//     disabled: undefined,
//   })
// )
