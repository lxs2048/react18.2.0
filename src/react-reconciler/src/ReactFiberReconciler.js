import { createFiberRoot } from "./ReactFiberRoot";
export const createContainer = (
    containerInfo,
    tag,
) => {
    const initialChildren = null;
    return createFiberRoot(
        containerInfo,
        tag,
        initialChildren,
    );
}