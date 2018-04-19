/*
  implement a function to conver space in string to %20.
  The end of the string has plenty space
  argument 1 is string,
  argument 2 is the length of valid string.

  eg.
  Input:  "Mr John Smith   ", 13
  Output: "Mr%20John%20Smith"
*/

function URLify(str, length) {
	if (!str || length <= 0) {
    return "";
	}

	if (str.length < length) {
		return null;
	}

  return str.slice(0, length).split(" ").join("%20");
}

module.exports = URLify;