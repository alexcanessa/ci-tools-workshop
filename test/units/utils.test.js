import { assert } from 'chai';
import Utils from '../../src/utils';

describe('Utils', () => {
    let utils;

    beforeEach(() => {
        utils = new Utils();
    });

    describe('Get filename', () => {
        it('Should always return a string', () => {
            assert.typeOf(utils.getFilename('/root/dir/file.ext'), 'string', 'Given a simple path');
            assert.typeOf(utils.getFilename(), 'string', 'No arguments');
            assert.typeOf(utils.getFilename(true), 'string', 'Non string arguments');
        });

        it('Should return the file name and its extension', () => {
            assert.equal(utils.getFilename('/root/dir/file.ext'), 'file.ext', 'With a full path');
            assert.equal(utils.getFilename('root/dir/file.ext'), 'file.ext', 'Path without the first slash');
            assert.equal(utils.getFilename('root/dir/file.suf.ext'), 'file.suf.ext', 'File with suffix');
        });

        it('Should return empty string if the extension is missing', () => {
            assert.equal(utils.getFilename('/root/dir/file'), '', 'Extension missing');
            assert.equal(utils.getFilename('/root/dir/'), '', 'Folder path given');
        });
    });

});
