"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const install = require("../packages/utils/vue/install.js");
const input$1 = require("./src/input2.js");
const input = require("./src/input.js");
const RaInput = install.withInstall(input$1);
exports.inputEmits = input.inputEmits;
exports.inputProps = input.inputProps;
exports.RaInput = RaInput;
exports.default = RaInput;
