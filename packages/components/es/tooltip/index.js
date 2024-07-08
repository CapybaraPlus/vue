import { withInstall } from "../packages/utils/vue/install.js";
import Tooltip from "./src/tooltip2.js";
import { tooltipProps } from "./src/tooltip.js";
const RaTooltip = withInstall(Tooltip);
export {
  RaTooltip,
  RaTooltip as default,
  tooltipProps
};
