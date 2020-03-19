module.exports = function countCats(backyard) {
  let regexp = /^\^\^$/;
  let count = 0;

  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (regexp.test(backyard[i][j])) {
        count++;
      }
    }
  }
  return count;
};
