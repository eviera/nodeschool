function countWords(inputWords) {
  return inputWords.map(function (x) {
  	var obj = {};
  	obj[x] = 1;
  	return obj;
  }).reduce(function (x, y) {
  	return x;
  });
  
}

module.exports = countWords