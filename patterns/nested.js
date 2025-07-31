// import { format } from "vitest/utils.js";

/**
 * @param {number} rows
 * @param {number} cols
 * @returns {string[][]} an array containing `rows` arrays of `cols` elements each.
 * Each element is the string "-".
 * @returns `null` if either argument is not a number
 * @returns `[]` if either argument is 0 or negative
 */
export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

/**
 * A 'triangle' is 2D array where each inner array has one more element than the previous.
 *
 * For example, this is a 2x2 triangle:
 * [
 *   ["-"],
 *   ["-", "-"]
 * ]
 *
 * @param {*} size - the number of rows in the triangle
 * @returns {string[][]} a triangle with `side` rows
 * @returns `null` if `size` is not a number
 * @returns `[]` if `size` is 0 or negative
 */
export function makeTriangle(size) {
  if (typeof size !== "number") return null;
  if (size <= 0) return [];

  let triangle = [];
  for (let row = 1; row <= size; row++) {
    let formatArr = [];
    for (let char = 1; char <= row; char++) {
      formatArr.push("-");
    }
    triangle.push(formatArr);
  }
  return triangle;
}

/**
 * @param {string[]} words
 * @param {string} letter - a single character
 * @returns {number}  the number of times `letter` appears in all the words
 * @returns `0` if `letter is not a string
 */
export function countLetter(words, letter) {
  if (typeof letter !== "string") return 0;

  let wordCounter = 0;
  for (let index = 0; index < words.length; index++) {
    for (let char = 0; char < words[index].length; char++) {
      // console.log(words[index]);
      // console.log(words[index].length);
      if (words[index][char] === letter) {
        wordCounter += 1;
      }
    }
  }

  return wordCounter;
}

countLetter(["aca", "bcA", "abc"], "a");
