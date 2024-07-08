import callMessage from "./instance.js";
import { messageTheme } from "./message.js";
for (const theme of messageTheme) {
  callMessage[theme] = (options) => {
    callMessage({
      ...options,
      theme
    });
  };
}
export {
  callMessage as default
};
