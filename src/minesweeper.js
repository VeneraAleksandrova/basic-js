const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = ([i, j]) => [
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  let arr1 = matrix.map((r) => r.map((_) => 0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        let value = arr([i, j]);
        for (let k = 0; k < 8; k++) {
          if (
            value[k][0] >= 0 &&
            value[k][1] >= 0 &&
            value[k][0] < matrix.length &&
            value[k][1] < matrix[i].length
          ) {
            arr1[value[k][0]][value[k][1]]++;
          }
        }
      }
    }
  }

  return arr1;
}

module.exports = {
  minesweeper,
};
