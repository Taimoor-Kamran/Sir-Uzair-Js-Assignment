// 1. Pop() and Push()

let fruits = ["apple", "grapes", "orange", "banana"]
alert(fruits)
console.log(fruits)

let custfruits = fruits.pop()
console.log("Customer Fruits :" + custfruits)
alert("Customer Purchased Banana")
alert("Current Fruits list is here :" + fruits);
alert("Current List of Available Fruits is here")
alert(fruits)

let addFruits = prompt("Enter New Fruits Name :");
fruits.push(addFruits);
alert("Current List of Fruits is here")
alert(fruits)
console.log("Current List of Fruits After add fruits : " + fruits);

// 2. shift() and unshift()

let newAddedFrutis = prompt("Enter Your New Added Fruits Name")
fruits.shift(newAddedFrutis);
alert("Current New Added Fruits is Here")
alert(fruits)
console.log("Current List of Added New Fruits is here : " + fruits)

let userAddFruite = prompt("Enter a furite to add begining : ")
fruits.unshift(userAddFruite);
console.log("Current List of furites is here")
alert(fruits)


// 3. splice

let numericNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
alert(numericNumbers)
let firstIndex = prompt("Enter the first Index")
let lastIndex = prompt("Enter the Last Index")
alert(numericNumbers)
alert(numericNumbers)
alert(numericNumbers)
numericNumbers.splice(firstIndex, lastIndex - firstIndex + 1)
alert(numericNumbers)
console.log("Current List of Numeric Numbers is here : " + numericNumbers)

//4. Slice

let userInputStart = prompt("Enter you Starting slice")
let userInputEnd = prompt("Enter your Ending slice.")
let userAddedSlice = numericNumbers.slice(userInputStart , userInputEnd + 1)
alert("Added Slice is Here")
console.log(userAddedSlice)