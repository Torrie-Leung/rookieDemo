// 对于能改变自身值的数组方法，日常开发中需要特别注意，尽量避免在循环遍历中去改变原数组的项。

// pop():删除一个数组中的最后的一个元素，并且返回这个元素。如果是栈的话，这个过程就是栈顶弹出。
let popArr = ["chimp", "dog", "cow", "chicken", "mouse"];
let popArrItem = popArr.pop();
console.log(popArr);
console.log(popArrItem);

// push():添加一个或者多个元素到数组末尾，并且返回数组新的长度。如果是栈的话，这个过程就是栈顶压入
let pushArr = ["football", "basketball", "volleyball", "Table tennis", "badminton"];
let pushArrLength = popArr.push("golfball");
console.log(pushArr);
console.log(pushArrLength);