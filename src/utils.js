export default class Utils {
    sum(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return 'NaN';
        }

        return a + b;
    }
}
