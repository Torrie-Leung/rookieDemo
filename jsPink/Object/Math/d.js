const arr = [45,4,33]
const arrMax = Math.max(arr)
const arMax = Math.max(...arr)
console.log({arrMax});// 直接传入数组返回NaN
console.log({arMax}); //使用...展开数组
