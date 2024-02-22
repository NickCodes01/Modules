
export let objectStats = (arrObjects) => {

//Error handling
//check that input exists and is an array
if (Array.isArray(arrObjects) === false) throw "Error: arrObjects does not exist and/ or is not of type array";

//iterate through each object in array
for (let i = 0; i < arrObjects.length; i++) {

//check that each element in the array is an object
if ((typeof arrObjects[i] === 'object') === false) throw "Error: each element in the array is not an object";

//check if each object is empty or does not have at least one key-value pair
if ((Object.keys(arrObjects[i]).length >= 1) === false) throw "Error: each object is empty or does not have at least one key-value pair";

//check that each object value per key is a number AND decimals should be rounded to a max of 3 decimal places
for (const kv of Object.values(arrObjects[i])) {
    if ((typeof kv === 'number') === false || Number((kv.toFixed(3)) === kv) === false) throw "Error: not number and more than 3 decimal places"
}
}

//initialize empty array named hold which will store values from our objects
let hold = [];

//iterate through the array we are given using a for of loop
for (const now of arrObjects) {

//now get the values from that current object
const worth = Object.values(now);

//now we iterate through the current object values
for (const objWorth of worth) {
        
//now we make sure the value is a number
if (typeof objWorth === 'number') {
        
//if it's a number push it into the array
hold.push(objWorth);
    }
}
}

//now that we have our array, we sort it from lowest to highest using arrow function
hold.sort((x, y) => x - y);

//now that we have an array of sorted numbers, we can start the calculations (mean, median, etc...)

//mean
//here we iterate over our hold array to sum up the numbers in order to calculate the mean
let addTogether = 0;
for (let i = 0; i < hold.length; i++) {
    addTogether = addTogether + hold[i];
}

//mean is getting the sum and dividing by how many numbers we have, so we need to take our sum from addTogether and divide it by how many numbers are in our array...
//we also want to round to 3 decimal places so we use toFixed(3)
const mean = Number((addTogether / hold.length).toFixed(3));

//median
let median;

//if the number of numbers in our array is even use the avg of both numbers in the middle
if (hold.length % 2 === 0) {
const middle1 = (hold.length / 2) - 1;
const middle2 = (hold.length / 2);
median = (hold[middle1] + hold[middle2]) / 2;
}

//else, if the number of numbers in our array is odd, simply use the number in the middle, using Math.floor to round down 
else {
const numInMiddle = Math.floor(hold.length / 2);
median = hold[numInMiddle];
}

//mode
let mode;
//happenings keeps track of how often mode occurs
let happenings = 0;

//iterate through our array
for (let i = 0; i < hold.length; i++) {
    const modeHold = hold[i];
    //get the current number
    let modeHappenings = 0;

    //now we count how many times our current number occurs using this nested loop
    for (let j = 0; j < hold.length; j++) {
        //if the current number equals the current mode, then increment modeHappenings which tracks how many times our current number occurs
        if (hold[j] === modeHold) {
            modeHappenings++;
        }
    }

    //checks if the current number occurs more often than our current highest mode
    if (modeHappenings > happenings) {
        //if our current number DOES occur more often, we update our current highest mode with this new one
        happenings = modeHappenings;
        //set mode to current number which is modeHold
        mode = modeHold;
    }
}

//if no mode can be found, set mode to 0
if (happenings === 1) {
    mode = 0;
}

//range
//our array is already sorted, so it's simply the largest value (end of array) minus the first smallest value of the array
const range = hold[hold.length - 1] - hold[0];

//min
//just the first number in our array, which is the smallest
const min = hold[0];

//max
//just the last number in our array, which is the largest
const max = hold[hold.length - 1];

//count
//count is just the length of our array
const theCount = hold.length;

//sum
//we already found the sum when we were calculating the mean, so we just use that and fix it to 1 decimal place 
const theSum = Number(addTogether.toFixed(1));

//now we return our object
return {
    mean,
    median,
    mode,
    range,
    minimum: min,
    maximum: max,
    count: theCount,
    sum: theSum
};

};

//-----------------------------------------------

