

var Data = [
  [1001, "Muhammad Taimoor", 57, 72, 88, 63, 94,  , 500 , "%"],
  [1002, "Hasnain Saleem", 63, 52, 78, 51, 84, , 500, "%"],
  [1003, "Abdul Rehman", 51, 84, 87, 63, 82, , 500, "%"],
  [1004, "Yahya Kamran", 48, 74, 81, 65, 91, , 500, "%"],
  [1005, "Ahmed Tariq", 67, 82, 78, 63, 89, , 500, "%"],
  [1006, "Moin Surfaraz", 57, 42, 48, 53, 94, , 500, "%"],
  [1008, "Gashiq Ahmed", 87, 52, 58, 53, 64, , 500, "%"],
  [1009, "Sabhi", 97, 52, 68, 63, 84, , 500, "%"],
  [1010, "Muhammad Saad ", 97, 52, 98, 43, 74, , 500, "%"],
];

table = document.getElementById("table");
for(var i = 1; i < table.rows.length; i++)
    {
        for(var j = 0; j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].innerHTML = Data[i - 1] [j];
        }
    }

    var a = Data[1][2] + Data[1][3] + Data[1][4] + Data[1][5]
    console.log(a)
    table.rows[2].cells[7].innerText = Data[1].splice[0, 7, a];
    
