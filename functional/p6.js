function countWords(inputWords) {
  return inputWords.reduce(function(accumObj, x) {
    var actualValue = accumObj[x];
    accumObj[x] = (actualValue || 0) + 1;
    return accumObj;
  }, {});
}

module.exports = countWords
