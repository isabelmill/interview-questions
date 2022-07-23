// Remove all even integers from an array 

function removingEven(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) newArr.push(arr[i])
    }
    return newArr
}

const array = [4, 1, 9, 10, 15, 22, 5, 14]
console.log('Expected Output:', [1, 9, 15, 5]);
console.log('Got Output:', removingEven(array));