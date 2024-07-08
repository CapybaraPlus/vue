import "./src/function.js";
import { withInstallFunction } from "../packages/utils/vue/install.js";
import { messageProps, messageTheme } from "./src/message.js";
import callMessage from "./src/instance.js";
const RaMessage = withInstallFunction(callMessage, "$message");
export {
  RaMessage,
  RaMessage as default,
  messageProps,
  messageTheme
};
