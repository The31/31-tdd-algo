function anagrams(stringA, stringB) {
  return cleanAndSort(stringA) === cleanAndSort(stringB);
};

function cleanAndSort(str) {
  return str.replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}