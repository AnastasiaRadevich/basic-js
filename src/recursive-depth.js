const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {

    let maxDepth = 0;

    arr.forEach(item => {
      if (Array.isArray(item)) {
        maxDepth = Math.max(this.calculateDepth(item), maxDepth);
    };
    });
    return maxDepth + 1;
};
}
