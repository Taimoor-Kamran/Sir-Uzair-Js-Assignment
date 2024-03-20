// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)


// let empty_multi_array = [[]]


// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// let matrix = [ [0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1] ]

// document.write(matrix[0]+ "<br>")
// document.write(matrix[1]+ "<br>")
// document.write(matrix[2]+ "<br>")

// 3. Write a program to print numeric counting from 1 to 10

// for(let i =1; i <=10; i++){
//     document.write(i+ "<br>")
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let userInput = prompt("Enter Your Number Table Number")
// let userLength = prompt("Enter Your Table Length")

// for(let i = 1; i < userLength; i++){
//     document.write(userInput + " x " + i + " = " + userInput*i + "<br>")
// }

// 5. Write a program to print items of the following array
// using for loop:

// fruits = ["apple", "banana", "mango", "orange","strawberry"]

// for(let i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }

// for(let i = 0; i < fruits.length; i++){
//     document.write("<br>" + "Element at index " + i + " is " + fruits[i] + "<br>")
// }

// 6. Generate the following series in your browser. See
// example output.

// document.write("Counting:" + "<br><br>")


// for(let i = 1; i <= 15; i++){
//     document.write(i + ",")
// }

// document.write("<br><br>")
// document.write("Reverse Counting:" + "<br><br>")


// for(let z = 10; z >= 1; z--){
//     document.write(z + ",")
// }

// document.write("<br><br>")
// document.write("Even:" + "<br><br>")

// for(let i = 0; i <= 16; i += 2){
//     document.write(i + ",")
// }

// document.write("<br><br>")
// document.write("odd:" + "<br><br>")

// for (let i = 1; i <= 19; i += 2){
//     document.write(i + ",")
// }

// document.write("<br><br>")
// document.write("Series:" + "<br><br>")

// for(let i = 2; i <= 20; i += 2){
//     document.write(i + "k,")
// }


// 8.Write a program to identify the largest number in the given array.
let A = [24, 53, 78, 91, 12]

let largest = A[0];

for(let i = 0; i < A.length; i++){
    if(A[i] > largest){
        largest = A[i]
        document.write("The Largest Number is :" + largest)
        
    }
}

// 9. Write a program to identify the smallest number in the given array.

// let A = [24, 53, 78, 91, 12]

// let smallest = A[0]

// for(let i = 0; i < A.length; i++){
//     if(A[i] < smallest){
//         smallest = A[i]
//         document.write("Array Items: 24,53,78,91,12" + "<br>")
//         document.write("The Smallest Number is :" + smallest)
//     }
// }

// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for(let i = 5; i <= 100; i += 5){
//     document.write(i+ ",")
// }