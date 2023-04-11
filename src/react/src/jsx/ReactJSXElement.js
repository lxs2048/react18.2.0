import hasOwnProperty from "shared/hasOwnProperty";
import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";
// 保留属性
const RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true,
};
export const jsx = (type, config, maybeKey) => {
    let propName;
    const props = {};
    let key = null;
    let ref = null;
    if (maybeKey !== undefined) {
        key = "" + maybeKey;
    }
    if (hasValidKey(config)) {
        key = "" + config.key;
    }
    if (hasValidRef(config)) {
        ref = config.ref;
    }
    // Remaining properties are added to a new props object
    for (propName in config) {
        if (
            hasOwnProperty.call(config, propName) &&
            !RESERVED_PROPS.hasOwnProperty(propName)
        ) {
            props[propName] = config[propName];
        }
    }

    if (type && type.defaultProps) {
        const defaultProps = type.defaultProps;
        for (propName in defaultProps) {
            if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
            }
        }
    }
    return ReactElement(
        type,
        key,
        ref,
        props
    );
}
function ReactElement(type, key, ref, props) {
    const element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props,
    };
    return element;
}
function hasValidKey(config) {
    return config.key !== undefined;
}
function hasValidRef(config) {
    return config.ref !== undefined;
}
