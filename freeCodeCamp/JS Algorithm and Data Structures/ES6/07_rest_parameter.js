const sum = (...args) => {
    console.log(args)
    return args.reduce((a, b) => a + b, 0);
  }
  
  console.log(sum(0, 1, 2)) 
  // [ 0, 1, 2 ]
  // 3
  console.log(sum(1, 2, 3, 4))
  // [ 1, 2, 3, 4 ]
  // 10
  console.log(sum(5))
  // [ 5 ]
  // 5
  console.log(sum())
  // []
  // 0