const debugNameSpace = '[Capybara-plus]'

export const useDebug = (content: string) => {
  const warn = () => {
    console.warn(`${debugNameSpace} ${content}`)
  }

  return {
    warn,
  }
}
