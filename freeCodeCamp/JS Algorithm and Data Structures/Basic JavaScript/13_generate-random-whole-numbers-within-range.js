/*
Generate Random Whole Numbers within a RangePassed

we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.
*/



function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin ;
}



function generateComputerOption(computerOptions) {
  const randomIndex = Math.floor(Math.random() * (computerOptions.length));
  return computerOptions[randomIndex];
}


for (let i=0; i<100; i++){
  randomItem = generateComputerOption(['a', 'b', 'c', 'd'])
  console.log(randomItem);
}



//console.log(randomRange(0, 4));