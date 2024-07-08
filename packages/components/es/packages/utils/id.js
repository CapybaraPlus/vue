import v4 from "../../node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-browser/v4.js";
const createId = (prefix) => {
  return `${prefix}__${v4()}`;
};
export {
  createId
};
