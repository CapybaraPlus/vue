import { App, Plugin, Component } from 'vue'

type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T> & { name: string }).install = (app: App) => {
    const { name: compName } = comp as unknown as { name: string }
    app.component(compName, comp as Component)
  }
  return comp as SFCWithInstall<T>
}
