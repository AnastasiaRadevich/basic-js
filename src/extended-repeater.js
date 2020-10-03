const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let newObj = {
    repeatTimes: options.repeatTimes,
    separator: options.separator,
    addition: options.addition,
    additionRepeatTimes: options.additionRepeatTimes,
    additionSeparator: options.additionSeparator,
}

if(str === null) {
  str = `${null}`
}

if(newObj.repeatTimes === undefined) {
  newObj.repeatTimes = 1;
}

if(newObj.separator === undefined) {
  newObj.separator = '+';
}

if(newObj.addition === undefined) {
  newObj.addition = '';
}

if(newObj.additionRepeatTimes === undefined) {
  newObj.additionRepeatTimes = 1;
}

if(newObj.additionSeparator === undefined) {
  newObj.additionSeparator = '|';
}

let resultStr = [];

for (let i = 1; i <= newObj.repeatTimes; i++) {
      resultStr.push(str)
  
  for (let j = 1; j <= newObj.additionRepeatTimes; j++) {
      resultStr.push(`${newObj.addition}`)
      if (j != newObj.additionRepeatTimes) {
          resultStr.push((newObj.additionSeparator))
      }
  }

  if (i != newObj.repeatTimes) {
      resultStr.push(newObj.separator)
  }
}
resultStr = resultStr.join('');
return resultStr;

};
  