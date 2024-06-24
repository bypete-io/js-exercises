const repeatString = function(string, num) {
    if (num < 0 ) return 'ERROR';
    let phrase = "";
    for (let index=0; index < num; index += 1){
        phrase += string;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
