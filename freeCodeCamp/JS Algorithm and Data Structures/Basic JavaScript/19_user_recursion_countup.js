function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    console.log(countArray)
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));