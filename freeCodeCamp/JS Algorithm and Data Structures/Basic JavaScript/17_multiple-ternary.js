// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators


function checkSign(num) {
  return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative"
}

checkSign(10);