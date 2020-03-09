// 字符串字面量类型
// 我们使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种

type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dbclick'); //error