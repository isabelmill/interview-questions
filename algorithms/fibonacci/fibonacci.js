// Make fibonachi array.length = n - iterarion solution - complexity O(n)

function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}

// Make fibonachi array.length = n - recursive solution - complexity O(2^n)

function recursiveFibonacci(n) {
    if (n <= 2) return 1
    return fibrec(n - 1) + fibrec(n - 2)
}


function binet(n) {
    return Math.round((Math.pow(1.618033988749895, n) - Math.pow(-0.6180339887498949, n)) / 2.23606797749979);
}


// Make fibonachi array.length = n - iterarion solution - complexity O(n)

function memoizationFibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    console.log('memo[n]:', memo[n]);
    return memo[n];
}

// memoizationFibonacci(5)


