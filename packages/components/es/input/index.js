import { withInstall } from "../packages/utils/vue/install.js";
import Input from "./src/input2.js";
import { inputEmits, inputProps } from "./src/input.js";
const RaInput = withInstall(Input);
export {
  RaInput,
  RaInput as default,
  inputEmits,
  inputProps
};
