function anagrams(stringA, stringB) {
  const aMap = buildCharMap(stringA);
  const bMap = buildCharMap(stringB);
  const aLength = Object.values(aMap).reduce((sum, element) => sum += element);
  const bLength = Object.values(bMap).reduce((sum, element) => sum += element);

  if(aLength !== bLength){
    return false;
  };

  for(let key in aMap) {
    if(aMap[key] !== bMap[key]){
      return false;
    }
  };
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  };

  return charMap;
};