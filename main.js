// PROJECT: Whale Talk

let input = "i am Batman!";

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    const inputLetter = input[i];
    //console.log(i);

    if (inputLetter === 'e') {
        resultArray.push(inputLetter);
    }

    if (inputLetter === 'u') {
        resultArray.push(inputLetter);
    }

    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];
        //console.log(j);
        if (inputLetter === vowel) {
            resultArray.push(inputLetter);
            console.log(inputLetter);
        }
    }
}

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
