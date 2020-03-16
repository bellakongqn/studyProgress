1. svg代码都放在顶层标签svg下面
   width属性和height属性 指定了宽高
   viewBox 指定视觉区域 四个数字分别是：左上角的横坐标和纵坐标、视口的宽度和高度

2. circle 圆
    <circle cx="90"  cy="50" r="25" class="red" />
    cx、cy、r  => 横坐标、纵坐标和半径

    CSS 属性
    fill：填充色
    stroke：描边色
    stroke-width：边框宽度

3. line 线
   <line x1="0" y1="0" x2="200" y2="0" style="stroke:rgb(0,0,0);stroke-width:5" />
   x1属性和y1属性，表示线段起点的横坐标和纵坐标；x2属性和y2属性，表示线段终点的横坐标和纵坐标；style属性表示线段的样式

4. polyline 折线
    <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
    points属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔

5. rect 矩形
    <rect x="0" y="0" height="100" width="200" style="stroke: #70d5dd; fill: #dd524b" />
    x属性和y属性，指定了矩形左上角端点的横坐标和纵坐标；width属性和height属性指定了矩形的宽度和高度（单位像素）

6. ellipse 椭圆
   <ellipse cx="60" cy="60" ry="40" rx="20" stroke="black" stroke-width="5" fill="silver"/>
   cx属性和cy属性，指定了椭圆中心的横坐标和纵坐标（单位像素）；rx属性和ry属性，指定了椭圆横向轴和纵向轴的半径

7. polygon 多边形
    <polygon fill="green" stroke="orange" stroke-width="1" points="0,0 100,0 100,100 0,100 0,0"/>
    points属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔

8. path 路径
    <path d="
        M 18,3
        L 46,3
        L 46,40
        L 61,40
        L 32,68
        L 3,40
        L 18,40
        Z">
    </path>
    属性表示绘制顺序，它的值是一个长字符串，每个字母表示一个绘制动作，后面跟着坐标。
    M：移动到（moveto）
    L：画直线到（lineto）
    Z：闭合路径

9. text 文本
    <text x="50" y="25">Hello World</text>
    x属性和y属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用class或style属性指定

10. use 复制一个元素
    <circle id="myCircle" cx="5" cy="5" r="4"/>
    <use href="#myCircle" x="10" y="0" fill="blue" />
    href属性指定所要复制的节点，x属性和y属性是<use>左上角的坐标。另外，还可以指定width和height坐标

11. g 多个形状组成一个组（group）
    <g id="myCircle">
        <text x="25" y="20">圆形</text>
        <circle cx="50" cy="50" r="20"/>
    </g>
    <use href="#myCircle" x="100" y="0" fill="blue" />

12. defs 用于自定义形状，它内部的代码不会显示，仅供引用
    <defs>
        <g id="myCircle">
        <text x="25" y="20">圆形</text>
        <circle cx="50" cy="50" r="20"/>
        </g>
    </defs>
    <use href="#myCircle" x="0" y="0" />

13. pattern 标签用于自定义一个形状，该形状可以被引用来平铺一个区域。
    <defs>
        <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle fill="#bee9e8" cx="50" cy="50" r="35" />
        </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
    <pattern>标签将一个圆形定义为dots模式。patternUnits="userSpaceOnUse"表示<pattern>的宽度和长度是实际的像素值。然后，指定这个模式去填充下面的矩形

14. image 用于插入图片文件
    <image xlink:href="path/to/image.jpg"
        width="50%" height="50%"/>
    <image>的xlink:href属性表示图像的来源

15. animate 用于产生动画效果
     <rect x="0" y="0" width="100" height="100" fill="#feac5e">
        <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
    </rect>
    矩形会不断移动，产生动画效果

    <animate>的属性含义如下。
    attributeName：发生动画效果的属性名。
    from：单次动画的初始值。
    to：单次动画的结束值。
    dur：单次动画的持续时间。
    repeatCount：动画的循环模式

16. animateTransform <animate>标签对 CSS 的transform属性不起作用，如果需要变形，就要使用<animateTransform>标签

    <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
        <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />
    </rect>

    <animateTransform>的效果为旋转（rotate），这时from和to属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转中心的坐标。from="0 200 200"表示开始时，角度为0，围绕(200, 200)开始旋转；to="360 400 400"表示结束时，角度为360，围绕(400, 400)旋转

