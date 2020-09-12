const _ = {
    //my solution to clamp()
    my_clamp(num, lower, upper) {
        //check if all arguments are numbers
        if (typeof (num) !== 'number' || typeof (lower) !== 'number' || typeof (upper) !== 'number') {
            return 'Error. Not all arguments passed to clamp() function were number. Please try again using only numbers';
        }
        else {
            //Determine if num is less than the lower bound
            if (num < lower) {
                return lower;
            }
            //Determine if num if larger than the upper bound
            else if (num > upper) {
                return upper;
            }
            //When num is within the bounds
            else {
                return num;
            }
        }
    },
    //codecademy solution to clamp()
    ca_clamp(num, lower, upper) {
        //Determine highest number between num and lower
        return Math.min(upper, Math.max(num, lower));
    },
    //my solution to inRange()
    my_inRange(num, providedStart, providedEnd = 0) {
        //Ensure that start is the lowest of provided start and end
        const start = Math.min(providedStart, providedEnd);
        //Ensure that end is the largest of provided start and end
        const end = Math.max(providedStart, providedEnd);
        //Use if statement to find if num is within the range start to end
        if (num >= start && num < end) {
            return true;
        }
        else {
            return false;
        }
    },
    //Codecademy solution to inRange()
    ca_inRange(num, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            const temp = start;
            start = end;
            end = temp;
        }
        let isInRange = start <= num && num < end;
        return isInRange;
    },
    //My solution to words() - NON-FUNCTIONAL
    my_words(sentence) {
        //Use for loop to go through the string and find all spaces
        //Creating an array of space indices
        let spaces = [0];
        for (let i = 0; i < sentence.length; i++) {
            if (sentence[i] === ' ') {
                spaces.push(i);
            }
        }
        //add end point to spaces array
        spaces.push(sentence.length - 1);
        console.log(spaces);

        //Create an array based on the space indices array
        let words = [];
        for (let i = 0; i <= spaces.length; i++) {
            //create each word as a string
            for (let j = 0; j < spaces[i + 1] - spaces[i]; j++) {
                if (j === 0) {
                    words[i] = sentence[spaces[i] + 1]
                }
                else {
                    words[i] = words[i] + sentence[spaces[i] + 1 + j];
                }
            }
        }
        //Return words array
        console.log(words);
        return words;
    },
    //Codecademy solution
    words(sentence) {
        const words = sentence.split(' ');
        return words;
    },
    //My solution to pad()
    pad(string, desiredLength) {
        //Check if desired length is greater than current length
        if (desiredLength < string.length) {
            return string;
        }
        //Calculate the amount of padding required
        const padding = desiredLength - string.length;
        //Determine if amount of padding to add is odd
        if (padding % 2 !== 0) {
            //if odd add space at end of string
            string = string + ' ';
        }
        //Add half of the required padding (rounded down) to the start and half to the end of the string
        for (let i = 0; i < Math.floor(padding / 2); i++) {
            string = ' ' + string + ' ';
        }
        //return string
        return string;
    },
    //my solution to has()
    has(obj, val) {
        //Check if key is undefined
        if (obj[val] === undefined) {
            return false;
        }
        else {
            return true;
        }
    },
    //My solution to invert()
    invert(obj) {
        //Create an array of the object keys (using .keys)
        const keys = Object.keys(obj);
        //create an array of the object values (using .values)
        const vals = Object.values(obj);
        console.log(keys);
        console.log(vals);
        //Declare empty new object
        const newObj = {};
        //Create a new object using the keys and value arrays (using a for loop)
        for (let i = 0; i < keys.length; i++) {
            newObj[vals[i]] = keys[i];
        }
        //return new object
        return newObj;
    },
    //Codeacdemy solution to findKey()
    findKey(obj, preFunc) {
        //Use a for loop to check for the key using the predicate function
        for (let key in obj) {
            //Check if predicate function return a truthy value
            if (preFunc(obj[key])) {
                return key;
            }
        }
        //If for loop runs through all keys in the object the return undefined
        return undefined;
    },
    //My solution to drop()
    my_drop(arr, numToDrop = 1) {
        //Use a for loop to remove specified number of items from array
        for (let i = 0; i < numToDrop; i++) {
            //Use .shift() to remove each item within the for loop
            arr.shift();
        }
        return arr;
    },
    //Codecademy solution to drop()
    drop(arr, num) {
        if (num === undefined) {
            num = 1;
        }
        const newArr = arr.slice(num);
        return newArr;
    },
    //My solution to dropWhile()
    dropWhile(arr, predicate) {
        //Use for loop iterate through array until the predicate function returns a falsey function
        for (let i = 0; i < arr.length; i++) {
            if(predicate(arr[i], i, arr) === false) {
                return arr.slice(i);
            }
        }
    },
    //My solution to chunk()
    chunk(arr, size = 1) {
        //Define a new array (of arrays)
        let newArr = [];
        //Use .splice() within a for loop to create arrays 
        for (let i = 0; i < Math.floor(arr.length/size); i++) {
            newArr[i] = arr.slice(i*2, (i+1)*size);
        }
        //Check if there is a remainder and add to the newArr
        const remainder = arr.length % size;
        if (remainder !== 0) {
            newArr[newArr.length] = arr.slice(arr.length - remainder);
        }
        //return the array of arrays
        return newArr;
    }

}


// Do not write or modify code below this line.
module.exports = _;