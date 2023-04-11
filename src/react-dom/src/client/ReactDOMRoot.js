import {
    createContainer,
  } from "react-reconciler/src/ReactFiberReconciler";
import { ConcurrentRoot } from "react-reconciler/src/ReactRootTags";
export function createRoot(container, options) {
    let concurrentUpdatesByDefaultOverride = false;
    if (options !== null && options !== undefined) {
        if (
            allowConcurrentByDefault &&
            options.unstable_concurrentUpdatesByDefault === true
        ) {
            concurrentUpdatesByDefaultOverride = true;
        }
    }

    const root = createContainer(
        container,
        ConcurrentRoot,//tag mode ReactDom.render()
    );
    // markContainerAsRoot(root.current, container);

    // const rootContainerElement =
    //     container.nodeType === COMMENT_NODE ? container.parentNode : container;
    // listenToAllSupportedEvents(rootContainerElement);

    // $FlowFixMe[invalid-constructor] Flow no longer supports calling new on functions
    // return root
    return new ReactDOMRoot(root);
}

// $FlowFixMe[missing-this-annot]
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}

ReactDOMRoot.prototype.render =
  // $FlowFixMe[missing-this-annot]
  function (children) {
    console.log(children,'数据😎😎😎children');
};