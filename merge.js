function merge (array1, array2) {
  let newArray = array1;
    for (let value of array2) {
      let i = 0;
      while (value > array1[i]){
        i++;
      }
      newArray.splice(i, 0, value);
    }
  return newArray;
}
