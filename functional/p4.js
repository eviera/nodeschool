function getShortMessages(messages) {
  return messages.map(function(x) {
    return x.message;
  }).filter(function(x) {
    return x.length < 50;
  })
}

module.exports = getShortMessages
