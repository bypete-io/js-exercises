const getAge = (birth, death) => {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((acc,cur) => {
        const accAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        const curAge = getAge(cur.yearOfBirth, cur.yearOfDeath);
        return curAge > accAge ? cur : acc;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
