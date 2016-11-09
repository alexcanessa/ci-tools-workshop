import fs from 'fs';

export default class File {
    /**
     * Read a text file and returns the content
     *
     * @param  {String} filename
     * @return {String}
     */
    readTXT(filename) {
        return fs.readFileSync(`${filename.replace(/\.txt$/, '')}.txt`, 'utf-8');
    }
}
