// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

function rangeOfNumbers(startNum, endNum) {
  // to create a range of numbers
  if (startNum === endNum){
    return [startNum];
  }
  let a = rangeOfNumbers(startNum, endNum-1);
  a.push(endNum);
  return a
};

console.log(rangeOfNumbers(1, 4))