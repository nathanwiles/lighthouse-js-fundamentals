function concat (array1, array2) {
  let newArray = array1;
  for (let value of array2) {
    newArray.push(value);
  }
  return newArray;
}
