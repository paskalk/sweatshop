function getSum(limit){
    let sum  = 0;

    for (i = 0; i < limit; i++){
        sum += getFromSQL(i);
    }
    console.log(sum.toString());
    return sum;
}

/* Simulate a stored procedure call*/
function getFromSQL(val){
    let result = 0;
    let rowCount = 14042;
    let valLimit = 172;
    let where = 970;

    if (val < where){
        if (val < valLimit){
            result = rowCount * val;
        } else {
            result = rowCount * valLimit;
        }
    }
    
    return result;
}

console.log(getSum(996));
console.log(getFromSQL(530));