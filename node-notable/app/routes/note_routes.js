module.exports = function(app, db){
  app.post('/notes', (req,res) => {
    // create the note here
    res.send('hey dummy~')
  })
}