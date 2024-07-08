export declare const RaMessage: (import('./src/message').MessageFunction & {
    default: import('./src/message').MessageFunction;
    success: import('./src/message').MessageFunction;
    warning: import('./src/message').MessageFunction;
    error: import('./src/message').MessageFunction;
} & import('vue').Plugin) & {
    _context: import('vue').AppContext;
};
export default RaMessage;
export * from './src/message';
