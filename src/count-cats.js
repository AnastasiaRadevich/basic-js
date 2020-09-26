const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let count = 0;
  matrix.forEach(arr => {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === '^^') {
          count++;
      }
      
    }
  });
  return count;
};
