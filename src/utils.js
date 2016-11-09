export default class Utils {
    /**
     * Given a path, return the filename with the extension
     *
     * @param  {String} path
     *
     * @return {String}
     */
    getFilename(path = '') {
        if (typeof path !== 'string' || !path.match(/\.\w+$/g)) {
            return '';
        }

        return path
                .split('/')
                .pop();
    }
}
