import { PropType } from 'vue'
import { hasKey, isObject } from '../object'
// import { useDebug } from '@capybara-plus/hooks'

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
export const definePropTypeValues = <Type>(
  values: ReadonlyArray<Type>,
  type: any
): PropType<Type> => definePropType<(typeof values)[number]>(type)

// vue prop native type
type NativeType<T> = PropType<T> | null | undefined

// if require is true, default is never; or default is extend from type
type InputPropDefault<Required extends boolean, Default> = Required extends true
  ? never
  : Default extends Record<string, unknown>
  ? () => Default
  : Default

type IfNever<T, Y = true, N = false> = [T] extends [never] ? Y : N

// vue native prop options
type OutputPropOptions<Type, Default, Required extends boolean = false> = {
  readonly type: NativeType<Type>
  readonly required: [Required] extends [true] ? true : false
  readonly validator: ((val: unknown) => boolean) | undefined
} & IfNever<Default, unknown, { readonly default: Default }>

// input prop options
type InputPropOptions<Type, Default, Required extends boolean> = {
  type: NativeType<Type>
  required?: Required
  validator?: ((val: Type) => boolean) | undefined
  default?: InputPropDefault<Required, Default>
}

// convert input prop options to native prop options
type PropOptionsConvert<I> = I extends InputPropOptions<
  infer Type,
  infer Default,
  infer Required
>
  ? OutputPropOptions<Type, Default, Required>
  : I extends NativeType<any>
  ? I
  : never

/**
 * build prop options
 * @param @requires type: prop type
 * @param validator: custom validator
 * @param required: whether the prop is required
 * @param default: default value
 */
export const buildPropOptions = <Type, Default, Required extends boolean>(
  options: InputPropOptions<Type, Default, Required>
): OutputPropOptions<Type, Default, Required> => {
  if (options == null || !isObject(options)) {
    return options as any
  }

  const { required, default: _default, validator } = options

  const _validator = validator

  const _options: any = {
    ...options,
    required: !!required,
    validator: _validator,
  }

  if (hasKey(options, 'default')) {
    ;(_options as any).default = _default
  }

  return _options
}

export const buildProps = <
  Props extends Record<
    string,
    InputPropOptions<any, any, any> | NativeType<any>
  >
>(
  props: Props
): {
  [Key in keyof Props]: PropOptionsConvert<Props[Key]>
} => {
  const _props: Record<string, any> = {}
  for (const [key, options] of Object.entries(props)) {
    _props[key] = buildPropOptions(options as any)
  }
  return _props as any
}

buildProps({
  type: {
    type: String,
    required: false,
  },
})
