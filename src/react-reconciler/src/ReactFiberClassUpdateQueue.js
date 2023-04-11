export function initializeUpdateQueue(fiber) {
    const queue = {
        // baseState: fiber.memoizedState,
        // firstBaseUpdate: null,// 跳过更新
        // lastBaseUpdate: null,
        // 循环更新列表
        shared: {
            pending: null,
            // lanes: NoLanes,
            // hiddenCallbacks: null,
        },
        // callbacks: null,
    };
    fiber.updateQueue = queue;
}