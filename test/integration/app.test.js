import { assert } from 'chai';
import fs from 'fs';
import File from '../../src/file';
import Utils from '../../src/utils';

describe('App', () => {
    let file;
    let utils;

    beforeEach(() => {
        file = new File();
        utils = new Utils();
    });

    it('Should get the txt content from a path', () => {
        const filePath = '/test/to/ciao.txt';
        const filename = utils.getFilename(filePath);

        fs.writeFileSync(filename, 'Hello World')

        // assert.equal(file.readTXT(filename), 'Hello World');

        fs.unlinkSync(filename);
    });
})
