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
export const fenceString = 0;

const fencedString = () => {

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
        return fencedString(string)
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
            return string.fencedString();
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
