/*
  Given two strings, write a method to devide if one is permutastion of the others
 */

function isPermutation(strA, strB) {
  if (
    strA === null ||
    strA === undefined ||
    strB === null ||
    strB === undefined
  ) {
    return false;
  }
  if (strA.length !== strB.length) {
    return false;
  }

  const mapA = convertStrToMap(strA);
  const mapB = convertStrToMap(strB);

  // deconsctruct entries
  for (let [key, value] of mapA.entries()) {
    if (!mapB.has(key) || mapB.get(key) !== value) {
      return false;
    }
  }

  return true;
}

function convertStrToMap(str) {
  const charArray = str.split("");
  const map = new Map();

  for (let char of charArray) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}

module.exports = isPermutation;
