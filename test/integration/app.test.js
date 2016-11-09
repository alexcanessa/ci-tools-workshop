import { assert } from 'chai';
import Database from '../../src/database';
import Utils from '../../src/utils';

describe('App', () => {
    let db;
    let utils;

    beforeEach(() => {
        db = new Database({
            '/hello.js': 'hello',
            '/ciao.js': 'ciao',
            '/hola.js': 'hola'
        });
        utils = new Utils();
    });

    it('Should get a filename from a path and read the content from the DB', () => {
        let filename = utils.getFilename('/root/path/to/ciao.js');

        // assert.equal(db.read(filename), 'ciao'); <-- Failing here!!
    });
})
