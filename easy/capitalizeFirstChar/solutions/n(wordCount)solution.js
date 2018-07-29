function capitalizeFirstChar(str) {
  const words = str.split(' ');
  const result = [];

  for(let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(' ');
}