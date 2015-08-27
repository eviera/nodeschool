function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(x) {
      return goodUsers.some(function(y) {
        return y.id == x.id;
      });
    });
  };
}

module.exports = checkUsersValid
