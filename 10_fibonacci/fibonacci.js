const fibonacci = function (n) {
    let fibPrev = 0;
    let fibStart = 1;

    let count;

    if (typeof n !== 'number') {
        count = parseInt(n);
    } else {
        count = n;
    }
    if (count < 0) {
        return 'OOPS';
    }

    if (count == 0) return 0;

    for (let i = 2; i <= count; i++) {
        let current = fibPrev + fibStart; // 0 + 1
        fibPrev = fibStart; // 1
        fibStart = current;
    }
    return fibStart;
};

// Do not edit below this line
module.exports = fibonacci;
