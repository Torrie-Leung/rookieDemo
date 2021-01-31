module.exports = function(app, db){
  app.post('/notes', (req,res) => {
    // create the note here
    console.log(req.body);
    res.send('hey dummy~')
  })
}