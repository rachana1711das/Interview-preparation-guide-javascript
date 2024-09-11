
//1.  Given an array of numbers, use the filter and reduce methods to find the sum of all even numbers.
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
console.log("Array is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] sum of all even number:", sumOfEvenNumbers); // 30


//2. Given an array of strings, use the map method to convert all strings to uppercase.
 const strings = ["hello", "world", "javascript", "is", "awesome"]

const uppercaseStrings = strings.map(str => str.toUpperCase());
console.log("convert all strings to uppercase -->", uppercaseStrings); // ["HELLO", "WORLD", "JAVASCRIPT", "IS", "AWESOME"]

//3. Given an array of numbers, use the find method to find the first negative number.
 const numbers1 = [3, 5, -2, 9, -8, 7];

const firstNegative = numbers1.find(num => num < 0);
console.log("Array is [3, 5, -2, 9, -8, 7] first negative number:", firstNegative); // -2

//4. Given an array of numbers, use the every method to check if all numbers are positive.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allPositive = numbers2.every(num => num > 0);
console.log("Array is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] check if all numbers are positive:", allPositive); // true


//5. Given an array of strings, use the sort method to sort the strings by their length in ascending order.
 const strings1 = ["apple", "banana", "kiwi", "cherry", "mango"];

const sortedByLength = strings1.sort((a, b) => a.length - b.length);
console.log("sort method to sort the strings by their length in ascending order:", sortedByLength); // ["kiwi", "apple", "mango", "banana", "cherry"]

//6.  Given two arrays, concatenate them into one array using the concat method.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenatedArray = array1.concat(array2);
console.log("concat arrays:",concatenatedArray); // [1, 2, 3, 4, 5, 6]


//7. Given an array of numbers, use the filter method to remove duplicate values.
const numbers3 = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers3.filter((num, index, arr) => arr.indexOf(num) === index);
console.log("array is: [1, 2, 2, 3, 4, 4, 5] remove duplicate values:", uniqueNumbers); // [1, 2, 3, 4, 5]

                                                //OR
const uniqueElem = [...new Set(numbers3)]
console.log("array is: [1, 2, 2, 3, 4, 4, 5] remove duplicate values:", uniqueElem); // [1, 2, 3, 4, 5]

//8. Given a string of comma-separated values, use the split method to convert it into an array of values.
const str = "apple,banana,kiwi,cherry,mango";

const arrayOfValues = str.split(',');
console.log("convert (apple,banana,kiwi,cherry,mango) string to array",arrayOfValues); // ["apple", "banana", "kiwi", "cherry", "mango"]

//9. Given a nested array, use the reduce method to flatten it into a single array.
const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8]];

const flattenedArray = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log(" flatten it into a single array",flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

//10. Given an array of words, use the reduce method to count the occurrences of each word.
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const wordCount = words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
}, {});
console.log("count the occurrences of each word", wordCount); // { apple: 3, banana: 2, orange: 1 }

//11.Reverse an array
const revArr = [1,2,3,4,5]
cost reversedArr = revArr.reverse()
console.log("reversed array", reversedArr) //[5,4,3,2,1]

//12. Sum of all elements in an array
const sumArr = [1,2,3,4,5]
const sumOfArray = array.reduce((x,y)=>x+y,0);
console.log("sum of array", sumOfArray) //15

//13. Find the largest number

const largArr = [1,5,8,19,3]
const largestNum = Math.max(...largArr)
console.log("largest of array", largestNum) //19

//14. Second largest number
const secondLargest = Math.max(...largArr.filter(num=>num!==largestNum))
console.log("2nd largest of array", secondLargest) //5

//15. Remove falsy values
const falsyArr = [0,1,false,null,NAN,'c']
const falsyVal = falsyArr.filter(Boolean)
console.log("removed new arr", falsyVal)