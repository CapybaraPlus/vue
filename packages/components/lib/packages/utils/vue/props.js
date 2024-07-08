"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const object = require("../object.js");
const definePropType = (type) => type;
const buildPropOptions = (options) => {
  if (options == null || !object.isObject(options)) {
    return options;
  }
  const { values, validator, required, default: _default, type } = options;
  const _validator = values || validator ? (val) => {
    let isVailded = false;
    const allowValues = [];
    if (values) {
      allowValues.push(...values);
      if (object.hasKey(options, "default")) {
        if (!allowValues.includes(_default)) {
          console.warn(
            `Invalid prop: validation failed! The values are ${allowValues.join(
              ", "
            )}, but you use the default value: ${_default}`
          );
        }
      }
      isVailded || (isVailded = allowValues.includes(val));
    }
    if (validator) {
      isVailded || (isVailded = validator(val));
    }
    return isVailded;
  } : void 0;
  const _options = {
    type,
    required: !!required,
    validator: _validator
  };
  if (object.hasKey(options, "default")) {
    _options.default = _default;
  }
  return _options;
};
const buildProps = (props) => {
  const _props = {};
  for (const [key, options] of Object.entries(props)) {
    _props[key] = buildPropOptions(options);
  }
  return _props;
};
exports.buildPropOptions = buildPropOptions;
exports.buildProps = buildProps;
exports.definePropType = definePropType;
