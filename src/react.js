import { REACT_ELEMENT } from "./utils"

// 初始化渲染的第一步，需要实现自己的createElement，这里的实现用于替换react官方的
// 实现步骤是，在脚本中开启旧的打包模式，然后jsx会调用createElement，因此直接打印jsx，就可以比较自己的实现和官方实现的不同
function createElement(type, _props, children) {
    const props = {..._props}
    let ref = props.ref || null
    let key = props.key || null

    // 这里是删除掉来自于bebal转译中产生的中间文件
    const deleteProps = ['key', 'ref', '__self', '__source']

    deleteProps.forEach(key => {
        delete props[key]
    })

    if (arguments.length > 3) {
        props.children = Array.prototype.slice.call(arguments, 2);
    } else {
        props.children = children
    }
 

    return {
        $$typeof: REACT_ELEMENT,
        type,
        ref,
        key,
        props
    }
}

const React = {
    createElement
}

export default React