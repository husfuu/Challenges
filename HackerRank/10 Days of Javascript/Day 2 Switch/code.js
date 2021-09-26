function getLetter(s) {
    let letter;
    // Write your code here
    let listA = ['a', 'e', 'i', 'o', 'u'];
    let listB = ['b', 'c', 'd', 'f', 'g'];
    let listC = ['h', 'i', 'j', 'k', 'l', 'm'];
    let listD = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    switch(true){
        case listA.includes(s[0]):
            letter = 'A';
            break;
        case listB.includes(s[0]):
            letter = 'B';
            break;
        case listC.includes(s[0]):
            letter = 'C';
            break;
        case listD.includes(s[0]):
            letter = 'D';
            break;
    }
    return letter;
}