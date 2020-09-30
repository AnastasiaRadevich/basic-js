const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!(Array.isArray(arr))) throw new Error;
    
    let d;

    let newArr = []

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === `--discard-next`) {
                    d = i + 1;
                    i++;
                } else if (arr[i] === `--discard-prev`) {
                    let remove = newArr.splice(-1, 1);
                } else if (arr[i] === `--double-next`) {
                    newArr.push(arr[++i])
                    i--;
                } else if (arr[i] === `--double-prev`) { if (d !== i - 1) 
                    newArr.push(arr[--i])
                } else {
                     if (d !== i + 1) {
                    newArr.push(arr[i])}
                } 
                }
            
            return newArr;
}

