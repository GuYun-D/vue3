# h函数
**介绍**
Vue推荐在绝大数情况下使用模板来创建你的HTML，然后一些特殊的场景，你真的需要JavaScript的完全编程的
能力，这个时候你可以使用 渲染函数 ，它比模板更接近编译器
- 前面我们讲解过VNode和VDOM的改变：
- Vue在生成真实的DOM之前，会将我们的节点转换成VNode，而VNode组合在一起形成一颗树结构，就是虚
拟DOM（VDOM）；
- 事实上，我们之前编写的 template 中的HTML 最终也是使用渲染函数生成对应的VNode；
- 那么，如果你想充分的利用JavaScript的编程能力，我们可以自己来编写 createVNode 函数，生成对应的
VNode

#