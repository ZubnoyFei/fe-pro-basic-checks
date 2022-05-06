/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((item) => item.charAt(0).toUpperCase() + word.slice(1)).join();




/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
    let arr = string.split('');
    let result = arr.map(function (item, i) {
        if (i % 2 === 0) {
            return item.toLowerCase();
        } else {
            return item.toUpperCase();
        }
    });

    return result.join('');
}
/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
    if (action === 'uppercase') {
        return string.toUpperCase();
    } else if (action === 'lowercase') {
        return string.toLowerCase();
    } else if (action === 'capitalize') {
        return capitalizeString(string)
    } else if (action === 'fence') {
        return fenceString(string)
    }
}

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action) {
        case "uppercase":
            return string.toUpperCase();
        case "lowercase":
            return string.toLowerCase();
        case "fence":
            return string.fenceString();
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = 0;

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = 0;
