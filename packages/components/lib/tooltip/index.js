"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const install = require("../packages/utils/vue/install.js");
const tooltip$1 = require("./src/tooltip2.js");
const tooltip = require("./src/tooltip.js");
const RaTooltip = install.withInstall(tooltip$1);
exports.tooltipProps = tooltip.tooltipProps;
exports.RaTooltip = RaTooltip;
exports.default = RaTooltip;
