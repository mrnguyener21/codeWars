// Write a function that accepts a jumbled word and a map of real words
// and output words someone might have said

// word: sprots
// map: [ ocean, ports, sports, soccer ]
// return: [ sports ]

// 1st way:
// sort the words alphabetically, then compare them
// if they sorted words are the same, the words can be a match

// 2nd way:
// somehow keep of the number of occurances of each character
// if they occurances are the same, the words can be a match

const wordMatch = (jumbledWord, realWords) => realWords.filter((realWord) => {
    if (realWord.length === jumbledWord.length) {
        const sortedSpecificWord = realWord.split('').sort().join('');
        const sortedJumbledWord = jumbledWord.split('').sort().join('');
    
        if(sortedJumbledWord === sortedSpecificWord){
            return realWord;
        }
    }       
});

console.log(wordMatch('sprots', [ 'ocean', 'ports', 'sports', 'soccer' ]));
