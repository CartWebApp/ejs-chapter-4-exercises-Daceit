function arrayToList(arr) {
  // Add code.
  let newarray = []
  for (let x = 0; x < arr.length; x++) {
    let y =arr[x]
    newarray.unshift(x)
  }
  let list = null;
  const m = arr.length
  for (let a = 0; a < arr.length; a++) {
    let y = newarray.splice(0,1);
    list = {value: x, rest: list}
  }
  return list;
}

function listToArray(list, arr) {
  // Add code.
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
