export const ColorDisplayProps = {
  color: {
    type: String,
  },
  name: {
    type: String,
  },
}

export const defaultNamesMap = ['white', 'black', 'transparent']

const types = ['primary', 'success', 'warning', 'danger', 'error']

for (const t of types) {
  for (let i = 6; i >= 1; i--) {
    defaultNamesMap.push(`${t}-light-${i}`)
  }
  defaultNamesMap.push(`${t}-base`)
  for (let i = 1; i < 4; i++) {
    defaultNamesMap.push(`${t}-dark-${i}`)
  }
}
defaultNamesMap.push('neutral-base')
for (let i = 1; i <= 9; i++) {
  defaultNamesMap.push(`neutral-${i}`)
}
