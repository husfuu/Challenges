// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
function countdown(n){
  if (n < 1){
    return []
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray
  }

  // result.push(n)
  // countdown(n - 1);
  // return result
}

console.log(countdown(5))