
import {
arrayPartition,
arrayShift,
matrixOne
} from './arrayUtils.mjs';

// import {swapChars} from './stringUtils.mjs';
// import {longestCommonSubstring} from './stringUtils.mjs';
// import {palindromeOrIsogram} from './stringUtils.mjs';

import {
swapChars,
longestCommonSubstring,
palindromeOrIsogram
} from './stringUtils.mjs';

// import {objectStats} from './objectUtils.mjs';
// import {nestedObjectsDiff} from './objectUtils.mjs';
// import {mergeAndSumValues} from './objectUtils.mjs';

import {
objectStats,
nestedObjectsDiff,
mergeAndSumValues
} from './objectUtils.mjs';


//when we call the function, we wrap the call to the function in a console.log
//when we call the function, we do it like... console.log(nameOfFile.nameOfFunction(input));

//eg. console.log(arrayUtils.arrayPartition()) would be the first call to a function. The name of the file is arrayUtils and the name of the function is arrayPartition

//Q1 arrayPartition try-catch example at 20:50

 try {   
    //should fail
const arrayToPartition1 = []; 
const partitionFunc1 = 'hi'; 
const partitionedArrays1 = arrayPartition(arrayToPartition1, partitionFunc1); // Expected Result: [[2, 4], [1, 3, 5]]
console.log('did not error');
 } catch (e) {
    console.log('failed successfully');
 }

 try {
    //should pass
const arrayToPartition2 = [10, 15, 20, 25, 30]; 
const partitionFunc2 = (num) => num > 18; 
const partitionedArrays2 = arrayPartition(arrayToPartition2, partitionFunc2); // Expected Result: [[20, 25, 30], [10, 15]]
console.log('passed successfully');
 } catch (e) {
    console.log('failed test case');
 }

//-------------------------------------------

//Q2 arrayShift
try {
    //should fail
    const arr1 = [];
    const n1 = 2.5;
    const shift1 = arrayShift(arr1, n1);
console.log('did not error');
} catch (e) {
    console.log('failed successfully');
}

try {
    //should pass
    const arr2 = ["Hello", true, 5, "Patrick", "Goodbye"];
    const n2 = 4;
    const shift2 = arrayShift(arr2, n2);
console.log('passed successfully');
} catch (e) {
    console.log('failed test case');
}

//------------------------------------------

//Q3 

try {
    //should fail
    const matrix1 = [[],[],[]];
    const matrixInput1 = matrixOne(matrix1);
console.log('did not error') //returns [[2,1,2],[1,1,1],[2,1,2]]
} catch (e) {
    console.log('failed successfully');
}

try {
    //should pass
    const matrix2 = [[0,1,2,0],[3,5,4,2],[1,7,3,5]];
    const matrixInput2 = matrixOne(matrix2);
console.log('passed successfully') //returns [[1,1,1,1],[1,5,4,1],[1,7,3,1]] 
} catch (e) {
    console.log('failed test case');
}

//-------------------------------------------

//Q4

try {
    //should fail
    const ssstr1 = "P";
    const ssstr2 = "Hill";
    const swap1 = swapChars(ssstr1, ssstr2);
console.log('did not error'); //Returns "Hillick Patr"
} catch (e) {
    console.log('failed successfully');
}

try {
    //should pass
    const ssstr3 = "hello";
    const ssstr4 = "world";
    const swap2 = swapChars(ssstr3, ssstr4);
console.log('passed successfully'); //Returns "worlo helld"
} catch (e) {
    console.log('failed test case');
}

//--------------------------------------------

//Q5

try {
    //should fail
const str1 = ""; 
const str2 = hi; 
const commonSubstring1 = longestCommonSubstring(str1, str2); // Expected Result: "abcd"
console.log('did not error');
} catch (e) {
    console.log('failed successfully');
}

try {
    //should pass
const str11 = "programming"; 
const str22 = "programmer"; 
const commonSubstring2 = longestCommonSubstring(str11, str22); // Expected Result: "programm"
console.log('passed successfully');
} catch (e) {
    console.log('failed test case');
}

//-----------------------------------------------

//Q6

try {
    //should fail
const checkStrings = ["   ", ""]; 
const results = palindromeOrIsogram(checkStrings); 
console.log('did not error');
/* returns and then logs:
{ "Madam": "Palindrome", "Lumberjack": "Isogram", "He did, eh?": "Palindrome", "Background": "Isogram", "Taco cat? Taco cat.": "Palindrome", "Invalid String": "Neither" } */
} catch (e) {
    console.log('failed successfully');
}

try { 
    //should pass
const strings3 = ["abba", "abcd", "Is it OK?", "No lemon, no melon", "a"]; 
const results3 = palindromeOrIsogram(strings3); 
console.log('passed successfully');
/* returns and then outputs
{ "abba": "Palindrome", "abcd": "Isogram", "Is it OK?": "Neither", "No lemon, no melon": "Palindrome", "a": "Both" } */
} catch (e) {
    console.log('failed test case');
}

//----------------------------------------------

//Q7

try {
    //should fail
const arrayOfObjects1 = "hi"; 
const statsResult1 = objectStats(arrayOfObjects1); 
// Expected Result:{ mean: 8.346, median: 10, mode: 15, range: 17, minimum: -2, maximum: 15, count: 13, sum: 108.5 }
console.log('did not error');
} catch (e) {
    console.log('failed successfully');
}

try {
    //should pass
const arrayOfObjects2 = [ { p: 10, q: 15, r: 20 }, { x: -5, y: 8, z: 10 }, { a: 5, b: 5, c: 5 }, ]; 
const statsResult2 = objectStats(arrayOfObjects2); 
// Expected Result:{ mean: 8.111, median: 8, mode: 5, range: 25, minimum: -5, maximum: 20, count: 9, sum: 73 }
console.log('passed successfully');
} catch (e) {
    console.log('failed test case');
}

//---------------------------------------------

//Q8

try {
    //should fail
const obj1 = {}; 
const obj2 = { key1: "value1", key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey", }; 
const differences1 = nestedObjectsDiff(obj1, obj2); 
// // Example Output:   { key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey" }
console.log('did not error');
} catch (e) {
    console.log('failed successfully');
}

try {
    //should pass
const obj11 = { a: 1, b: { c: 2, d: [3, 4] }, e: "hello" }; 
const obj22 = { a: 1, b: { c: 2, d: [3, 5] }, f: "world" }; 
const differences2 = nestedObjectsDiff(obj11, obj22); // Expected Result: { b: { d: [3, 5] }, e: undefined, f: "world" }
console.log('passed successfully');
} catch (e) {
    console.log ('failed test case');
}

//----------------------------------------------

//Q9

try {
    //should fail
const object1 = {a: 3, b: 7, c: "five"};
const object2 = { b: 2, c: 8, d: 4 };
const object3 = { a: 5, c: 3, e: 6 };
const resultMergedAndSummed = mergeAndSumValues(object1, object2, object3);
console.log('did not error');
// // Expected Result: { a: 8, b: 9, c: 16, d: 4, e: 6 }
} catch (e) {
    console.log ('failed successfully');
}

try {
    //should pass
const obj1 = { a: 1, b: 2, c: 3 }; 
const obj2 = { b: 3, c: 4, d: 5 }; 
const obj3 = { a: 2, c: 1, e: 6 }; 
const result1 = mergeAndSumValues(obj1, obj2, obj3); 
console.log('passed successfully');
// Expected Result: { a: 3, b: 5, c: 8, d: 5, e: 6 }
} catch (e) {
    console.log ('failed test case');
}




