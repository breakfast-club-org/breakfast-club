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
	const excludedItemValues = excludes.map(item => item.v); // [ 'action', 'matrix', 1 ]

	const filteredItemValues = items.filter(item =>
		!excludedItemValues.includes(item.genre) &&
		!excludedItemValues.includes(item.title) &&
		!excludedItemValues.includes(item.rating));

	console.log('filteredItemValues', filteredItemValues);
	return filteredItemValues;
}

module.exports = excludedFilters;

excludedFilters(items, excludes);