console.log('%c app is running!!! ','color:#fff;background:lightblue')

const width = 100,height=40;
const canvas = document.querySelector('#identify')

identify.onclick = function() {
    freshCode();
}
// canvas 大小
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext('2d')
// 验证码范围
let codeRange = []
// 验证码
let  code = ''

// 随机颜色
// 生成随机色
const randomColor =() =>{
    let colorStr = "#";
    for(let i = 0; i < 6; i++) {
        colorStr += Math.floor(Math.random() * 16).toString(16);
    }
    return colorStr;
}

// canvas背景
const drawBackground =()=>{
    ctx.rect(0,0,width,height)
    ctx.fillStyle = "#b0aa93"
    ctx.fill()
}

// 画干扰线
const drawDisturbLines =()=>{
    for(let i = 0; i < 4; i++) {
        drawOneLine();
    }
}

// 干扰线样式
const drawOneLine = () =>{
    const startX = Math.floor(Math.random() * width);
    const startY = Math.floor(Math.random() * height);
    const endX = Math.floor(Math.random() * width);
    const endY = Math.floor(Math.random() * height);
    ctx.strokeStyle = randomColor();
    ctx.lineWidth = Math.ceil(Math.random() * 2);
    // 线的位置
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    // 闭合的线
    ctx.closePath();
    // 绘出路径
    ctx.stroke();
}

// 干扰点
const drawDisturbDots = () =>{
    for(let i = 0, count = width * height / 100; i < count; i++) {
        drawOneDot();
    }
}

// 单个点样式
const drawOneDot =() =>{
    const ox = Math.floor(Math.random() * width);
    const oy = Math.floor(Math.random() * height);
    ctx.fillStyle = randomColor();
    ctx.beginPath();
    //   圆心ox oy 半径 起始角 结束角
    ctx.arc(ox, oy, 1, 0,    2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

// 生成验证码字母范围
const generateCodeRange =() =>{
    let codeRangeIn = [];
    for(let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        codeRangeIn.push(String.fromCharCode(i));
    }
    for(let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
        codeRangeIn.push(String.fromCharCode(i));
    }
    for(let i = "0".charCodeAt(0); i <= "9".charCodeAt(0); i++) {
        codeRangeIn.push(String.fromCharCode(i));
    }
    codeRange = codeRangeIn;
}

const randomCode=() =>{
    code = "";
    var len = codeRange.length;
    for(let i = 0; i < 4; i++) {
        code += codeRange[Math.floor(Math.random() * len)];
    }
}

// 画文字(数字或字母)
const drawLetters =() =>{
    for(let i = 0, len = code.length; i < len; i++) {
        let offsetX = width * 0.15; // 中间的70%画字母，两边各15%
        // let offsetY = height * 0.15;
        // let lineHeight = height * 0.7;
        let x = i * width * 0.7 / code.length + offsetX;
        let y = height / 2;
        let letter = code[i];
        let fontSize = Math.min(parseInt(height), parseInt(width * 0.7));
        drawOneLetter(letter, x, y, fontSize);
    }
}
// 画一个字
const drawOneLetter = (letter, x, y, fontSize)=> {
    ctx.font = fontSize + "px Times new roman";
    ctx.textBaseline = "middle";
    ctx.fillStyle = randomColor();
    ctx.fillText(letter, x, y);
}
// 清除画布
const clear =() =>{
    ctx.clearRect(0, 0, width, height);
}
// 初始canvas
const initCanvas =()=> {
    canvas.width = width;
    canvas.height = height;
}

const freshCode=() =>{
    clear();
    randomCode();
    initCanvas();
    drawBackground();
    drawDisturbLines();
    drawDisturbDots();
    drawLetters();
    console.log(code);
}

;(function(){
    // canvas 背景色填充
    drawBackground()
    // 画干扰线
    drawDisturbLines()
    // 干扰点
    drawDisturbDots()
    // 二维码内容范围
    generateCodeRange()
    // 刷新二维码
    freshCode()
    

})()