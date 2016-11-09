import { assert } from 'chai';
import fs from 'fs';
import File from '../../src/file';
import Utils from '../../src/utils';

describe('App', () => {
    let file;
    let utils;
    let filePath;
    let filename;

    beforeEach(() => {
        file = new File();
        utils = new Utils();
        filePath = '/test/to/ciao.txt';
        filename = utils.getFilename(filePath);

        fs.writeFileSync(filename, 'Hello World')
    });

    it('Should get the txt content from a path', () => {
        assert.equal(file.readTXT(filename), 'Hello World');
    });

    afterEach(() => {
        fs.unlinkSync(filename);
    });
})
