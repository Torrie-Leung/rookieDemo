const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db')

const app = express();

const port = 8000;
app.use(bodyParser.urlencoded({extended: true}));

// require('./app/routes')(app, {})
// app.listen(port, ()=>{
//   console.log('We r live on ' + port);
// })

MongoClient.connect(db.url,{ useUnifiedTopology: true },(err,database) => {
  let db = database.db()
  if(err) return console.log('connect err:',err);
  require('./app/routes')(app, db)
  app.listen(port, ()=>{
    console.log('We r live on ' + port);
  })
})