// 1.

// let firstName = prompt("Enter Your FirstName")

// let LastName = prompt("Enter Your Last Name")

// let fullName = firstName + LastName

// document.write("Hello My Name is , " + fullName )

// 2.

// let userInput = prompt("Let me know What is your favourite Mobile Phone")

// document.write("My Favouirte Phone is :" + userInput + "<br>")
// document.write("Length Of String :" + userInput.length)

// 3.   

// let word = "Pakistani"

// let index = word.indexOf("n")

// document.write("String: " + word + "<br>")
// document.write("Index of " + "'n':" + " " + word.length)

// 4.

// let word = "Hello World"

// let index = word.lastIndexOf("l")

// document.write("String: " + word + "<br>")
// document.write("Last Index of " + "'l':" + " " + index)


// 5.

// let letter = "Pakistani"
// document.write("String: " + letter + "<br>")
// document.write("Character at index 3: " + letter.charAt(3))

// 6.

// let firstName = prompt("What is Your FirstName")
// let lastName = prompt("What is Your lastName")

// let fullName = firstName.concat(" ", lastName)

// document.write("Your full Name is : " , fullName)

// 7.

// let replacement = "Hyder"
// let replacement2 = "Islam"
// document.write("City: " + replacement + "<br>")
// document.write("Before replacement: " + replacement2 + "<br><br>")

// document.write("City: " + replacement.replace("Hyder", "Hyderabad" + "<br>"))
// document.write("After replacement " + replacement2.replace("Islam", "Islamabad" + "<br>"))

// 8.

// let message = "Ali and Sami are best friends. They play cirecket and football together." 
// let messageReplace = message.replace("and", "&")
// document.write("<br>" + "Ali and Sami are best friends. They play cirecket " + messageReplace + " football together")

9.

// let Value1 = "472"
// document.write("Value: ",  Value1 , "<br>")
// document.write("Type: ", typeof(Value1), "<br><br> " )

// let Change = Number(Value1)

// document.write("Value: " , Value1 , "<br>")
// document.write("Type: " , typeof(Change))

10.

// let name1 = prompt("Enter A Dray Furits Name")
// document.write("UserInput: ", name1 , "<br>")
// let b = name1.toUpperCase()
// document.write("UpperCase : " , b )
 
// 11.

// let userName = prompt("What is Your Name") 

// let tileCase = userName.split(' ')
// for(let i = 0; i< userName.length; i++){
// let b = tileCase[i].charAt(0).toUpperCase() + tileCase[i].slice(1).toLowerCase()
// document.write(b)
// }

// 12. 

// let num = 35.36;
// let b = num.toString().replace('.',"")
// console.log(typeof(b))
// console.log(b)

// 13.

function validateUsername(userName){
    let pattern = /[!@.,]/
    if(pattern.test(userName)){
        return false;
    }else{
        return true
    }
}

function main(){
    let userName = prompt("Enter Your UserName")
    if(validateUsername(userName)){
        alert("UserName Contains special symbol. Please enter a valid username")
    }else{
        alert("UserName is Valid")
    }
}

main()



// 16.

// let university = "University of Karachi"

// for(let i = 0; i < university.length; i++){
//     console.log(university[i])
// }

// 17.

// let userInput = prompt("Enter your Country Name")
// if(userInput !== null && userInput !== ""){
//     let lastCharacter = userInput[userInput.length -1]
//     alert("The last character is: " + lastCharacter) 
// }else{
//     alert("you did'not enter anything")
// }

// 18.

// let sentence = "The quick brown fox jumps over the lazy dog"
// let wordToCount = "the"
// let count = 0;

// let word = sentence.split(" ")

// for(let i = 0; i < word.length; i++){
//     if(word[i].toLowerCase() === wordToCount.toLowerCase()){
//         count++;
//     }
// }

// console.log(`the word ${wordToCount} appears ${count} times in the sentnces`)