const fibonacci = function(fibonacciCount) {
    if(!Number.isInteger(fibonacciCount) || (fibonacciCount<0)) return "OOPS";
    let fibonacciElements = [1,1]; 
    if(fibonacciCount == 0) return 0;
    else if(fibonacciCount ==1) return fibonacciElements[0];
    else if(fibonacciCount == 2) return fibonacciElements[1];
    else
    {
    for(let i =2; i<fibonacciCount; i++)
    {
        fibonacciElements[i] = fibonacciElements[i-1] + fibonacciElements[i-2];
    }
}
    return fibonacciElements[fibonacciElements.length-1];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
