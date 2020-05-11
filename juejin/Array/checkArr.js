// tech blog: https://juejin.im/post/5902d56e1b69e60058c634d6#heading-5
let arr = [];
// check a variable is an array or not before es5
// 1.
arr instanceof Array;
console.log(arr instanceof Array);
// 2.
arr.constructor === Array;
console.log(arr.constructor === Array);
// 3.
Array.prototype.isPrototypeOf(arr);
console.log(Array.prototype.isPrototypeOf(arr));
// 4.
Object.getPrototypeOf(arr) === Array.prototype;
console.log(Object.getPrototypeOf(arr) === Array.prototype);
// 5.
Object.prototype.toString.apply(arr) === '[object Array]';
// but only the 5th aces

// es6
Array.isArray(arr)//true
Array.isArray({0:'a',length:1})//false