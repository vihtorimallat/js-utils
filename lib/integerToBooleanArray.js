/**
 * Convert an integer to an array of booleans
 * @param {number} number
 * @returns {boolean[]}
 */
export default function(number) {
    return number.toString(2).split('').reverse().map(Number).map(Boolean)
}

