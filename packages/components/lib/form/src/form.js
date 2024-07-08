"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const props = require("../../packages/utils/vue/props.js");
const id = require("../../packages/utils/id.js");
const formProps = props.buildProps({
  model: {
    type: Object,
    default: () => {
    }
  },
  rules: {
    type: props.definePropType(Object),
    default: () => {
    }
  }
});
const formItemProps = props.buildProps({
  label: {
    type: String
  },
  prop: {
    type: String
  }
});
const FormContextKey = Symbol("formContext");
const FormItemContextKey = Symbol("formItemContext");
const FormItemId = () => id.createId("form-item");
exports.FormContextKey = FormContextKey;
exports.FormItemContextKey = FormItemContextKey;
exports.FormItemId = FormItemId;
exports.formItemProps = formItemProps;
exports.formProps = formProps;
