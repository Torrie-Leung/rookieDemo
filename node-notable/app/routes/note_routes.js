module.exports = function(app, db){
  // post
  app.post('/notes', (req,res) => {
    // create the note here
    // console.log(req.body);
    // res.send('hey dummy~')
    const note = {text: req.body.body, title: req.body.title};
    db.collection('notes').insertOne(note,(err, result) => {
      if(err){
        res.send({'err':'err occured'})
      }else{
        res.send(result.ops[0])
      }
    })
  })
}