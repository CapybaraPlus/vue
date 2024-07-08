const withInstall = (comp) => {
  comp.install = (app) => {
    const { name: compName } = comp;
    app.component(compName, comp);
  };
  return comp;
};
const withInstallFunction = (compFn, name) => {
  compFn.install = (app) => {
    compFn._context = app._context;
    app.config.globalProperties[name] = compFn;
  };
  return compFn;
};
export {
  withInstall,
  withInstallFunction
};
