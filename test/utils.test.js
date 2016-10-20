import { assert } from 'chai';
import Utils from '../src/utils';

describe('Utils', () => {
    let utils;

    beforeEach(() => {
        utils = new Utils();
    });

    describe('Sum', () => {
        it('Should return the sum of two the arguments', () => {
            assert.equal(utils.sum(1, 2), 3, 'Two positive ints');
            assert.equal(utils.sum(-1, 2), 1, '1 positive one negative');
        });

        it('Should return NaN', () => {
            assert.equal(utils.sum(1, 'a'), 'NaN', 'If a string passed');
        });
    });

})
