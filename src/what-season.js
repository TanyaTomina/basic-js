module.exports = function getSeason(date) {

  if (date) {
    if (date instanceof Date && Object.prototype.toString.call(date) === '[object Date]') {
      if (((date.getMonth() >= 0) && (date.getMonth() <= 1)) || (date.getMonth() === 11)) {
        return 'winter';
      } else if ((date.getMonth() >= 2) && (date.getMonth() <= 4)) {
        return 'spring';
      } else if ((date.getMonth() >= 5) && (date.getMonth() <= 7)) {
        return 'summer';
      } else if ((date.getMonth() >= 8) && (date.getMonth() <= 10)) {
        return 'autumn';
      }
    } else {
      throw Error();
    }
  } else {
    return 'Unable to determine the time of year!';
  }
};
