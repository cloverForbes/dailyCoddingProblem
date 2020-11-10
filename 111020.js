/*
  Given an array of integers, return a new array 
  such that each element at index i of the new array 
  is the product of all the numbers in the original 
  array except the one at i.

  For example, if our input was [1, 2, 3, 4, 5], 
  the expected output would be [120, 60, 40, 30, 24]. 
  If our input was [3, 2, 1], the expected output 
  would be [2, 3, 6].

  Bonus Points: No Division
*/

function arrayProduct(arr){
    let product = 1;
    let output = new Array(arr.length);
    for(let x = 0; x < arr.length; x++) {
        product *= arr[x]
    }

    for(let x = 0; x < arr.length; x++) {
        output[x] = product / arr[x];
    }

    return output;
}


console.log(arrayProduct([1,2,3,4,5]))
