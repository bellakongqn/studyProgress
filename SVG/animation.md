```
<animate attributeName="x" from="160" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
```
1. attributeName = <attributeName>
    要变化的元素属性名称,①元素直接暴露的属性，text上的x,y或者font-size; ②css 属性 比如opacity...transform
2. attributeType = 'CSS | XML | auto'
   支持三个固定参数：①x,y,transform 属于XML;②opacity 属于css;③auto 自动判断;不确定的时候建议不设置
3.  from, to, by, values
   from = '<value>' 动画的起始值 to = '<value>' 动画的结束值
   by= '<value>' 动画的相对变化值 values = '<list>' 用分号分隔的一个或多个值，可以看出是动画的多个关键值点

   to|by 同时出现，只识别to
   values 增加中间值过滤
   ```
   <animate attributeName="x" values="160;40;160" dur="3s" repeatCount="indefinite" />
   ```
4. begin, end 
    动画开始的时间

    begin的单值除了普通value，还有下面这些类别的value：
    offset-value | syncbase-value | event-value | repeat-value | accessKey-value | media-marker-value | wallclock-sync-value | "indefinite"

    ① offset-value表示偏移值
    ② syncbase-value基于同步确定的值
    ```
        begin="x.end-1s"
     <animate id="x" attributeName="x" to="60" begin="0s" dur="3s" fill="freeze" />
     <animate attributeName="y" to="100" begin="x.end" dur="3s" fill="freeze" />
    ```
    ③ event-value这个表示与事件相关联的值
    ```
    begin="circle.click+2s"
    <circle id="circle" cx="100" cy="100" r="50"></circle>
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate attributeName="x" to="60" begin="circle.click" dur="3s" />
    </text>
    ```
    ④ repeat-value指重复多少次之后干嘛干嘛
    ```
    <text font-family="microsoft yahei" font-size="120" y="160" x="160">马
        <animate id="x" attributeName="x" to="60" begin="0s" dur="3s" repeatCount="indefinite" />
        <animate attributeName="y" to="100" begin="x.repeat(2)" dur="3s" fill="freeze" />
    </text>
    ```
5. dur 常规时间值 | "indefinite"
    "indefinite"指事件无限。试想下，动画时间无限，实际上就是动画压根不执行的意思
6. calcMode, keyTimes, keySplines
7. repeatCount, repeatDur
    repeatCount表示动画执行次数，可以是合法数值或者”indefinite“（动画循环到电脑死机）。
    repeatDur定义重复动画的总时间。可以是普通时间值或者”indefinite（”动画循环到电脑死机）。
8. fill
    fill表示动画间隙的填充方式。支持参数有：freeze | remove. 其中remove是默认值，表示动画结束直接回到开始的地方。freeze“冻结”表示动画结束后像是被冻住了，元素保持了动画结束之后的状态
9. accumulate, additive
    accumulate是累积的意思。支持参数有：none | sum. 默认值是none. 如果值是sum表示动画结束时候的位置作为下次动画的起始位置。
    additive控制动画是否附加。支持参数有：replace | sum. 默认值是replace. 如果值是sum表示动画的基础知识会附加到其他低优先级的动画上