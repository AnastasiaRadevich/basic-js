const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const numSampleActivity = parseFloat(sampleActivity);

  if(numSampleActivity <= 0 || isNaN(numSampleActivity) || numSampleActivity > MODERN_ACTIVITY) {
      return false;
  } else {
      const k = 0.693 / HALF_LIFE_PERIOD;
      let t = Math.log((MODERN_ACTIVITY / numSampleActivity)) / k;
      t = Math.ceil(t);
      return t;

  }
};
