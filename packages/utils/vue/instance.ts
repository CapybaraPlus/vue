// to build a instance of component to call its public method
export type buildInstance<T extends abstract new (...args: any) => any> =
  InstanceType<T> | null
