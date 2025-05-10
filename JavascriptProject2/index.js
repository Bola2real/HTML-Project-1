// String Manipulation Functions

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  function countCharacters(str) {
    return str.length;
  }
  
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Array Functions
  
  function findMaximum(arr) {
    return Math.max(...arr);
  }
  
  function findMinimum(arr) {
    return Math.min(...arr);
  }
  
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Mathematical Functions
  
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
  }
  
  // Example usage:
  console.log(reverseString("hello"));
  console.log(countCharacters("hello"));
  console.log(capitalizeWords("hello world"));
  console.log(findMaximum([1, 2, 3, 4, 5]));
  console.log(findMinimum([1, 2, 3, 4, 5]));
  console.log(sumArray([1, 2, 3, 4, 5]));
  console.log(filterArray([1, 2, 3, 4, 5], num => num > 2));
  console.log(factorial(5));
  console.log(isPrime(7));
  console.log(fibonacci(10));
  