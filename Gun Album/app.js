let previewing = document.getElementById('larging')
let smalling = document.getElementsByClassName("sm-Img")

for(let i = 0; i < smalling.length; i++){
    console.log(smalling[i])
    smalling[i].addEventListener('mouseover', function(){
        previewing.src = this.src
        this.style.border = '2px solid black'
    })
    smalling[i].addEventListener('mouseout', function(){
        this.style.border = '2px solid transparent'
    })
}