import { isNumber } from '@capybara-plus/utils'

export const useUnit = (
  val: string | number | undefined | null,
  unit: string
): string => {
  if (!val) return ''
  if (isNumber(val)) return val + unit
  else return val
}
