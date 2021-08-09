/**
 * Convert an array of booleans to an integer
 * @param {...boolean} booleans
 * @returns {number}
 */
export default function booleanArrayToBitmap(...booleans) {
    return parseInt(booleans.map(Number).reverse().join(''), 2)
}

