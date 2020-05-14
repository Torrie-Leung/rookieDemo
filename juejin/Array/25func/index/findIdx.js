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


function findIndex(array, callback){
  const { length } = array;
  for(let index = 0; index < length; index += 1){
    const value = array[index];
    if(callback(value,index,array)){
      return index;
    }
  }
  return -1;
}


logOperation('findIndex', [1, 2, 3, 4, 5], array => findIndex(array, number => number === 3));
