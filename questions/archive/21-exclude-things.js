const items = [
	{
		genre: 'action',
		title: 'tenet',
		rating: 3
	},
	{
		genre: 'comedy',
		title: 'ace ventura pet detective',
		rating: 1
	},
	{
		genre: 'science fiction',
		title: 'matrix',
		rating: 2
	},
	{
		genre: 'horror',
		title: 'rings',
		rating: 1
	},
	{
		genre: 'comedy',
		title: 'the mask',
		rating: 4
	}
];

const excludes = [
	{ k: 'genre', v: 'action' },
	{ k: 'title', v: 'matrix' },
	{ k: 'rating', v: 1 }
];

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

excludedFilters(items, excludes);