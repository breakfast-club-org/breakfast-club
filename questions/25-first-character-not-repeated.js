/**
 * Write a function that accepts a string and finds the first character that isn't repeated
 *
 * write a firstCharacterNotRepeated(str)
 * where:
 *   str - string
 */
const firstCharacterNotRepeated = (str) => {
  /* implmentation */
  const storage = {};

  for (let i = 0; i < str.length; i++) {
    let character = str[i];

    if (storage[character]) {
      storage[character] = storage[character] + 1;
    } else {
      storage[character] = 1;
    }

    for (character in storage) {
      if (storage[character] === 1) {
        return character;
      }
    }
  }
}

module.exports = firstCharacterNotRepeated;
