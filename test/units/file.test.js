import { assert } from 'chai';
import fs from 'fs';
import File from '../../src/file';

describe('File', () => {
    let file;

    beforeEach(() => {
        file = new File();
    });

    describe('Read txt file', () => {
        it('Should return the content of a txt file', () => {
            fs.writeFileSync('test.txt', 'Hello World', 'utf-8');

            // assert.equal(file.readTXT('test'), 'Hello World');

            fs.unlinkSync('test.txt');
        });
    });
});
