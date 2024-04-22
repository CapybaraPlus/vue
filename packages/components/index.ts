
import { App } from "vue"
import Button from "./src/button/button.vue"

export default {
    install(app: App) {
        app.component("RaButton", Button)
    }
}