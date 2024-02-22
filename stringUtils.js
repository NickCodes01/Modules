
export let swapChars = (string1, string2) => {


if (string1 === false || string2 === false) throw "Error: string1 and string2 must exist";
if (typeof string1 !== 'string' || typeof string2 !== 'string') throw "Error: string1 and string2 must be type strings"
if (string1.trim().length < 4 || string2.trim().length < 4) throw "Error: both string1 and string2 each must have at least 4 characters (spaces are invalid)"

//we must use the trim() function since the function takes in strings as input
string1 = string1.trim();
string2 = string2.trim();

//this is what swaps the first 4 characters of the strings
let firstInput = '';
for (let i = 0; i < 4; i++) {
    firstInput = firstInput + string2[i];
}
firstInput = firstInput + string1.slice(4);

let secondInput = '';
for (let i = 0; i < 4; i++) {
    secondInput = secondInput + string1[i];
}
secondInput = secondInput + string2.slice(4);

//now we need to concatenate these strings with a space between them
let answer = firstInput + ' ' + secondInput;

//return the answer
return answer;
};

//----------------------------------------------------

export let longestCommonSubstring = (str1, str2) => {
    //this code takes in two valid strings and returns a string with the longest common substring
    
    if (str1 === false || str2 === false) throw "Error: str1 and str2 must exist";
    if (typeof str1 !== 'string' || typeof str2 !== 'string') throw "Error: str1 and str2 must be type strings"
    if (str1.trim().length < 5 || str2.trim().length < 5) throw "Error: both str1 and str2 each must have at least 5 characters (spaces are invalid)"
    
    
    //we must use the trim() function since the function takes in strings as input
    str1 = str1.trim();
    str2 = str2.trim();
    
    //this variable stores our longest common substring
    let theLongestOne = '';
    
    //we must iterate over each character in str1
    for (let i = 0; i < str1.length; i++) {
        //we must also iterate over each character in str2
        for (let j = 0; j < str2.length; j++) {
            //l is the variable that counts the length of the longest common substring
            let l = 0;
    
            //check for the common substrings between str1 and str2, this ensures equal characters and equal positions, incrementing characters in both strings via l
            while (str2[j+l] === str1[i+l]) {
                l++
            }
    
            //if we locate a longer common substring than what we have, we update theLongestOne
            if (l > theLongestOne.length) {
                theLongestOne = str1.slice(i, i + l);
            }
        }
    }
    
    return theLongestOne;
    };


//----------------------------------------------------

export let palindromeOrIsogram = (arrStrings) => {
//this code takes in an array of strings and checks if each string in the array is a palindrome (phrase spelled the same way forward and backward), 
//an isogram (phrase in which no letter occurs more than once), both, or neither... and we will return an object

//check if arrStrings exists and is proper type, an array
if (Array.isArray(arrStrings) === false) throw "Error: arrStrings does not exist and/ or is not of type array";

//iterate over arrStrings
for (let i = 0; i < arrStrings.length; i++) {

//check if the array contains ONLY elements that are strings
if ((typeof arrStrings[i] === 'string') === false) throw "Error: not every element in the array is a string";

//check that each string element is not just empty nor with just empty spaces
if (arrStrings[i].trim() === '') throw "Error: element cannot be empty strings with empty spaces"
}

//check that there are at least two string elements in the array
if (arrStrings.length < 2) throw "Error: must be at least two string elements in the array"


//since we are returning an object, we must first initialize an object
const answer = {};

//because some of our string inputs include punctuation and spaces, we must filter out that punctuation and spaces in order to know if it is a palindrome, isogram, both or neither.
const removePuncAndSpaces = (str) => {
//define punctuation
const punctuation = /[><?!@#$%^&*_\-=+`~.,(){}[\]:;"'\\|]/;
let pass = '';
//iterate over string
for (let i = 0; i < str.length; i++) {
    //extract current element to test for punctuation or spaces
    const current = str[i];
    //if our current element does not match any punctuation and does not match a space, append it
    if (current.match(punctuation) === null && current !== ' ') {
        pass = pass + current;
    }
}
    //return our filtered string that has no punctuation nor spaces
    return pass;
};

//this function checks if a string is a palindrome
const P = (str) => {
    //trim input string and convert it to uppercase
    str = str.trim().toUpperCase();

const forward = removePuncAndSpaces(str);
//backwards stores the reverse string
let backwards = '';
//iterate backward
for (let i = forward.length - 1; i >= 0; i--) {
    //append each character to backwards
    backwards = backwards + forward[i];
}
//check that the string going forward matches the string going backwards
return forward === backwards;
};

//this function checks if a string is an isogram
const I = (str) => {
    //trim input string and convert it to uppercase
    str = str.trim().toUpperCase();
//initialize empty array to store the characters
const inputArray = [];

const forward = removePuncAndSpaces(str);

//iterate over each character using for of
for (const char of forward) {
    //sees if the character is already in the inputArray, if so, return false meaning it's not an isogram
    if (inputArray.includes(char)) {
        return false;
    }
    //if the charcter is not already in the inputArray, add it to the inputArray
    inputArray.push(char);
}

return true;

};


//determine if palindrome, isogram, both, or neither using for of
for (const str of arrStrings) {
    if (P(str) && I(str)) {
        answer[str] = 'Both';
    }
    else if (P(str)) {
        answer[str] = 'Palindrome';
    }
    else if (I(str)) {
        answer[str] = 'Isogram';
    }
    else {
        answer[str] = 'Neither';
    }

}

return answer;
};
