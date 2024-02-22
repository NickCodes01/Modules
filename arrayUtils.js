
export let arrayPartition = (arrayToPartition, partitionFunc) => {
  

    //Error handling
    if (Array.isArray(arrayToPartition) === false) throw "Error: arrayToPartition does not exist and/ or is not of type array";
    if (arrayToPartition.length === 0) throw "Error: arrayToPartition is empty";
    if (arrayToPartition.length < 2) throw "Error: arrayToPartition has less than 2 elements";
    if (typeof partitionFunc !== 'function') throw "Error: partitionFunc does not exist and/ or is not of type function";
    
    //initialize the two subArrays we will be using to partition the array based on the result of the partition function
    const trueSubArray = [];
    const falseSubArray = [];
    
    //We can now loop through the arrayToPartition using a for loop and partition its elements based on the partition function
    for (let i = 0; i < arrayToPartition.length; i++) {
    
        //pluck each element from the given array, AND implement the trim() function to trim input strings
       
        let input = arrayToPartition[i];

        if (typeof input === 'string') {
           input = input.trim();
        }
    
        //check if the partition function applies to the element we just plucked from our arrayToPartition
        //if it applies, then push it into the trueSubArray...
        if (partitionFunc(input)) {
            trueSubArray.push(input);
        }
        //...if the partition function does not apply, push it into the falseSubArray
        else {
            falseSubArray.push(input);
        }
    }
    
    //return an array [] containing the two subArrays
    return [trueSubArray, falseSubArray];
    };
    

//--------------------------------------------

export let arrayShift = (arr, n) => {

//this code takes in two arguments, an array (arr) and an integer (n) and it rotates the array n positions, positive n rotate to the right, negative n rotate to the left

//Error handling
if (Array.isArray(arr) === false) throw "Error: arr does not exist and/ or is not of type array";
if (arr.length < 2) throw "Error: arr has less than 2 elements";
if (typeof n !== 'number') throw "Error: n does not exist and/ or is not of type number";
if (Number.isInteger(n) === false) throw "Error: n is not a whole number";

//if we get a string input for arr, such as ["Hello", ...], trim it before use
if (typeof arr === 'string') {
    arr = arr.trim();
}

//find out the amount of rotation through use of remainder %
const rotate = n % arr.length;

//if n is positive (> 0), shift to the right
if (rotate > 0) {
    //loop through array and shift to the right by popping off the element at the end (pop()) and adding that element to the beginning (unshift()) of the array
    for (let i = 0; i < rotate; i++) {
        const last = arr.pop();
        arr.unshift(last);
    }
}
//if n is negative (< 0), shift to the left
else if (rotate < 0) {
    //loop through array and shift to the left by removing the first element of the array (shift()) and adding that element to the end (push()) of the array
    for (let i = 0; i < -rotate; i++) {
        const first = arr.shift();
        arr.push(first);
    }
}

//return our array that has been rotated (if n is 0, this return statement also returns just the given array)
return arr;
};

//--------------------------------------------

export let matrixOne = (matrix) => {

    //Error handling
    //check that input is an array
    if (Array.isArray(matrix) === false) throw "Error: matrix does not exist and/ or is not of type array";

    //iterate over each row
    for (let i = 0; i < matrix.length; i++) {

    //check that each element of our matrix is an array
    if (Array.isArray(matrix[i]) === false) throw "Error: not every element in the matrix in an array";
    
    //check if any subarrays are empty
    if (matrix[i].length === 0) throw "Error: subarray is empty";
    
    //inner loop to iterate over each element of each row
    for (let j = 0; j < matrix[i].length; j++) {
        //check if any element within a subarray is NaN
        if (isNaN(matrix[i][j])) throw "Error: NaN in subarray instead of a number";
    }
    }

    //starting from the second row, iterate
    for (let i = 1; i < matrix.length; i++) {

    //check if number of elements in each row match 
    if ((matrix[i].length === matrix[0].length) === false) throw "Error: rows in the matrix have different number of elements";
    }

    //variables that store the # of rows and columns
    const m = matrix.length;
    const n = matrix[0].length;
    
    //these arrays will track which rows and columns contain 0s
    const row = [];
    const column = [];
    
    //figure out the position of 0s in the rows
    //iterate over each row then over each column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
        //if there is a 0, push the index of the row (i) to the row array
        if (matrix[i][j] === 0) {
            row.push(i);
        }
    }
    }
    
    //figure out the position of 0s in the columns
    //iterate over each column then over each row
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
        //if there is a 0, push the index of the column (j) to the column array
        if (matrix[i][j] === 0) {
            column.push(j);
        }
    }
    }
    
    //update the rows that have 0s to 1s using for of loop
    for (const r of row) {
        for (let j = 0; j < n; j++) {
            matrix[r][j] = 1;
        }
        };
    
    //update the columns that have 0s to 1s using for of loop
    for (const c of column) {
        for (let i = 0; i < m; i++) {
            matrix[i][c] = 1;
        }
        };
    
    //return the matrix
    return matrix;
    };
    
