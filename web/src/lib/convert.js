import numeral from 'numeral';
import moment from 'moment';

/**
 * Captilize the first letter of the input string
 * e.g.
 *  this is a test -> This is a test
 *  the Eiffel Tower -> The Eiffel Tower
 *  /index.html -> /index.html
 * @param  {String} string Input string to capitalize
 * @return {String}        Capitalized string
 */
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Capitalize every word in the given string
 * @param  {String} string
 * @return {String}
 */
export function capitalizeEveryWord(string) {
    let words = string.split(' ');
    let idx = 0;
    words.map((word) => {
        words[idx] = capitalizeFirstLetter(word);
        idx++;
    });
    return words.join(' ');
}

/**
 * Format number to currency
 * @param  {float} number
 * @return {String} A currency formatted string
 */
export function formatNumberToCurrency(number) {
    return numeral(number).format('$0,0')
}

/**
 * Format number to currency with cents
 * @param  {float} number
 * @return {String} A currency formatted string
 */
export function formatNumberToCurrencyWithCents(number) {
    return numeral(number).format('$0,0.00')
}

/**
 * Format date to a readable string
 * @param date
 */
export function formatToReadableDateString(date) {
    return moment(date).format("MMM Do, YYYY");
}

/**
 * Convert a string to integer if it is a dollar value
 * @param value
 */
export function convertDollarStringToInt(value) {
    if(/^\$[0-9]*$/.test(value)) {
        return Number(value.replace(/[^0-9\.]+/g,""));
    }
    return value;
}