// import ReactDOM from 'react-dom/client';
import React from './react'
import ReactDOM from './react.dom'

const renderJSX = <div class="helloDivCls" style={{color: '#bfa'}}>Hello Simple React <span>xxx1</span><span>xxx2</span></div>
ReactDOM.render(renderJSX, document.getElementById('root'))

// 这里比较 官方的react输出和自己的，就可以看到自己的实现是否OK，这里的源代码实现方式是，函数替换式开发
console.log(renderJSX)