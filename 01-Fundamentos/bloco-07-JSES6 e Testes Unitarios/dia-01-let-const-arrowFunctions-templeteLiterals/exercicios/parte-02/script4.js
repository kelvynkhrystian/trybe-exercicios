// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') 
// retorna 'aconteceu'

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (let i=0; i<wordArray.length; i+=1) {
        if(wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
            result = wordArray[i];
        }
    }

    // for (const word of wordArray) {
    //     if (word.length > maxLength) {
    //         maxLength = word.length;
    //         result = word;
    //     }
    // }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));