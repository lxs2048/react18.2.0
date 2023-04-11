import {
    createRoot as createRootImpl,
} from "./";
export function createRoot(container, options) {
    try {
        return createRootImpl(container, options);
    } catch (err) {
        console.log(err, 'createRootErr');
    }
}