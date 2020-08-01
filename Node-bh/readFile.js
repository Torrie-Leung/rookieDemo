const fs = require('fs')
fs.readFile('./greeting.js','utf-8',(err,doc) => {
  if(err == null){
    console.log(doc);
  }
})