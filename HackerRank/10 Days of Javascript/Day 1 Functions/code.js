/*
 * Create the function factorial here
 */
function factorial(n){
    let temp = 1;

    for(let i = 1; i < n+1 ; i++){
        temp = temp * i;
    }
    return temp;
}

console.log(factorial(20));