/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowelList = ['a', 'e', 'i', 'o', 'u'];
    const consonantsList = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 
    'p', 'q','r', 's', 't', 'v','w', 'x', 'y', 'z'];
    
    for (let i=0; i < s.length; i++){
        for (let j=0; j < vowelList.length; j++){
            if (s[i] === vowelList[j]){
                console.log(s[i])
            }
        }
    }
    for (let i=0; i < s.length; i++){
        for (let j=0; j < consonantsList.length; j++){
            if (s[i] === consonantsList[j]){
                console.log(s[i])
            }
        }
    }
    return;    
}

