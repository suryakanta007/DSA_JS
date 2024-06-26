var uniqueOccurrences = function(arr) {
    let countMap = new Map();
    for (const num of arr) {
        countMap.set(num,(countMap.get(num)||0)+1);
    }
    let countSet = new Set();
    for (const value of countMap.values() ) {
        if(countSet.has(value)){
            return false;
        }
        countSet.add(value);
    }
    return true;
};

