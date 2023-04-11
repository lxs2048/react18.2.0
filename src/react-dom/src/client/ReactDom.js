import {
    createRoot as createRootImpl,
} from "./ReactDOMRoot";
export const createRoot = (container, options)=> {
    return createRootImpl(container, options);
}