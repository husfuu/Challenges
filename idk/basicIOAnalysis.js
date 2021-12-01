const nj = require('numjs');
const mathjs = require('mathjs');

// transaction matrix
const A1 = nj.array([[16, 5, 24, 10, 6, 17, 10,	0], 
                    [7.2, 17, 11, 48, 26, 0, 8, 0],
                    [43, 82, 33, 13, 17, 81, 51, 4],
                    [35, 9, 93, 7, 19, 99, 30, 2],
                    [19, 20, 19, 6,	59,	16,	16,	0],
                    [15, 15, 99, 45, 66, 11, 12, 7],
                    [25, 22, 47, 4,	42, 26, 45, 1],
                    [0, 0, 75, 0, 12, 7, 12, 3]])

// console.log(A1);
// output vector
const Output = nj.array([700, 320, 607, 432, 375, 345, 561, 187])


function leontiefInv(transaction, output) {
    let identity = nj.identity(transaction.shape[0]);
    
    let indexRowA = 0
    let indexColA = 0
    let emptyMat = nj.zeros(transaction.shape);
    while (true) {
        let a = transaction.get(indexRowA, indexColA) / output.get(indexColA);
        // console.log(`indexRowA :  ${indexRowA}`)
        // console.log(`indexColA : ${indexColA}`)
        // console.log(`a : ${a}`)
        emptyMat.set(indexRowA, indexColA, a)
        
        if (indexRowA == (transaction.shape[0]-1) ) {
            indexRowA = 0;
            indexColA += 1;
        }else{
            indexRowA += 1
        }
    
        if (indexColA == transaction.shape[1]){
            break
        }
    }
    const res = identity.subtract(emptyMat)

    const xx = mathjs.inv(res.tolist())

    // console.log(xx)
    return xx;
}


function ghoshianInv(transaction, output) {
    let identity = nj.identity(transaction.shape[0]);
    
    let indexRowA = 0
    let indexColA = 0
    let emptyMat = nj.zeros(transaction.shape);
    transaction = transaction.T
    while (true) {
        let a = transaction.get(indexRowA, indexColA) / output.get(indexColA);
        // console.log(`indexRowA :  ${indexRowA}`)
        // console.log(`indexColA : ${indexColA}`)
        // console.log(`a : ${a}`)
        emptyMat.set(indexRowA, indexColA, a)
        
        if (indexRowA == (transaction.shape[0]-1) ) {
            indexRowA = 0;
            indexColA += 1;
        }else{
            indexRowA += 1
        }
    
        if (indexColA == transaction.shape[1]){
            break
        }
    }
    const res = identity.subtract(emptyMat)

    const xx = mathjs.inv(res.tolist())

    // console.log(xx)
    return xx;
}



console.log(leontiefInv(A1, Output));
console.log(ghoshianInv(A1, Output));
