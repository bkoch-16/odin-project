function reverseString(input) {
  let output = "";

  let position = input.length - 1;
  while (position >= 0) {
    output += input.slice(position, position + 1);
    position--;
  }
  return output;
}

module.exports = reverseString;
