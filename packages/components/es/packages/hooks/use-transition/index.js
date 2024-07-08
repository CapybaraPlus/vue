const groupPrefix = "group__";
function useTransition(name) {
  return name;
}
function useTransitionGroup(name) {
  return `${groupPrefix}${name}`;
}
export {
  useTransition,
  useTransitionGroup
};
