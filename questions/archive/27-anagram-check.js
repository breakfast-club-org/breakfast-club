/**
 * Write a function that accepts two strings, and checks if they're anagrams of each other.
 * A word is an anagram of another word if both use the same letters in the same quantity, but are arranged differently.
 */

// interface AnagramProps {
//   strOne: String,
//   strTwo: String,
// }

// const anagramCheck = ({strOne, strTwo}: AnagramProps): Boolean => {
//   /* implmentation */
// }

const mapCharacters = (str) => {
  let storage = {};

  for (let character of str) {
    storage[character] = storage[character] + 1 || 1;
  }

  return storage;
}

const anagramCheck = (strOne, strTwo) => {
  if (typeof strOne !== 'string' || typeof strTwo !== 'string') {
    return false;
  }

  const sortedOne = [...strOne].sort().join('');
  const sortedTwo = [...strTwo].sort().join('');

  return (strOne !== strTwo) &&
    (sortedOne === sortedTwo)
}

module.exports = anagramCheck;
