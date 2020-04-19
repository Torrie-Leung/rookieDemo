function countDown(n){
  for(let i = n; i > 0; i-- ){
    console.log(i)
  }
  console.log('Hooray~')
}
// countDown(3)

// recursive func
function recursiveCountDown(n){
  if(n <= 0){
    console.log('Hooray~ I did a recursion~~')
    return
  }
  console.log(n)
  recursiveCountDown(n-1)
}
// recursiveCountDown(3)

function recursiveSumRange(n,total = 0){
  if(n <= 0){
    console.log(total)
    return
  }
  return recursiveSumRange(n-1,total + n)
}
// recursiveSumRange(3)

const tree = {
  name: 'Clair',
  children: [
    {
      name: 'Haley',
      children: [
        {name: 'Poppy',children:[]},
        {name: 'George',children:[]}
      ]
    },
    {
      name: 'Alex',
      children: []
    },
    {
      name: 'Luke',
      children: []
    }
  ]
}
function printChildrenRecursive(t){
  if(t.children.length === 0){
    return
  }
  t.children.forEach(child => {
    console.log(child.name);
    printChildrenRecursive(child)
  });
}
printChildrenRecursive(tree)