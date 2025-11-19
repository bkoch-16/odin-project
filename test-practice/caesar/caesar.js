function caesarCipher(input, shift) {
  const letterNumber = convertLetterToNumber(input);
  const shiftedLetterNumber = [];
  letterNumber.forEach((item) => {
    if (item >= 97 && item <= 122) {
      if (item + shift > 122) {
        shiftedLetterNumber.push(item + shift - 26);
      } else {
        shiftedLetterNumber.push(item + shift);
      }
    } else if (item >= 65 && item <= 90) {
      if (item + shift > 90) {
        shiftedLetterNumber.push(item + shift - 26);
      } else shiftedLetterNumber.push(item + shift);
    } else {
      shiftedLetterNumber.push(item);
    }
  });
  const numberLetter = convertNumberToLetter(shiftedLetterNumber);
  let output = "";
  numberLetter.forEach((item) => {
    output += item;
  });
  return output;
}

function convertLetterToNumber(input) {
  const letterIndex = [];
  let position = 0;
  while (position < input.length) {
    const letter = input.slice(position, position + 1);
    const charCode = letter.charCodeAt(0);
    letterIndex.push(charCode);
    position++;
  }
  return letterIndex;
}

function convertNumberToLetter(input) {
  const letters = [];
  input.forEach((item) => {
    letters.push(String.fromCharCode(item));
  });
  return letters;
}
module.exports = caesarCipher;
