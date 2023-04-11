import { ConcurrentRoot } from "./ReactRootTags";
import {
    NoMode,
    ConcurrentMode,
} from "./ReactTypeOfMode";
import { HostRoot } from "./ReactWorkTags";
import { NoFlags} from "./ReactFiberFlags";
export const createHostRootFiber = (
    tag,
    isStrictMode,
    concurrentUpdatesByDefaultOverride
) => {
    let mode;
    if (tag === ConcurrentRoot) {
        mode = ConcurrentMode;
    } else {
        mode = NoMode;
    }
    return createFiber(HostRoot, null, null, mode);
}
function createFiber(tag, pendingProps, key, mode) {
    // $FlowFixMe[invalid-constructor]: the shapes are exact here but Flow doesn't like constructors
    return new FiberNode(tag, pendingProps, key, mode);
}
function FiberNode(tag, pendingProps, key, mode) {
    // Instance
    this.tag = tag;
    this.key = key;
    this.elementType = null;
    this.type = null;
    this.stateNode = null;

    // Fiber
    this.return = null;
    this.child = null;
    this.sibling = null;
    this.index = 0;

    this.pendingProps = pendingProps;
    this.updateQueue = null;

    this.mode = mode;

    // Effects
    this.flags = NoFlags;
    this.subtreeFlags = NoFlags;
    this.deletions = null;
    // fibel双缓存模型
    this.alternate = null;
}