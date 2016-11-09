import { assert } from 'chai';
import fs from 'fs';
import Database from '../../src/database';

describe('Database', () => {
    let db;
    const data = {
        'test.txt': 'Hello World',
        'hello.js': 'console.log(\'ciao\')'
    };

    beforeEach(() => {
        db = new Database(data);
    });

    describe('Read', () => {
        it('Should read the content of a given file', () => {
            assert.equal(db.read('test.txt'), 'Hello World', 'Look for an existing item');
        });

        it('Should return false when the file doesn\'t exist', () => {
            assert.isFalse(db.read('i.dont'), 'A file which is not in the data');
            assert.isFalse(db.read('/test.txt'), 'Slash');
        });
    });

    describe('Insert', () => {
        it('Should insert a filename and its content in the data', () => {
            db.insert('ciao.php', '<?php $hello = "ciao"; ?>');

            assert.equal(db.read('ciao.php'), '<?php $hello = "ciao"; ?>', 'Exists in the data');

            db.delete('ciao.php');
        });
    });

    describe('Delete', () => {
        it('Should remove a specific filename', () => {
            db.insert('otherTest.txt', 'Hi!');
            db.delete('otherTest.txt');

            assert.isFalse(db.read('otherTest.txt'));
        });
    });
});