export let nestedObjectsDiff = (obj1, obj2) => {
    /* This function compares two nested objects, obj1 and obj2, and returns an object representing the differences between them. It considers differences 
    at every level, including nested objects and arrays. */
    
    //error if input does not exist or is not an object
    if ((typeof obj1 === 'object') === false || (typeof obj2 === 'object') === false) throw "Error: input does not exist or obj1 or obj2 are not objects";

    //error if input is empty/ less than one key - value pair
    if (Object.keys(obj1).length === 0 || Object.keys(obj2).length === 0) throw "Error: input is empty or has less than 1 key-value pair";
    
    //extract the keys from obj1 and obj2 and put them into keyX and keyY
        //we use Object.keys to extract keys of our object unlike our last function, where we used Obejct.values
        const keyX = Object.keys(obj1);
        const keyY = Object.keys(obj2);
    
        //this new set holds the keys that we extracted from both objects
        const together = new Set([...keyX, ...keyY]);
    
        //so at this point, we have extracted our keys from both objects and stored them together in a new set named together
    
        //we are returning an object, so we must first initialize an empty object that will store the difference
        const comp = {};
    
    
        //iterate through each key of the together set using a for of loop
        for (const hold of together) {
          
           //checks if key is not present in either obj1 nor obj2
           if ((hold in obj1) === false || (hold in obj2) === false) {
            //if true, comp[hold] is set to undefined
             comp[hold] = undefined;
           }
    
                //check if both are arrays
                if(Array.isArray(obj1[hold]) && Array.isArray(obj2[hold])) {
                    //if yes, check for differences in reference and legnth
                    if ((obj1[hold] === obj2[hold] && obj1[hold].length === obj2[hold].length) === false) {
                        //if above ends up being true, that they are false, set comp[hold] to whatever value is in obj2[hold]
                        comp[hold] = obj2[hold];
             } 
            }
            
                    //check if both are objects, if yes, call our function nestedObjectsDiff on the nested objects and set comp to the result if there are any differences
                     else if(typeof obj1[hold] === 'object' && typeof obj2[hold] === 'object') {
                    //call our function to compare the objects that we just verified
                     const nest = nestedObjectsDiff(obj1[hold], obj2[hold]);
                     //check if nest has keys ( > 0 meaning more than 0 keys)
                     if (Object.keys(nest).length > 0) {
                    //if yes, assign nest value to comp[hold]
                     (comp[hold] = nest);
                 }
                }
                        //if the values are not equal... set our comp[hold] with the value of obj2 like above
                        else if (obj1[hold] != obj2[hold]) {
                        comp[hold] = obj2[hold];
                    }
        
        }
         
        //return comp, which contains the differences between obj1 and obj2 at varying levels
         return comp;
    };
    
   


//-----------------------------------------------

export let mergeAndSumValues = (...args) => {
    //this function takes in a variable number of objects, that's what the ...args signifies
    
    //iterate over our input using for of loop
    for (const a of args) {
    
    //current input must be an object
    if ((typeof a === 'object') === false) throw "Error: must pass in an object";
    
    //error if nothing passed in
    if (args.length === 0) throw "Error: empty";
    
    //use Object.keys to check if our current object has at least one key-value pair
    if (Object.keys(a).length < 1) throw "Error: need at least one key-value pair";
    
        //use another for of loop and Object.values  
        for (const inner of Object.values(a)) {
            //throw error if the value of inner is not a regular number or a string that represents a number
            //so if we don't get a number (ie. 10), and we don't get a string that represents a number (ie. "10"), throw error
            if (Number.isNaN(parseFloat(inner))) throw "Error: must input a number or a string that represents a number";
        }
    }
    
    
    //we are outputting a new object from the object we input, so we need to initialize an object
    const newObject = {};
    
    //since we are taking in a variable number of objects, we must iterate over each object using a for of loop
    for (const o of args) {
        //we must now iterate over each key-value pair since objects come in key : value pairs using another for of loop
        for (const [k, v] of Object.entries(o)) {
            //if the key is not already in our newObject, we will put it in our newObject with it's corresponding value, which has been converted to a regular number using parseFloat
            if ((k in newObject) === false) {
                newObject[k] = parseFloat(v);
            }
            //if the key already exists, add the value of the current object to the existing value, and simply use parseFloat to convert it to a regular number
            else {
                newObject[k] = newObject[k] + parseFloat(v);
            }
        }
    }
    
    /* 
    So, we first initialize an empty object which we will be returning. 
    We then iterate over our input objects, then we iterate over the key : value pairs of those objects. 
    We check if the key is already in our newly created object newObject... if it isn't we add the key with it's corresponding value to our newly created object, newObjects.
    If the key is already in newObjects, we simply sum the value of our current object to the existing value in newObjects.
    To convert to a regular number, we just need to use parseFloat before our value.
    */
    
    return newObject;
    };
