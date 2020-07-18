/**
 *  A simple util function which accepts N arguments
 *
 * @returns true if all arguments are valid real numbers and false if any arguments aren't
 */
export const isNumber = function() {
    for (let i = 0; i < arguments.length; i++) {
        const n = arguments[i];
        if (typeof n !== "number" || isNaN(n)) {
            return false;
        }
    }
    return true;
};
