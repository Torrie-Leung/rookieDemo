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

function push(array, ...values){
  const { length: arrayLength } = array;
  const { length: valuesLength } = values;

  for(let index = 0; index < valuesLength; index += 1){
    array[arrayLength + index] = values[index];
  }

  return array.length;
}

function filter(array,callback){
  const result = [];
  const { length } = array;
  for(let index = 0; index < length; index += 1){
    const value = array[index];

    if(callback(value, index, array)){
      push(result, value);
    }
  }
  return result;
}

logOperation('filter', [1, 2, 3, 4, 5], array => filter(array, value => value >= 2));