import React, { Component } from 'react'

export default class HookPage extends Component{

    constructor(props) {
        // 构造函数，在创建组件的时候调用一次。
        // 组件初始化开始
        // 初始化state
        super(props);
    }

    getDefaultProps() {
        // 设置默认的props，也可以用dufaultProps设置组件的默认属性。
    }

    getInitialState() {
        // 初始化state，可以直接在constructor中定义this.state
    }

    componentWillMount() {
        // 组件将要挂载，组件加载时调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state
        // 已经可以读取到state数据
        // 已经在内存中产生虚拟DOM树 但是还没有显示在页面上
        // Tip1: 不建议在此请求数据，由于请求数据接口一般都是异步，这时候render已经被执行，建议在componentDidMount 数据
        // Tip2: 如果在服务端渲染，该钩子函数将被调用两次，一次服务端，一次浏览器端，而componentDidMount函数只会在浏览器端请求一次
        alert("componentWillMount")
    }

    render() {
        alert("render")
        return(
            null
        )

        // react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行
        // Tip：记住，不要在render里面修改state。
    }

    componentDidMount() {
        alert("componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
        // props的数据发生改变的时候触发，在该函数内部this.props.属性还没有发生变化，但是可以通过第一个参数nextProps获取到修改之后的props属性
        // 在props被改变时被触发，初始化render时不调用。
        // 旧的属性还是可以通过this.props来获取，在这里通过调用this.setState()来更新你的组件状态。
        // Tip1: 某些情况下，props没变也会触发该钩子函数，需要在方法里手动判断一下this.props和nextProps是否相同，不相同了才执行我的更新方法。
        // Tip2：该函数一般用来更新依赖props的状态
    }


    shouldComponentUpdate(nextProps, nextState) {
        // 组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）
        // 在函数内部state和props还未改变，新的props和state在两个参数内
        // 发生重渲染时，在render()函数调用前被调用的函数，当函数返回false时候，阻止接下来的render()函数的调用，阻止组件重渲染，而返回true时，组件照常重渲染。
        // 该方法并不会在初始化渲染或当使用forceUpdate()时被调用。
    }

    componentWillUpdate(nextProps, nextState) {
        // shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用。
        // 数据修改，接着执行render
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 触发时间: update发生的时候，在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法
        // 该函数在最新的渲染输出提交给DOM前将会立即调用。它让你的组件能在当前的值可能要改变前获得它们。这一生命周期返回的任何值将会 作为参数被传递给componentDidUpdate()。
    }

    componentDidUpdate(prevProps, prevState) {
        // 数据修改成功，组件更新完成后调用
        // 除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。
        // 通过prevProps和prevState访问修改之前的props和state
    }

    componentWillUnmount() {
        // 在组件被卸载和销毁之前立刻调用。可以在该方法里处理任何必要的清理工作，例如解绑定时器，取消网络请求，清理任何在componentDidMount环节创建的DOM元素。
    }

    componentDidCatch(error, info) {
        // 该函数称为错误边界，捕捉发生在子组件树中任意地方的JavaScript错误，打印错误日志，并且显示回退的用户界面。
        // Tip：错误边界只捕捉树中发生在它们之下组件里的错误。一个错误边界并不能捕捉它自己内部的错误。
    }
}