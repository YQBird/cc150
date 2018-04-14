/*
  Implement an algorithm to determine if a string has all unique characters.

  Follow up: what if you can't use additional Data structures => in place
 */

function isUnique(str) {
  const set = new Set();

  const charArray = str.split("");
  for (let char of charArray) {
    if (set.has(char)) {
      return false;
    } else {
      set.add(char);
    }
  }

  return true;
}

// follow up
// run time O(n^2)
// function isUnique(str) {
//   const charArray = str.split("");

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (charArray[i] === charArray[j]) {
//         return false;
//       }
//     }
//   }

//   return true;
}

module.exports = isUnique;
