// function roundNumber(num){
//     return Math.round(num)
// }

// console.log(roundNumber(3.5))
// console.log(roundNumber(2.3))
// console.log(roundNumber(-4.7))


// 2.

function generateRandomInRange(min, max) {
    // Generate a random number between 0 and 1
    const randomNum = Math.random();
    // Scale and shift the random number to fit within the specified range
    const scaledNum = Math.floor(randomNum * (max - min + 1)) + min;
    return scaledNum;
  }
  
  // Example usage:
  const min = 5;
  const max = 10;
  const randomNum = generateRandomInRange(min, max);
  console.log(randomNum); // Output will be a random integer between 5 and 10 (inclusive)
  