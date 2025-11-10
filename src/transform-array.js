const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let changeArr = [...arr];
  if (changeArr.length === 0) {
    return changeArr;
  } else {
    let prev = 0;
    let next = 0;
    for (let i = 0; i < changeArr.length; i++) {
      if (changeArr[i] === "--double-next") {
        next = changeArr[i + 1];
        prev = "double";
        if (i + 1 > changeArr.length - 1) {
          changeArr.splice([i], 1);
        } else {
          changeArr.splice([i], 1, changeArr[i + 1]);
        }
      } else if (changeArr[i] === "--discard-prev") {
        if (prev === 0) {
          prev = "discard";
        }
        if (i === 0) {
          changeArr.splice([i], 1);
          changeArr.splice(
            [changeArr.length - 1],
            0,
            changeArr[changeArr.length - 1]
          );
        }
        if (next !== 0 && prev === "discard") {
          changeArr.splice([i], 1);
        } else if (next !== 0 && prev === "double") {
          changeArr.splice([i - 1], 2);
        } else {
          changeArr.splice([i - 1], 2);
        }
      } else if (changeArr[i] === "--discard-next") {
        prev = "discard";
        next = changeArr[i];
        changeArr.splice([i], 2);
        i = i - 1;
      } else if (changeArr[i] === "--double-prev") {
        if (i === 0) {
          changeArr.splice([i], 1, changeArr[i + 1]);
        }
        if (next !== 0 && prev === "double") {
          changeArr.splice([i], 1, next);
        } else if (next !== 0 && prev === "discard") {
          changeArr.splice([i], 1);
        } else if (i - 1 < 0) {
          changeArr.splice([i], 1);
        } else {
          changeArr.splice([i], 1, changeArr[i - 1]);
        }
      }
    }
    return changeArr;
  }
}

module.exports = {
  transform,
};
