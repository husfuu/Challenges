function reverseString(s) {
  try {
    const result = s.split('').reverse().join('');
    console.log(result);
    return;
  } catch (err) {
    console.log('s.split is not a function');
    console.log(s);
  }
}
