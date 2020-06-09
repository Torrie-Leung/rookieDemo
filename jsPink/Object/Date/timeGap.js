var date = +new Date() //返回现在距离19700101总毫秒数
console.log({ms:date});

// h5新增--低版本ie 如6，7，8不兼容
console.log({ms: Date.now()});