let Age = prompt("What is Your age")
let Student = prompt("Are you a Student (yes/no)")
let ticketprice;

if(Age < 12){
    ticketprice = 5;
}
else if(Age >= 12 && Age <= 18 && Student == "yes"){
    ticketprice = 8;
}
else if(Age >= 12 && Age <= 18 && Student == "no"){
    ticketprice = 10;
}
else{
    ticketprice = 12
}

alert("Ticket Price Is $" +ticketprice)