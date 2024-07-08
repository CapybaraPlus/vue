"use strict";
const instance = require("./instance.js");
const message = require("./message.js");
for (const theme of message.messageTheme) {
  instance[theme] = (options) => {
    instance({
      ...options,
      theme
    });
  };
}
module.exports = instance;
