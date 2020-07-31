const greeting = name => `hey ${name}`
// expoorts是module.exports的别名（地址引用关系）导出对象最终以module.exports为准
module.exports.greeting = greeting;