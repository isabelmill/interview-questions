// Find the missing number in a given integer array of 1 to 100

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const findMissingNum = (arr) => {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 != arr[i + 1]) {
            return arr[i] + 1;
        }
    }
    return false;
}
console.log(findMissingNum(arr)); // Returns 9, the missing number

// Find a duplicate number in an array of integers

const arr2 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

const findDupes = (arr) => {
    const observed = {};
    for (let i = 0; i < arr.length; i++) {
        if (observed[arr[i]]) {
            return arr[i]
        } else {
            observed[arr[i]] = arr[i];
        }
    }

    return false;
}
console.log(findDupes(arr2)); // Returns 7

// Find the largest and smallest number in an unsorted array of integers
const arr3 = [1, 2, 3, 4, 100];

const findMaxMin = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }

    return {
        "max": max,
        "min": min
    };
}
console.log(findMaxMin(arr3)); // Returns object { "max": 100, "min": 1 }

// Return an array showing the cumulative sum at each index of an array of integers

let arr4 = [1, 3, 5, 7];
const cumulativeSum = list => {
    let result = [list[0]];

    for (let i = 1; i < list.length; i++) {
        result.push(list[i] + result[i - 1]);
    }

    return result;
}
console.log(cumulativeSum(arr4)); // Returns [1, 4, 9, 16]

// Find all duplicate numbers in an array with multiple duplicates

const arr5 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];
const returnMultipleDupesArray = (arr) => {
    let observed = {};
    let dupesArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (observed[arr[i]]) {
            if (observed[arr[i]] === 1) {
                dupesArray.push(arr[i]);
            }

            observed[arr[i]] = observed[arr[i]] + 1;
        } else {
            observed[arr[i]] = 1;
        }
    }

    return dupesArray;
}
console.log(returnMultipleDupesArray(arr5)); // prints [1, 6, 7, 10]

// Remove all duplicates from an array of integers

const arr6 = [1, 1, 1, 1, 1, 1, 1];
const removeDupes = (arr) => {
    let result = [];
    let previous = arr[0];
    result[0] = previous;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] != previous) {
            result.push(arr[i]);
        }

        previous = arr[i];
    }

    return result;
}
console.log(removeDupes(arr6)); // prints [1]

// check prime 

function isPrime(n) {
    var divisor = 2;

    while (n > divisor) {
        if (n % divisor == 0) {
            return false;
        }
        else
            divisor++;
    }
    return true;
}

//   > isPrime(137);
//     = true
//     > isPrime(237);
//     = false

// find prime factors 

function primeFactors(n) {
    var factors = [],
        divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}

// > primeFactors(69);
//   = [3, 23]

// Greatest Common Divisor

function greatestCommonDivisor(a, b) {
    var divisor = 2,
        greatestDivisor = 1;

    //if u pass a -ve number this will not work. fix it dude!!
    if (a < 2 || b < 2)
        return 1;

    while (a >= divisor && b >= divisor) {
        if (a % divisor == 0 && b % divisor == 0) {
            greatestDivisor = divisor;
        }
        divisor++;
    }
    return greatestDivisor;
}

//   > greatestCommonDivisor(14, 21);
//     =7 
//   > greatestCommonDivisor(69, 169);
//     = 1


function greatestCommonDivisor2(a, b) {
    if (b == 0)
        return a;
    else
        return greatestCommonDivisor2(b, a % b);
}

// remove Duplicate

function removeDuplicate(arr) {
    var exists = {},
        outArr = [],
        elm;

    for (var i = 0; i < arr.length; i++) {
        elm = arr[i];
        if (!exists[elm]) {
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
}

//   > removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
//     = [1, 3, 5, 6, 7, 8]


// merge two sorted array

function mergeSortedArray(a, b) {
    var merged = [],
        aElm = a[0],
        bElm = b[0],
        i = 1,
        j = 1;

    if (a.length == 0)
        return b;
    if (b.length == 0)
        return a;
    /* 
    if aElm or bElm exists we will insert to merged array
    (will go inside while loop)
     to insert: aElm exists and bElm doesn't exists
               or both exists and aElm < bElm
      this is the critical part of the example            
    */
    while (aElm || bElm) {
        if ((aElm && !bElm) || aElm < bElm) {
            merged.push(aElm);
            aElm = a[i++];
        }
        else {
            merged.push(bElm);
            bElm = b[j++];
        }
    }
    return merged;
}

//   > mergeSortedArray([2,5,6,9], [1,2,3,29]);
//    = [1, 2, 2, 3, 5, 6, 9, 29]


// factorial with recursion 
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}