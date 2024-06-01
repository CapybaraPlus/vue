import { definePropType } from '@capybara-ui/utils'

interface Person {
  name: string
  age: number
}
const personType = definePropType<Person>(Object)
export const buttonProps = {
  person: personType,
}
