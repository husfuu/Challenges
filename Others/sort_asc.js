
const contoh = [10, 2, 5, 7, 8, 10, 11, 20, 99, 1, 0, 5, 4];

for (let i = 0; i < contoh.length; i++) {
  min_index = i;
  // check all elements, whether they're small than element with current min index or not
  for (let j = i + 1; j < contoh.length; j++) {
    if (contoh[j] < contoh[min_index]) {
      // search element that less than element with min_index
      min_index = j;
    }
  }
  
  // swap the element's position
  let temp =contoh[min_index];
  contoh[min_index] = contoh[i];
  contoh[i] = temp;
}

console.log(contoh);