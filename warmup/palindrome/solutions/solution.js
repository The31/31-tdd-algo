function palindrome(str) {
  const splitted = str.split('').reverse();
  for(let i = 0; i < str.length/2; i++){
    if(str[i] !== splitted[i]){
      return false;
    }
  }
  return true;
}