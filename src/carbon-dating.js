const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k = 0.693/HALF_LIFE_PERIOD;
  let activ = parseFloat(sampleActivity);
  let sample_age = 0;

  if ((activ > 0)&&(activ <= 15)&&(typeof sampleActivity === 'string')) {
    let age = Math.log(MODERN_ACTIVITY/activ)/ k;
    if (!age) {
      return false;
    } else {
      sample_age = Math.ceil(age);
    }
  } else {
      return false;
  }
  return sample_age;
};
