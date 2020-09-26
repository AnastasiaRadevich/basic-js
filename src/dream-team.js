const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let arrNames = [];
  if (Array.isArray(members) !== true) return false;
  members.forEach(item => {
      if (typeof item !== 'string') {
          return false;
      } else {
          item = item.split('');
          for (let i = 0; i < item.length; i++) {
              if (item[i] !== ' ') {
                  return arrNames.push(item[i])
              }
          }

      }
  }
  );
  arrNames = arrNames.join('').toUpperCase();
  arrNames = arrNames.split('').sort(function (a, b) {
      if (a > b) {
          return 1;
      }
      if (a < b) {
          return -1;
      }
      return 0;

  })
  return arrNames.join('')

};
