/**
 * create an add() that supports two different invocations:
 * 1) single argument: add(1)(2)()...
 * 2) argument list: add(1,2,3...)
 */
function addSingle(n) {
	if (n === undefined) {
		return this.sum;
	}

	return addSingle.bind({sum: this.sum + n});
}

const addMultiple = (nums) => {
	return nums.reduce((a, b) => a + b);
}

const add = (...nums) => {
	switch (nums.length) {
		case 0:
			return 0;
		case 1:
			return addSingle.bind({sum: nums[0]});
		default:
			return addMultiple(nums);
	}
}

module.exports = add;
