function reverseArray(arr) {
  let newArr = [];
  for ( a of arr) {
  newArr.unshift(a)
  }
  return newArr
 
}

function reverseArrayInPlace(arr) {
  // Add code.
  for (let x = 0; x < arr.length; x++) {
    arr.shift()
  }
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]