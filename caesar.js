const ALPHABETLOW = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABETUP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SPECIAL = ' !@#$%^&*()-_=+[{]};:\'|"/?,<.>`~';

const isLetterLowerCase = function(letter) {
  if (SPECIAL.indexOf(letter) !== -1) { 
    return;
  } else if (letter.toLowerCase() === letter) {
    return true;
  } else if (letter.toUpperCase() === letter) {
    return false;
  } else return;
}

const wrapIt = function(shift) {
  if (shift > 25) {
    shift -= 26;
  } else if (shift < 0) {
    shift += 26;
  }
  if (shift > 25 || shift < 0) {
    return wrapIt(shift);
  } else {
    return shift;
  }
}

const shiftLetter = function(letter, shift, isLowerCase) {
  if (isLowerCase === true) {
    let shiftedLetterPosition = ALPHABETLOW.indexOf(letter) + shift;
    shiftedLetterPosition = wrapIt(shiftedLetterPosition);
    return ALPHABETLOW[shiftedLetterPosition];
  } else if (isLowerCase === false) {
    let shiftedLetterPosition = ALPHABETUP.indexOf(letter) + shift;
    shiftedLetterPosition = wrapIt(shiftedLetterPosition);
    return ALPHABETUP[shiftedLetterPosition];
  } else return letter;
}

const caesar = function(string, shift=0) {
  let shiftedString = '';
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const letterType = isLetterLowerCase(letter);
    shiftedString = shiftedString + shiftLetter(letter, shift, letterType);
  }
  return shiftedString;
}

module.exports = caesar;