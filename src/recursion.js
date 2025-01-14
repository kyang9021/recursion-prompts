/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    // break out of function
    return 1;
  }
  return n *= factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var num = array[array.length - 1];
  if (num === undefined) {
    return 0
  }
  // call sum on copy of array with one less index
  return num += sum (array.slice(0, array.length - 1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]]),5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0
  }
  if (!Array.isArray(array[0])) {
    var num = array[0];
    return num += arraySum(array.slice(1));
  }
  return arraySum(array[0]) + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) {
    if (n === 0) {
      return true;
    }
    if (n / 2 > 1) {
      return false;
    }
    return isEven (n + 2);
  } else {
    if (n === 0) {
      return true;
    }
    if (n / 2 < 1) {
      return false;
    }
    return isEven (n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n > 0) {
    if (n > 1) {
      return n - 1 + sumBelow(n - 1);
    }
  } else {
    if (n < -1) {
      return n + 1 + sumBelow (n + 1)
    }
  }
  return 0;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
 //generate output array
  var arr= [];
  //edge cases
  if (Math.abs(y - x) < 2) {
    return arr;
  }
  if (x > y) {
    arr.unshift(x - 1)
    if (x - 1 > y + 1) {
      arr = arr.concat(range(x - 1, y))
    }
    return arr;
  }
 //base case
  arr.unshift(x + 1)
 //invoke recursive function
  if (x + 1 < y - 1) {
    arr = arr.concat(range(x + 1, y));
  }
 //return output array
  return arr;
}


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp < 0) {
    return parseFloat((1 / base * exponent(base, exp + 1)).toFixed(8));
  } else if (exp > 0) {
    return base *= exponent(base, exp - 1);
  }
  return 1;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n < 1) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var result = "";
  if (string.length === 0) {
    return result;
  }
  result += string[string.length - 1] +  reverse(string.slice(0, string.length - 1));
  return result;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var testbool = true;
  string = string.toLowerCase();
  if (string[0] === string[string.length - 1]) {
    if (string.length !== 0) {
      palindrome(string.slice(1,string.length - 1));
    }
  } else {
    return testbool = false;
  }
  return testbool;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (!y) {
    return NaN
  }
  if (y < 0) {
    y = -y;
  }
  if (x < 0) {
    if (-x < y) {
      return x;
    }
    x += y;
    return modulo(x, y)
  }
  if (x < y) {
    return x;
  }
  x -= y;
  return modulo(x, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  var positiveY;
  var negativeY;
  if (y === 0 || x === 0) {
    return 0;
  }
  if (y < 0) {
    x = -x;
    y = -y;
  }

  var end = (y === 1) ? x : 0;
  y--;
  return (end === x) ? end : x + multiply(x, y);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y < 0) {
    x = -x;
    y = -y;
  }
  if (y === 0) {
    return undefined;
  }
  if (x === 0) {
    return 0;
  }
  if (x - y >= 0 && x > 0) {
    return 1 + divide(x - y, y);
  } else if (x < 0 && x + y <= 0 ) {
    return 1 + divide(x + y, y);
  } else {
    return 0
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === 0) {
    return y
  }
  if (y === 0) {
    return x
  }
  if (x < y) {
    var small = x;
    var large = y;
    x = large;
    y = small;
  }

  var quotient = x - divide(x, y) * y;

  return gcd(y, quotient);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var array = [];
  if (str.length === 1) {
    return [str];
  }
  array.push(str[0]);
  array = array.concat(createArray(str.slice(1)))
  return array;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var newArr = [];
  if (array.length === 1) {
    return array;
  }
  newArr.push(array[array.length - 1]);
  newArr = newArr.concat(reverseArr(array.slice(0, array.length - 1)));
  return newArr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var builtArray = [];
  if (length === 1) {
    return [value];
  }
  builtArray.push(value);
  builtArray = builtArray.concat(buildList(value, length - 1));
  return builtArray;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return [`${n}`];
  }
  var container = [];
  if (n % 3 === 0 && n % 5 === 0) {
    container.push('FizzBuzz');
  } else if (n % 3 === 0) {
    container.push('Fizz');
  } else if (n % 5 === 0) {
    container.push('Buzz');
  } else {
    container.push(`${n}`);
  }
  container = fizzBuzz(n-1).concat(container);
  return container;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0
  if (array.length === 0) {
    return 0;
  }
  if (value === array[0]) {
    count++;
  }
  return count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var newArr = [];
  if (array.length === 0) {
    return [];
  }
  newArr.push(callback(array[0]));
  return [...newArr, ...rMap(array.slice(1), callback)]
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var k in obj) {
    if (k === key) {
      count++
    }
    if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      count += countKeysInObj(obj[k], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (key in obj) {
    if (typeof obj[key] === typeof value) {
      if (obj[key] === value) {
        return count = 1;
      }
    } else {
      count += countValuesInObj(obj[key], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[oldKey];
    }
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if( n < 1) {
    return null;
  }
  if (n === 1) {
    return [0, 1]
  }

  var arr = fibonacci(n-1);
  var num = arr[arr.length - 1] + arr[arr.length - 2];
  return [...fibonacci(n-1), num];
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return nthFibo(n-1) + nthFibo(n-2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var arr = [];
  var cap = '';
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < array[0].length; i++) {
    cap += array[0][i].toUpperCase();
  }
  arr.push(cap);
  return [...arr, ...capitalizeWords(array.slice(1))];
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var arr = [];
  if (array.length === 0) {
    return [];
  }
  arr.push(array[0][0].toUpperCase() + array[0].slice(1));
  return [...arr, ...capitalizeFirst(array.slice(1))];
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      sum += nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var flat = [];
  for (var arr of array) {
    if (!Array.isArray(arr)) {
      flat.push(arr);
    } else {
      flat.push(...flatten(arr));
    }
  }
  return flat
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj;
  }
  if (obj[str[0]]) {
    obj[str[0]]++;
  } else {
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var compArr = [];
  if (list.length === 0) {
    return [];
  }
  if (list[0] === list[1]) {
    list.splice(0,1);
    return compress(list);
  } else {
    compArr.push(list[0]);
    return [...compArr, ...compress(list.slice(1))]
  }
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return [];
  }
  var arr = [];
  array[0].push(aug);
  arr.push(array[0]);
  return [...arr, ...augmentElements(array.slice(1), aug)]
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var minimized = [];
  if (array.length === 0) {
    return [];
  }
  if (array[0] === array[1] && array[0] === 0) {
    array.splice(0,1);
    return minimizeZeroes(array);
  } else {
    minimized.push(array[0])
    return [...minimized, ...minimizeZeroes(array.slice(1))];
  }
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var alternatingArr = [];
  if (array.length === 0) {
    return [];
  }
  if (array.length % 2 === 0) {
    if (array[0] >= 0) {
      alternatingArr.push(array[0]);
    } else {
      alternatingArr.push(-array[0]);
    }
  } else {
    if (Math.sign(array[0]) === -1) {
      alternatingArr.push(array[0]);
    } else {
      alternatingArr.push(-array[0]);
    }
  }
  return [...alternatingArr, ...alternateSign(array.slice(1))];
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) {
    return '';
  }
  var obj = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  }
  var text = '';
  if (Number.parseInt(str[0])) {
    text += obj[str[0]];
  } else {
    text += str[0]
  }
  return text + numToText(str.slice(1))
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document.body) {
  var count = 0;
  console.log(node.tagName);
  if (node.tagName.toLowerCase() === tag) {
    count++;
  }
  for (var i = 0; i < node.children.length; i++) {
    count += tagCount(tag, node.children[i]);
  }
  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target) {
  // find middle index of array
  var i = Math.floor(array.length / 2);
  // if value at index is equal to target return index;
  if (target === array[i]) {
    return i;
  }
  // if value not found return null
  if (array.length === 0) {
    return null;
  }
  // if target is less than value at index
  if (target < array[i]) {
    return binarySearch(array.slice(0, i), target);
  } else {
    if (binarySearch(array.slice(i+1), target) === null) {
      return null;
    }
    return i + 1 + binarySearch(array.slice(i+1), target);
  }
};
//[2, 3, 4]
// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  var midpoint = Math.floor(array.length / 2);
  if (midpoint === 0) {
    return array;
  }
  var left = mergeSort(array.slice(0, midpoint));
  var right = mergeSort(array.slice(midpoint));
  return merge(left, right);
};
var merge = (left, right) => {
  var leftI = 0;
  var rightI = 0;
  var mergedArr = [];
  while (leftI < left.length || rightI < right.length) {
    if (left[leftI] <= right[rightI] || rightI === right.length) {
      mergedArr.push(left[leftI]);
      leftI++;
    } else {
      mergedArr.push(right[rightI]);
      rightI++;
    }
  }
  return mergedArr;
}
// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
  if (Array.isArray(input)) {
    var arr = [];
    if (input.length === 0) {
      return [];
    }
    if (typeof input[0] !== 'object') {
      arr.push(input[0]);
    } else {
      arr.push(clone(input[0]));
    }
    return [...arr, ...clone(input.slice(1))];
  } else {
   var obj = {};
   for (var key in input) {
     if (typeof input[key] !== 'object') {
       obj[key] = input[key];
     } else {
       obj[key] = clone(input[key]);
     }
   }
   return obj;
  }
};
