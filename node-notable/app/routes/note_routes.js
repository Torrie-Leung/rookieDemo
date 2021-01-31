let ObjectID = require('mongodb').ObjectID
module.exports = function(app, db){
  // get
  app.get('/notes/:id',(req,res)=>{
    const id = req.params.id
    const details = {'_id': new ObjectID(id)}
    db.collection('notes').findOne(details,(err,item) => {
      if(err){
        res.send({'err:':'an err has occured'});
      }else{
        res.send(item);
      }
    })
  })
  // post
  app.post('/notes', (req,res) => {
    // create the note here
    // console.log(req.body);
    // res.send('hey dummy~')
    const note = {text: req.body.body, title: req.body.title};
    db.collection('notes').insertOne(note,(err, result) => {
      if(err){
        res.send({'err':'err occured'});
      }else{
        res.send(result.ops[0]);
      }
    })
  })

  // put
  app.put('/notes/:id',(req,res)=>{
    const id = req.params.id
    const details = {'_id': new ObjectID(id)}
    const note = {text: req.body.body, title: req.body.title};
    db.collection('notes').update(details,note,(err,item) => {
      if(err){
        res.send({'err:':'an err has occured'});
      }else{
        res.send(item);
      }
    })
  })

  // delete
  app.delete('/notes/:id',(req,res)=>{
    const id = req.params.id
    const details = {'_id': new ObjectID(id)}
    db.collection('notes').remove(details,(err,item) => {
      if(err){
        res.send({'err:':'an err has occured'});
      }else{
        res.send('Note '+ id + ' deleted!');
      }
    })
  })
}