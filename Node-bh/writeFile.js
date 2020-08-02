const fs = require('fs')
const content = 'hey dummy'
fs.writeFile('./demo.txt',content,(err,doc) => {
  if(err != null){
    console.log(err);
    return
  }
  console.log('written');
})