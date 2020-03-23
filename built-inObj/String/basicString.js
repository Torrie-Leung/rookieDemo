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
console.log(str.charAt(3)); // m
for(let i = 0; i<str.length;i++){
  console.log(str.charAt(i))
}
console.log(str.charCodeAt(0)) // 99

let o = {}
for(let i = 0; i < phrase.length; i ++){
  let chars = phrase.charAt(i)
  if(o[chars]){
    o[chars] ++
  } else {
    o[chars] = 1
  }
}
// console.log(o)
let max = 0
let cha = ''
for(let k in o){
  if(k !== ' '){
    if(o[k] > max){
      cha = k
    }
  }
}
console.log(max);
console.log(cha);