const str = 'chimp'
// console.log(str.length);
const phrase = "We face major issues like economic restructuring, a shrinking workforce, and demographic changes"
console.log(phrase.indexOf('c'));
console.log(phrase.indexOf('c', 6));

let idx = phrase.indexOf('c')
let num = 0
while(idx !== -1){
  console.log(idx);
  num ++
  idx = phrase.indexOf('c',idx+1)
}
console.log(`c in phrase appears ${num} times`);