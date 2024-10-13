const sumAll = function(num1, num2) {
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 <0 || num2 <0)
        return "ERROR";
    let sumAll = 0;
    let i = Math.min(num1,num2);
    num2 = Math.max(num1, num2);
    for(; i<=num2; i++){
        sumAll += i;
    }
    return sumAll;
};

console.log(sumAll(6,4));

// Do not edit below this line
module.exports = sumAll;
