const fs = require('fs')
// relative path: 相对的是命令行工具的当前工作目录
fs.readFile('./greeting.js','utf-8',(err,doc) => {
  console.log(err);
  console.log(doc);
})

// 使用__dirname获取绝对路径

const path = require('path')
fs.readFile(path.join(__dirname,'greeting.js'),'utf-8',(err,doc) => {
  console.log(__dirname,'greeting.js');
})