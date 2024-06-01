import { PropType } from 'vue'

// a function to define a prop type
// example: definePropType<string>(String)
// example: definePropType<string | number>([String, Number])
// example: definePropType<Person>(Object)
const definePropType = <T>(type: any): PropType<T> => type
interface Person {
  name: string
  age: number
}
const personType = definePropType<Person>(Object)
export const buttonProps = {
  person: personType,
}
