// function roundNumber(num){
//     return Math.round(num)
// }

// console.log(roundNumber(3.5))
// console.log(roundNumber(2.3))
// console.log(roundNumber(-4.7))


// 2.

// function generateRandomInRange(min, max) {
//     // Generate a random number between 0 and 1
//     const randomNum = Math.random();
//     // Scale and shift the random number to fit within the specified range
//     const scaledNum = Math.floor(randomNum * (max - min + 1)) + min;
//     return scaledNum;
//   }
  
//   // Example usage:
//   const min = 5;
//   const max = 10;
//   const randomNum = generateRandomInRange(min, max);
//   console.log(randomNum); // Output will be a random integer between 5 and 10 (inclusive)
  
// 3.

// function convertToNumber(str) {
//     // Try converting the string to a floating-point number
//     const num = parseFloat(str);
    
//     // Check if the conversion resulted in a valid number
//     if (!isNaN(num)) {
//       return num;
//     } else {
//       return NaN; // Return NaN if the conversion failed
//     }
//   }
  
//   // Example usage:
//   console.log(convertToNumber("42")); // Output: 42
//   console.log(convertToNumber("3.14")); // Output: 3.14
//   console.log(convertToNumber("hello")); // Output: NaN
  