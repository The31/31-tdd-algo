function chunk(array, size){
  let result = [];
  let index = 0;
  while(index < array.length){
    let chunked = array.slice(index, index + size);
    result.push(chunked);
    index += size;
  }
  return result;
};