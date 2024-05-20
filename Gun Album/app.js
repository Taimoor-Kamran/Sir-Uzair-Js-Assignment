// let large = document.getElementById("larging")
// let small = document.getElementsByClassName("sm-Img")

// for(let i = 0; i < small.length; i++){
//     console.log(small[i])
//     small[i].addEventListener('mouseover', function(){
//         large.src = this.src
//         this.style.border = '2px solid black'
//     })
//     small[i].addEventListener('mouseout', function(){
//         this.style.border = "2px solid transparent"
//     })
// }

let large = document.getElementById("larging");

// Select all small images elements
let small = document.getElementsByClassName("sm-Img");

// Loop through each small image
for(let i = 0; i < small.length; i++){
    // Add mouseover event listener
    small[i].addEventListener('mouseover', function(){
        // Change the source of the large image to the source of the small image
        large.src = this.src;
        // Add a black border to the small image
        this.style.border = '2px solid black';
    });
    
    // Add mouseout event listener
    small[i].addEventListener('mouseout', function(){
        // Remove the border by setting it to transparent
        this.style.border = '2px solid transparent';
    });
}
