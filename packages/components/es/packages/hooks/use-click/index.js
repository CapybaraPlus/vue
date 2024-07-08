import { NOOP } from "../../../node_modules/.pnpm/@vue_shared@3.4.30/node_modules/@vue/shared/dist/shared.esm-bundler.js";
const useClick = ({
  handleClick,
  handleMousedown,
  handleMouseup
}) => {
  let onClick;
  let onMousedown;
  let onMouseup;
  if (!handleClick) {
    onClick = onMousedown = onMouseup = NOOP;
  } else {
    let isMousedownSameTarget = false;
    let isMouseupSameTarget = false;
    onMousedown = (e) => {
      handleMousedown == null ? void 0 : handleMousedown(e);
      isMousedownSameTarget = e.target === e.currentTarget;
    };
    onMouseup = (e) => {
      handleMouseup == null ? void 0 : handleMouseup(e);
      isMouseupSameTarget = e.target === e.currentTarget;
    };
    onClick = (e) => {
      if (isMousedownSameTarget && isMouseupSameTarget) {
        handleClick(e);
      }
      isMousedownSameTarget = isMouseupSameTarget = false;
    };
  }
  return {
    onClick,
    onMousedown,
    onMouseup
  };
};
export {
  useClick
};
