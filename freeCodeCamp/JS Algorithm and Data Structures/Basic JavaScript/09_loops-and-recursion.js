//Loops//
function sum_loops(arr, n){
	var result = 0;
	for (var i = 0; i < n; i++){
		result += arr[i];
	}
	return result;
}

//Recursion//
function sum_recursion(arr, n) {
  if (n <= 0){
    return 0;
  }
  else {
    return sum_recursion(arr, n-1) + arr[n-1];
  }
}

console.log("Recursion version")
console.log(sum_recursion([1], 0));
console.log(sum_recursion([2, 3, 4], 1));
console.log(sum_recursion([2, 3, 4, 5], 3));
console.log("Loop Recursion")
console.log(sum_loops([1], 0));
console.log(sum_loops([2, 3, 4], 1));
console.log(sum_loops([2, 3, 4, 5], 3));

