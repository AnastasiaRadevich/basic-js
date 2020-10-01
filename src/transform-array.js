const CustomError = require("../extensions/custom-error");

module.exports =    function transform(arr) {
    if (!(Array.isArray(arr))) throw new Error;

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if ((i===0 && arr[i] === '--double-prev')||(i===arr.length-1 && arr[i] === '--double-next')){
            continue;
        }
        else if (arr[i] === `--discard-next`) {
            i++;
        } else if (arr[i] === `--discard-prev`) {
            if(i-2>=0 && arr[i-2]!=='--discard-next') {
                newArr.splice(-1, 1);
            }
        } else if (arr[i] === `--double-next`) {
            newArr.push(arr[i+1])
        } else if (arr[i] === `--double-prev`) {
            if(i-2>=0 && arr[i-2]!=='--discard-next') {
                newArr.push(arr[i - 1])
            }
        } else {
               newArr.push(arr[i])

        }
    }

    return newArr;
}

