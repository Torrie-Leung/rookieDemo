const lbsInput = document.getElementById('lbsInput')
const gramsOutput = document.getElementById('gramsOutput')
const kgramsOutput = document.getElementById('kgramsOutput')
const ozOutput = document.getElementById('ozOutput')
const output = document.getElementById('output')
output.style.visibility = 'hidden'
lbsInput.addEventListener('input',function(e){
  output.style.visibility = 'visible'
  let lbs = e.target.value
  gramsOutput.innerHTML = lbs/0.0022046
  kgramsOutput.innerHTML = lbs/2.2046
  ozOutput.innerHTML = lbs*16
})