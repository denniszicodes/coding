"use strict";

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text){
    let numbers = [];
    for(const char of text.toLowerCase()){
        let pos = char.charCodeAt(0) - 96;
        if(pos >= 1 && pos <= 26){
            numbers.push(pos);
        }
    }

    return numbers.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));