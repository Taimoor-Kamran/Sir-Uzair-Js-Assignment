var array = [
    ["Sir Zia Khan", "Computer Science", "Oxford University"],
    ["Sir Uzair" , "Computer Science", "Sir Syed University"],
    ["Sir Ameen Alam", "Computer Science", "Ferdral Urdu University"],
    ["Sir Usama" , "Finance", "Karachi University"],
    ["Sir Okasha" , "Enginering", "Iqra University"],
    ["Sir Isfahan" , "Computer Science", "NED University"],
    ["Sir Hazma Alvi" , "Commerce ", "Aga Khan University"],
    ["Sir Atif" , "Commerce", "Sir Syed University"],
];

 table = document.getElementById("table");

for(var i = 1; i < table.rows.length; i++)
{
    for(var j = 0; j < table.rows[i].cells.length; j++)
    {
        table.rows[i].cells[j].innerHTML = array[i - 1] [j];
        table.rows[i].cells[j].innerHTML = array[i - 1] [j];
        table.rows[i].cells[j].innerHTML = array[i - 1] [j];
    }
}

