/**
 * create a method that will filter an array of objets based on key or value
 * input:
 * const thing = [
 *   {
 *     'animal': 'dog',
 *     'name': 'billy'
 *   },
 *   {
 *     'animal': 'cat',
 *     ''name'': 'pickles'
 *   }
 * ]
 * const excludes = [
 *   k: 'animal',
 *   v: 'dog'
 * ]
 * output:
 * [
 *   {
 *     'animal': 'cat',
 *     ''name'': 'pickles'
 *   }
 * ]
 */
const excludedFilters = (items, excludes) => {
  const excludedItems = [...items];

  for (let i = 0; i < excludes.length; i++) {
    const {
      k,
      v
    } = excludes[i];

    for (let j = 0; j < excludedItems.length; j++) {
      if (excludedItems[j][k] === v) {
        excludedItems.splice(j, 1)
      }
    }
  }

  return excludedItems;
}

module.exports = excludedFilters;
