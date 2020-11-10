/*Given an Array and a Sum value(k) return true if 2
 * integers in the array can be summed together. */

function canSum(arr, k){
    const store = {}
    arr = arr.sort((a, b) => a - b);
    for(let x = 0; x < arr.length; x++){
        const goal = k - arr[x];
        store[goal]= arr[x];
        if(store[arr[x]]){
            console.log(arr[x], store[arr[x]])
            return true;
        }
    }
    return false;
}

console.log(canSum([11,15,2,7], 17));
