// Declare an empty array using JS literal notation to store student names in the future:

// let futureStudentNames = []

// 2. Declare an empty array using JS object notation to store student names in future.

// let futureStudentNames1 = new Array()

// 3. Declare and initialize a strings array.

// let stringArray = ["Banana", "Orange", "Mango"]

// 4. Declare and initialize a numbers array.

// let numberArray = [1, 2, 3, 4, 5]

// 5. Delcare and intitializa a boolean array.

// let booleanArray = [false , true , true, false]

// 6. Delcare and initaliza a Mixed Array.

// let mixedArray = ["String", 5, false, true]

// 7. Declare and Initialize an array to store available education qualifications in Pakistan:

// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for(let i = 0; i < educationQualifications.length; i++){
//     console.log(educationQualifications[i])
// }

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var Student1 = [
// ["Name : Micheal", "Marks : 320", "Percentage: 64%"],
// ["Name : John", "Marks : 230", "Percentage: 46%"],
// ["Name : Tony", "Marks : 480", "Percentage: 96%"],
// ]

// for(let i = 0; i < Student1.length; i++){
//     console.log(Student1[i])
// }

// 9. Initialize an array with color names. Display the array elements in your browser.

// let Colors = ["red", "pruple", "blue", "green"]
// console.log(Colors)

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// let Colors = ["red", "pruple", "blue", "green"]

// let user = prompt("Enter a  Color to add begining")

// Colors.unshift(user)

// console.log(Colors)

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// let Colors = ["blue", "White", "Pink", "Black"]

// let user = prompt("Enter a Color to add to the end Index")

// let b = Colors.push(user)
// console.log(b)
// console.log(Colors)

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// let Colors = ["Brown", "Orange", "Pink", "Black"]

// let user = prompt("Enter a Color to add begining")

// Colors.unshift(user)
// console.log(Colors)

// d. Delete the first color in the array. Display the updated array in your browser.

// let Colors = ["Brown", "Orange", "Pink", "Black"]

// let a = Colors.shift()

// console.log(Colors)
// console.log(a)

// e. Delete the last color in the array. Display the updated array in your browser.

// let Colors = ["Brown", "Orange", "Pink", "Black"]

// let a = Colors.pop()
// console.log(Colors)
// console.log(a)


// f. Ask the user at which index he/she wants to add a colorx  & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// let Colors = ["Pink", "Blue", "Yellow", "Green",]

// let index = parseInt(prompt("Which Index to add the Colors (0 to " + Colors.length + "):"))

// Ask The User for the color to add

// let user = prompt("Enter the color to add")

// Add the color at the desired position/index

// if(index >= 0 && index <= Colors.length){
//     Colors.splice(index, 0 , user)
// }else{ 
//     console.log("Invalid Index! Color Not Added")
// }

// console.log(Colors)

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-definedposition/index. . Display the updated array in your browser.

// let Colors = ["black", "blue", "Pink", "White", "Purple"]

// let index = parseInt(prompt("Which Index to delete the Colors(s) (0 to " +(Colors.length -1 ) + ")"))

// let deleteCount = parseInt(prompt("Enter The Number of Colors to delete"))

// if(index >= 0 && index < Colors.length){
//     Colors.splice(index , deleteCount)
// }
// else{
//     console.log("Tnvalid Index! Color Not Delete")
// }

// console.log(Colors)

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// let arr = [320,230,480,120]
// document.write("Scores of Students: " + arr)

// document.write("<br><br>")

// document.write("Ordered Scores of Students: " + arr.sort())

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// let cities = ["California", "Los Angles", "Vrigina", "South Crolina", "New York"]

// let selectedCities = []

// document.write("Cities List: <br>" + cities + "<br><br>")

// document.write("Selected Cities List: <br><br>")
// let a = selectedCities = cities.slice(0, 3)
// document.write(selectedCities)

// 12. Write a program to create a single string from the below mentioned array:

// var arr = ["This", "is", "my", "cat"]
// document.write("Array : <br>" + arr + "<br><br>")
// let a = arr.join(" ")
// console.log(a)
// document.write("String: <br><br>" + a)


// 13. Create a new array. Store Values one by one is such a way that you can access the values in the orders in which they were stored. (FIFO-First In First Out)

// let arr = ["KeyBorad", "Mouse", "Printer", "Monitor"]

// document.write("Divice:");
// document.write("<br>" +  arr + "<br><br>")

// for(let i = 0; i < arr.length; i++){
//     document.write("out <br>" + arr[i] + "<br>")
// }

// 14. Create a new array. Store Values one by one is such a way that you can access the values in reverse orders in which they were stored. (LILO-Last In Last Out)

// let arr = ["KeyBorad", "Mouse", "Printer", "Monitor"]

// document.write("Divice:");
// document.write("<br>" +  arr + "<br><br>")

// for(let i = 0; i < arr.length; i++){
//     arr.pop()
//     document.write("out <br>" + arr[i] + "<br>")
// }


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// for(let i = 0; i < phoneManufacturers.length; i++){
//     document.write(phoneManufacturers[i]+ "<br>")
// }


// If Else 

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal

// let num1 = parseInt(prompt("Enter the first Integer:"))
// let num2 = parseInt(prompt("Enter the Second Integer:"))

// if(num1 > num2){
//     document.write("The Larger Integer is Num1:")
// }else if(num1 < num2){
//     document.write("The Larger Integer is Num2:")
// }else{
//     document.write("Both Integer are Equal:")

// }

// let userInput = prompt("Enter a Character")


// let result = userInput.toLowerCase();

// if(result == 'a' || result  == 'e'|| result == 'i' || result == 'o' || result == 'u'){
//     console.log("This character is a vowel")
// }else{
//     console.log("THis character is not a vowel")
// }

// 5. Write a program that 
// a. Store correct password in a JS variable. 

// let password = parseInt(prompt(" Enter your new Password"))

// b.Asks user to enter his/her password

// let userPassword = parseInt(prompt("Enter the Confirm Password"))

// c. Validate the two passwords:

// i. Check if user has entered password. If not, then
// give message “ Please enter your password”


// if(password == userPassword){
//     console.log("Welcome Password is Successed")
// }

// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


// else{
//     console.log("Sorry This is Wrong Password Try Again")
// }


// 6. This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;

// if(hour < 18){
//     greeting = "GoodDay"
// }else{
//     greeting = "Good Evening"
// }
// console.log(greeting)