module.exports = function createDreamTeam(members) {
  let array = [];

  if (Array.isArray(members)) {
    for(let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        let letter = members[i].trim().slice(0, 1).toUpperCase();
        array.push(letter);
      }
    }
    return array.sort().join('');
  } else {
    return false;
  }
};