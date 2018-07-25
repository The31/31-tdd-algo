function chunk(array, size) {
  let copy = array.slice(0);
  let result = [];
  (recurse = () => {
    let chunkArr = [];
    for(let i = 0; i < size; i++){
      if(copy[0]){
        chunkArr.push(copy.splice(0,1)[0]);
      }
    }
    result.push(chunkArr);
    if(copy[0]){
      recurse();
    }
  })();
  return result;
}
