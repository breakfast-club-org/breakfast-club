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

const sortString = (str) => {
  return str.split('').sort().join('');
}

const anagramCheck = (strOne, strTwo) => {
  if (typeof strOne !== 'string' && typeof strTwo !== 'string') return false;

  strOne = strOne.replace(/[^\w]/g, "").toLowerCase();
  strTwo = strTwo.replace(/[^\w]/g, "").toLowerCase();

  if (strOne === strTwo) return false;
  if (strOne.length !== strTwo.length) return false;

  return (sortString(strOne) === sortString(strTwo));
}

module.exports = anagramCheck;