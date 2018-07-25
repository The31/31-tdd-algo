function highestCountChar(str) {
  const charMap = {};
  let max = 0;
  let highestCountChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      highestCountChar = char;
    }
  }

  return highestCountChar;
}