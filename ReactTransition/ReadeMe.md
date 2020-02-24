1.过渡组件(Transiton)允许您用一个简单的声明性API描述随着时间的推移从一个组件状态到另一个组件状态的转换。最常用的是用来动画一个组件的安装和卸载，但也可以用来描述在适当的过渡状态。默认情况下，该组件不会更改其呈现的组件的行为，它只跟踪组件的“进入”和“退出”的状态。由你来为这些状态定义效果。
四种状态entering entered exiting exited

Props
children
可以使用一个函数来代替 React 元素，通过调用这个函数与当前过渡状态(‘enter’、‘enter’、‘exit’、‘exited’、‘unmount’),可用于将特定于上下文的props应用于组件
```
<Transition in={this.state.in} timeout={150}>
  {state => (
    <MyComponent className={`fade fade-${state}`} />
  )}
</Transition>
```
in
in 属性是一个 boolean 值，由子组件传入，用于控制子组件的状态，是否显示
mountOnEnter
默认情况下，子组件与父转换组件一起立即挂载。如果你想“延迟挂载”第一个in={true}上的组件，你可以设置mountOnEnter。在第一次进入转换之后，组件将保持挂载状态，即使在“退出”状态下也是如此，除非你还指定unmountOnExit。
unmountOnExit
默认情况下，子组件在达到“退出”状态后仍然挂载。如果你希望在组件退出后卸载组件，请设置unmountOnExit
appear
通常，如果组件挂载时显示组件，则该组件不进行转换。如果您希望在第一个挂载集上进行转换，则显示为true，并且组件将在< transition >挂载后立即进行转换。
注意:没有特定的“显示”状态。appear只添加一个额外的enter转换。
enter
启用或禁用enter转换。
exit
启用或禁用exit转换。
timeout
转换的持续时间，单位为毫秒。
```
timeout={{
 enter: 300,
 exit: 500,
}}
```
addEndListener
添加自定义转换结束触发器。使用正在转换的DOM节点和done回调调用。允许更细粒度的转换结束逻辑。注意:如果提供超时，仍将其用作回退。
```
addEndListener={(node, done) => {
  // use the css transitionend event to mark the finish of a transition
  node.addEventListener('transitionend', done, false);
}}
```
onEnter
在应用“输入”状态之前触发的回调。提供了一个额外的参数isAppearing，以指示是否在初始挂载上出现了enter阶段。
type: Function(node: HtmlElement, isAppearing: bool) -> void
onEntering
在应用“输入”状态之前触发的回调。提供了一个额外的参数isAppearing，以指示是否在初始挂载上出现了entering阶段。
type: Function(node: HtmlElement, isAppearing: bool) -> void
onEntered
在应用“输入”状态之前触发的回调。提供了一个额外的参数isAppearing，以指示是否在初始挂载上出现了entered阶段。
type: Function(node: HtmlElement, isAppearing: bool) -> void
onExit
在应用“退出”状态之前触发的回调。
type: Function(node: HtmlElement) -> void
onExiting
在应用“退出”状态之后触发的回调。
type: Function(node: HtmlElement) -> void
onExited
应用“退出”状态后触发的回调。
type: Function(node: HtmlElement) -> void