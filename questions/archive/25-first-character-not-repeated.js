/**
 * Write a function that accepts a string and finds the first character that isn't repeated
 *
 * write a firstCharacterNotRepeated(str)
 * where:
 *   str - string
 */
let str = "aaacdcbede"

const firstCharacterNotRepeated = (str) => {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return console.log('no single characters');;
}

firstCharacterNotRepeated(str);

module.exports = firstCharacterNotRepeated;