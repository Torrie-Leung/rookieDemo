function logOperation(operationName, array, callback) {
 const input = [...array];
 const result = callback(array);

 console.log({
   operation: operationName,
   arrayBefore: input,
   arrayAfter: array,
   mutates: mutatesArray(input, array), // shallow check
   result,
 });
}
function mutatesArray(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return true;
  }

  for (let index = 0; index < firstArray.length; index += 1) {
    if (firstArray[index] !== secondArray[index]) {
      return true;
    }
  }

  return false;
}



function reduce(array, callback, initValue){
  const { length } = array;

  let acc = initValue;
  let startAtIndex = 0;

  if(initValue === undefined){
    acc = array[0];
    startAtIndex = 0;
  }

  for(let index = startAtIndex; index < length; index += 1){
    const value =array[index];
    acc = callback(acc, value, index, array)
  }

  return acc;
}
logOperation('reduce', [1, 2, 3, 4, 5], array => reduce(array, (sum, number) => sum + number, 0));
