const test = require('tape');
const randomNumberInRange = require('./randomNumberInRange.js');

test('Testing randomNumberInRange', (t) => {
	//For more information on all the methods supported by tape
	//Please go to https://github.com/substack/tape
	t.true(typeof randomNumberInRange === 'function', 'randomNumberInRange is a Function');
	//t.deepEqual(randomNumberInRange(args..), 'Expected');
	//t.equal(randomNumberInRange(args..), 'Expected');
	//t.false(randomNumberInRange(args..), 'Expected');
	//t.throws(randomNumberInRange(args..), 'Expected');
	t.end();
});