const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanString = string
        .toLowerCase()    
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    const reversed = cleanString.split('').reverse().join('');
    return cleanString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
