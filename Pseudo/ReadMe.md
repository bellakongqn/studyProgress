css 伪类|伪元素
伪类   核心就是用来选择那些不能够被普通选择器选择的文档之外的元素，比如:hover. 用":"
伪元素 核心就是创建通常不存在于文档中的元素，比如::before 用"::"
<p>I am snow</p>
将第一个字母变成红色=><p><span style={{ color: red }}>I<span/> am snow</p>
=>创建了新的元素 =>添加伪元素  ::first-letter 
将 I am snow 这句话变为红色
=>不需要添加新的元素 =>添加伪类 


伪类:
E:first-child	匹配父元素的第一个子元素E
E:last-child	匹配父元素的最后一个子元素E
E:only-child	匹配父元素仅有的一个子元素E
E:nth-child(n)	匹配父元素的第n个子元素E
E:nth-last-child(n)	匹配父元素的倒数第n个子元素E
E:first-of-type 匹配同类型中的第一个同级兄弟元素E
E:last-of-type	匹配同类型中的最后一个同级兄弟元素E
E:only-of-type	匹配同类型中的唯一的一个同级兄弟元素E
E:nth-of-type(n)	匹配同类型中的第n个同级兄弟元素E
E:nth-last-of-type(n)	匹配同类型中的倒数第n个同级兄弟元素E

:first-child与:first-of-type的区别
:first-child 元素是不是父元素的第一个子元素
:first-of-type匹配属于其父元素的第一个特定类型的子元素

E:hover	设置元素鼠标在其悬停时的样式
E:focus	设置元素在成为输入焦点（该元素的onfocus事件发生）时的样式。(一般应用于表单元素)
E:active	设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式
E:visited	设置超链接a在其链接地址已被访问过时的样式
E:checked	匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时)
E:disabled	匹配用户界面上处于禁用状态的元素E。(一般应用于表单元素)
E:enabled	匹配用户界面上处于可用状态的元素E。(一般应用于表单元素)
E:empty	匹配没有任何子元素（包括text节点）的元素E
E:not(s)	匹配不含有s选择符的元素E
E:link	设置超链接a在未被访问前的样式
E:root	匹配E元素在文档的根元素。在HTML中，根元素永远是HTML

E:first-of-type 总是能命中父元素的第1个为E的子元素，不论父元素第1个子元素是否为E；
而E:first-child里的E元素必须是它的兄弟元素中的第一个元素，否则匹配失效。
E:last-of-type 与E:last-child也是同理。
E:nth-of-type(n)总是能命中父元素的第n个为E的子元素，不论父元素第n个子元素是否为E；
而E:nth-child(n)会选择父元素的第n个子元素E，如果第n个子元素不是E，则是无效选择符，但n会递增。

伪元素
::before 在目标元素E的前面插入的内容。用来和content属性一起使用
::after  在目标元素E的后面插入的内容。用来和content属性一起使用
::first-letter
::first-line  匹配元素中第一行的文本(只能在块元素中使用)
::selection  匹配被用户选中的部分
::placeholder 设置元素文字占位符的样式。(一般用于input输入框)

属性选择器
E[att]	选择具有att属性的E元素
E[att="val"]	选择具有att属性且属性值等于val的E元素
E[att~="val"]	选择具有att属性且属性值其中一个等于val的E元素（包含只有一个值且该值等于val的情况）
E[att|="val"]	选择具有att属性且属性值为以val开头并用连接符-分隔的字符串的E元素，如果属性值仅为val，也将被选择
E[att^="val"]	选择具有att属性且属性值为以val开头的字符串的E元素
E[att$="val"]	选择具有att属性且属性值为以val结尾的字符串的E元素
E[att*="val"]	选择具有att属性且属性值为包含val的字符串的E元素

ul.breadcrumb li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
}
每两个li的组合，第二个li之前加上该css