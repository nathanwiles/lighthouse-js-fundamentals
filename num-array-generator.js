function range (start, end, step){
  let array = [];
  if (start < end && step > 0){
    for (let i = start; i <= end; i += step){
    array.push(i);
    }
  }
  return array;
}
