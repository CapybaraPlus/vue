import { App, Plugin, Component, AppContext } from 'vue'

/**
 * component add install function
 */
type ComponentWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
  ;(comp as ComponentWithInstall<T> & { name: string }).install = (
    app: App
  ) => {
    const { name: compName } = comp as unknown as { name: string }
    app.component(compName, comp as Component)
  }
  return comp as ComponentWithInstall<T>
}

/**
 * component by function call add install function
 */
type ComponentWithInstallContext<T> = ComponentWithInstall<T> & {
  _context: AppContext
}
export const withInstallFunction = <T>(compFn: T, name: string) => {
  ;(compFn as ComponentWithInstallContext<T>).install = (app: App) => {
    // add _context to component
    ;(compFn as ComponentWithInstallContext<T>)._context = app._context
    // add component to globalProperties
    // so that it can be used by vm
    // such as "this.xxx" in the options api
    app.config.globalProperties[name] = compFn
  }
  return compFn as ComponentWithInstallContext<T>
}
