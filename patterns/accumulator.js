/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") {
    return NaN;
  } else if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 1;
  } else {
    let number = 1;
    for (let i = 1; i <= n; i++) {
      number *= i;
    }
    return number;
  }
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") {
    return null;
  } else if (n <= 0) {
    return [];
  } else {
    let numArr = [];
    for (let i = 1; i <= n; i++) {
      numArr.push(i);
    }
    return numArr;
  }
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  let longestStr = "";
  let strNum = 0;
  for (let string of strings) {
    if (string.length > strNum) {
      longestStr = string;
      strNum = string.length;
    }
  }
  return longestStr;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let attendanceRecord = 0;
  for (let student of attendance) {
    if (student) {
      attendanceRecord += 1;
    }
  }
  return attendanceRecord;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  } else {
    let returnString = "";
    for (const letter of dna) {
      if (letter === "T") {
        returnString += "A";
      } else if (letter === "A") {
        returnString += "T";
      } else if (letter === "G") {
        returnString += "C";
      } else if (letter === "C") {
        returnString += "G";
      }
    }
    return returnString;
  }
  // if (typeof dna !== "string") {
  //   return null;
  // } else if (dna === "T") {
  //   return "A";
  // } else if (dna === "A") {
  //   return "T";
  // } else if (dna === "C") {
  //   return "G";
  // } else if (dna === "G") {
  //   return "C";
  // }
}

complementDNA("TAGC");
