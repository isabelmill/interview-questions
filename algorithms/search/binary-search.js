// Binary Search
// Complexity of  O(log n)
//note that list must be sorted for this function to work

function binarySearch(value, list) {
    let low = 0;    //left endpoint
    let high = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let mid;

    while (found === false && low <= high) {
        mid = Math.floor((low + high) / 2);
        if (list[mid] == value) {
            found = true;
            position = mid;
        } else if (list[mid] > value) {  //if in lower half
            high = mid - 1;
        } else {  //in in upper half
            low = mid + 1;
        }
    }
    return position;
}

let recursiveBinarySearch = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x) {
        return recursiveBinarySearch(arr, x, start, mid - 1);
    }
    else {
        return recursiveBinarySearch(arr, x, mid + 1, end);
        // If element at mid is smaller than x,
        // search in the right half of mid
    }
}