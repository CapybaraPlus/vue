const defaultComponentPrefix = 'Ra'

export const useComponetName = (rawName: string) => {
  rawName = rawName.toLowerCase()
  let name: string = ''
  rawName.split('-').forEach((item) => {
    name += item[0].toUpperCase() + item.slice(1)
  })
  return `${defaultComponentPrefix}${name}`
}
