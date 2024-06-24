const sumAll = function(min, max) {
    if (min < 0 || max < 0){
        return 'ERROR'
    }
    if (typeof min !== 'number' || typeof max !== 'number'){
        return 'ERROR'
    }
    
    let range = [min, max];
    
    range.sort();
    let sum = 0;

    for (let index = range[0]; index <= range[1]; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
