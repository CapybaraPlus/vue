"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const form = require("./form.js");
const useFormContext = () => {
  const formContext = vue.inject(form.FormContextKey, void 0);
  const formItemContext = vue.inject(form.FormItemContextKey, void 0);
  return {
    formContext,
    formItemContext
  };
};
exports.useFormContext = useFormContext;
