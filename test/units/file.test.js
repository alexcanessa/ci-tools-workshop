import { assert } from 'chai';
import fs from 'fs';
import File from '../../src/file';

describe('File', () => {
    let file;

    beforeEach(() => {
        file = new File();

        fs.writeFileSync('test.txt', 'Hello World', 'utf-8');
    });

    describe('Read txt file', () => {
        it('Should return the content of a txt file', () => {
            assert.equal(file.readTXT('test'), 'Hello World');
        });

        it('Should not append a second .txt when present in the filename', () => {
            assert.equal(file.readTXT('test.txt'), 'Hello World');
        });
    });

    afterEach(() => {
        fs.unlinkSync('test.txt');
    });
});
