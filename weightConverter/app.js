const lbsInput = document.getElementById('lbsInput')
const gramsOutput = document.getElementById('gramsOutput')
const kgramsOutput = document.getElementById('kgramsOutput')
const ozOutput = document.getElementById('ozOutput')
lbsInput.addEventListener('input',function(e){
  let lbs = e.target.value
  gramsOutput.innerHTML = lbs/0.0022046
})