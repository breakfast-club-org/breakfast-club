const assert = require('chai').assert;
const {
    factorial,
    subSetsOfAString,
    permutationsOfAString
} = require('../questions/03-big-o');

describe('test some functions in BigO', () => {
    describe('#factorial()', () => {
        [
            {n: 0, expected: 1},
            {n: 1, expected: 1},
            {n: 5, expected: 5*4*3*2*1},
            {n: 10, expected: 3628800},
        ].forEach(({n, expected}) => {
            it(`should be ${expected} with n = ${n}`, () => {
                assert.equal(factorial(n), expected);
            });
        });
    });

    describe('#subSetsOfAString()', () => {
        [
            { s: null, expected: [''] },
            { s: '', expected: [''] },
            { s: 'a', expected: ['', 'a'] },
            { s: 'ab', expected: ['', 'a', 'b', 'ab']},
            { s: 'abcd', expected: ['', 'a', 'b', 'c', 'd', 'ab', 'ac', 'ad', 'bc', 'bd', 'cd']}
        ].forEach(({s, expected}) => {
            it(`should work for '${s}'`, () => {
                assert.deepEqual(subSetsOfAString(s), expected);
            });
        });
    });

    describe('#permutationsOfAString()', () => {
        [
            { s: '', exp: [] },
            { s: null, exp: [] },
            { s: 'a', exp: ['a'] },
            { s: 'ab', exp: ['ab', 'ba'] },
            { s: 'abc', exp: ['abc', 'bac', 'bca', 'acb', 'cab', 'cba']},
            { s: 'aab', exp: ['aab', 'aba', 'baa']},
            { s: '1234', exp: ['1234',
                               '1243',
                               '1324',
                               '1342',
                               '1432',
                               '1423',
                               '2134',
                               '2143',
                               '2314',
                               '2341',
                               '2431',
                               '2413',
                               '3124',
                               '3142',
                               '3214',
                               '3241',
                               '3412',
                               '3421',
                               '4123',
                               '4132',
                               '4213',
                               '4231',
                               '4312',
                               '4321',
                              ]
            }
        ].forEach(({s, exp}) => {
            it(`should work for '${s}'`, () => {
                assert.deepEqual(permutationsOfAString(s).sort(), exp.sort());
            });
        });
    });

});