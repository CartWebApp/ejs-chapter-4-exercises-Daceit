function range(start, end, step = 1) {
  // Add code.
  let bird = []
  if (start < end) {
    for (let x = start; x <= end; x++) {
      bird.push(x)
    }
  } else if(start > end) {
    for (let i = start; i >= end; i = i -1) {
      bird.push(i)
    }
  } else {
    bird.push(step)
  }
  return bird
}
console.log(range(901,1000))

function sum(numbers) {
  // Add code.
  result = 0
  for (const a of numbers){
    result = a + result
  }
  return result
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
