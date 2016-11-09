export default class Database {
    constructor(data = {}) {
        this.data = data;
    }

    /**
     * Look for a filename in the instance data and return the content
     *
     * @param  {String}
     *
     * @return {String|Boolean}
     */
    read(filename) {
        return this.data[filename] || false;
    }

    /**
     * Insert a filename => content in the data
     *
     * @param  {String} filename
     * @param  {String} content
     *
     * @return {String}
     */
    insert(filename, content = '') {
        this.data[filename] = content;

        return content;
    }

    /**
     * Delete a filename from the data
     *
     * @param  {String} filename
     */
    delete(filename) {
        delete this.data[filename];
    }
}
