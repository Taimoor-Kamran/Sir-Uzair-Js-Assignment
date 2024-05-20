let bold = document.getElementById("bold")
let italic = document.getElementById("italic")
let underline = document.getElementById('underline')
let para = document.getElementById('para')
let left = document.getElementById('left') 
let justify = document.getElementById('justify')
let dropDown = document.getElementById('dropDown')
let editor = document.getElementById('editor')
let dropDown1 = document.getElementById('dropDown1')

bold.addEventListener('click', function(){
    para.style.fontWeight = 'bold';
})
italic.addEventListener('click', function(){
    para.style.fontStyle = 'italic'
})
underline.addEventListener('click', function(){
    para.style.textDecoration = 'underline'
})
left.addEventListener('click', function(){
    para.style.textAlignLast = 'left'
})
justify.addEventListener('click', function(){
    para.style.textAlignLast = 'center'
})
right.addEventListener('click', function(){
    para.style.textAlignLast = 'right'
})
dropDown.addEventListener('click', function(){
    para.style.fontSize = '38px'
})
dropDown1.addEventListener('click', function(){
    para.style.fontFamily = 'georgia'
})