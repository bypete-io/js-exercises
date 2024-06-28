const getTheTitles = function(books) {
    return books.map((book) => book.title)

    // Reduce method: 
    // return books.reduce((acc, cur) => {
    //     acc.push(cur.title);
    //     return acc;
    // }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
