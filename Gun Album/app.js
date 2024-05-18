let large = document.getElementById("larging")
let small = document.getElementsByClassName("sm-Img")

for(let i = 0; i < small.length; i++){
    console.log(small[i])
    small[i].addEventListener('mouseover', function(){
        large.src = this.src
        this.style.border = '2px solid black'
    })
    small[i].addEventListener('mouseout', function(){
        this.style.border = "2px solid transparent"
    })
}