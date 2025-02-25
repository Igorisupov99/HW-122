// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
    return /\d{3}-[0-9]{3}-[0-9]{3} [0-9]{2}/.test(string)
}


// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
    const str = string.match(/\d{3}-[0-9]{3}-[0-9]{3} [0-9]{2}/).join('')
    return str ? str : ''
}


// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {

}


// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {

}



// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {

}

module.exports = {
    hasSNILS,
    grabSNILS,
    grabAllSNILS,
    hideAllSNILS,
    formatSNILS
};
