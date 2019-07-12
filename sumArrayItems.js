myArray = [1,2,3,4,5];

function sumNumbers(arr) {
  let sum = 0;

  for (const item of arr) {
    // console.log(item);
    sum += item;
  }
  return sum
}

console.log(sumNumbers(myArray));