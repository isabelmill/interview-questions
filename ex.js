// factorial with recursion 

function factorial(num) {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log('factorial(num):', factorial(3));

// Fibonachi all functions recursive and not

function recusciveFib(num) {
    if (num < 2) {
        return num
    }
    return recusciveFib(num - 1) + recusciveFib(num - 2)
}

console.log(' recusciveFib(num):', recusciveFib(4));

function recursiveMakeFib(length) {
    // arrFib = [0, 1]
    // if (arrFib.length === length) {
    //     return arrFib
    // }
    // arrFib.push(arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2])
    // console.log('arrFib:', arrFib);
    // recursiveMakeFib(5)
    arrFib = [0, 1]
    while (arrFib.length <= length) {
        arrFib.push(arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2])
    }
    return arrFib
}
// console.log('recursiveMakeFib(length):', recursiveMakeFib(5));

// Linear and binary Search 

function recursiveBinarySearch(x, arr, start = 0, end = arr.length - 1) {

    mid = Math.floor((start + end) / 2)
    if (x === arr[mid]) return console.log('found it!');
    if (x < arr[mid]) {
        return recursiveBinarySearch(x, arr, start, mid - 1)
    } else {
        return recursiveBinarySearch(x, arr, mid + 1, end)
    }
    return -1
}

let arr = [1, 2, 6, 9, 11, 50, 80]
// console.log('recursiveBinarySearch', recursiveBinarySearch(50, arr, 0, arr.length - 1));
if (recursiveBinarySearch(50, arr, 0, arr.length - 1)) console.log('yas');
else console.log('no')



function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;
}


// Validate balanced parentheses
// First input: {[({})]}
// First output: true
// Second input: {[({})}
// Second output: false


function isValid(str) {
    const stack = [];
    const characters = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (const char of str) {
        if (!characters[char]) {
            stack.push(char);
        } else if (stack.pop() !== characters[char]) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log('isValid(str):', isValid('{[({})}'));

// The exercise they have inside the drive 
// Calculate the neighbors
output = [3, 1, 4, 1]
gMat = [
    [1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0]
]
// console.log('countAdjacent1s', countAdjacent1s(gMat));
function countAdjacent1s(mat) {
    const matCopy = mat.map(row => [...row])
    res = []

    for (var i = 0; i < matCopy.length; i++) {
        for (var j = 0; j < matCopy[i].length; j++) {
            if (matCopy[i][j] === 1) {
                res.push(recCountAdjacent1s({ i, j }))
            }
        }
    }

    return res;

    function recCountAdjacent1s(location) {
        if (matCopy[location.i][location.j] !== 1) return 0;
        matCopy[location.i][location.j] = 0;
        var adjacentSum = 1;

        for (var i = location.i - 1; i <= location.i + 1; i++) {
            if (i < 0 || i >= matCopy.length) continue;
            adjacentSum += recCountAdjacent1s({ i, j: location.j })
        }
        for (var j = location.j - 1; j <= location.j + 1; j++) {
            if (j < 0 || j >= matCopy[location.i].length) continue;
            adjacentSum += recCountAdjacent1s({ i: location.i, j })
        }

        return adjacentSum
    }
}

// השמת לולאת שכנים 
