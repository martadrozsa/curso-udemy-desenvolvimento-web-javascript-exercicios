
/*function getLetter(s) {
    let i = 0
    if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] ==  'o' || s[i] == 'u'){
        return 'A'
    } else if (s[i]  == 'b' || s[i] == 'c' || s[i] == 'd'|| s[i] == 'f'|| s[i] == 'g') {
        return 'B'
    } else if (s[i] == 'h' || s[i] == 'j' || s[i] == 'k' || s[i] == 'l' || s[i] == 'm') {
        return 'C'
    } else {
        return 'D'
    }
}
*/

function getLetter(s) {
    let letter 

    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A'
            break
        case 'bcdfg'.includes(s[0]):
            letter = 'B'
            break
        case 'hjklm'.includes(s[0]):
            letter = 'C'
            break
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D'
            break
    }
    return letter
}


console.log(getLetter('adfgt'))
console.log(getLetter('dfgt'))
console.log(getLetter('kdfgt'))
console.log(getLetter('rfgt'))