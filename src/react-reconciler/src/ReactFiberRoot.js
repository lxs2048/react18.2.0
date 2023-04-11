import { initializeUpdateQueue } from "./ReactFiberClassUpdateQueue";
import { createHostRootFiber } from "./ReactFiber";
export const createFiberRoot = (
    containerInfo,
    tag,
) => {
    // 1.FiberRoot
    const root = new FiberRootNode(
        containerInfo,
        tag,
    );
    // 2.rootFiber fiber对象
    const uninitializedFiber = createHostRootFiber(
        tag,
        false,
        undefined
    );
    // 3.关联指向
    root.current = uninitializedFiber;
    uninitializedFiber.stateNode = root;

    // 4.更新队列
    initializeUpdateQueue(uninitializedFiber);
    return root;
}
function FiberRootNode(
    containerInfo,
    tag,
) {
    this.tag = tag;
    this.containerInfo = containerInfo;
    this.current = null;
}