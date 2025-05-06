import { REACT_ELEMENT } from "./utils";

// render函数是我们从虚拟节点到真实节点中替换
// 因为babel会自动尝试将jsx编译成vnode，这里的jsx和VNode其实等价，然后进行挂载
function render(VNode, containerDOM) {
    // 将虚拟dom转换为虚拟dom
    // 将得到的真实dom挂载到containerDom中
    // ... 其他的初始化操作，后续补充完成，完成后执行mount
    mount(VNode, containerDOM);
}


function mount(VNode, containerDOM) {
    let newDom = createDOM(VNode);
    // 这里的containerDom判空处理很重要
    newDom && containerDOM && containerDOM.appendChild(newDom); 
}

// 核心逻辑
function createDOM(VNode) {
    // 1.创建元素
    // 2.处理子元素
    // 3.处理属性值
    const {type, props} = VNode
    let dom;
    if (type && VNode.$$typeof === REACT_ELEMENT) {
        dom = document.createElement(type)
    }
    if (props) {
        if(typeof props.children === 'object' && props.children.type) {
            mount(props.children, dom)
        } else if (Array.isArray(props.children)) {
            mountArray(props.children, dom)
        } else if (typeof props.children === 'string') {
            // 这里的appendChild是挂载子元素的
            dom.appendChild(document.createTextNode(props.children))
        }
    }
    // todo 这里的属性没有进行处理和绑定
    return dom;
}

function mountArray(children, parent) {
    if (!Array.isArray(children)) return 
    for (let i = 0; i < children.length; i++) {
        if (typeof children[i] === 'string') {
            parent.appendChild(document.createTextNode(children[i]))
        } else {
            mount(children[i], parent);
        }
    }
}

const ReactDOM = {
    render
}

export default ReactDOM