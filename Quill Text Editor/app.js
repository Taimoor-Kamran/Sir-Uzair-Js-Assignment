let text = document.getElementById('text')
let btns = document.getElementsByClassName('action_btn')
let fontOptions = document.getElementById('font-family')
let fontSizeOptions = document.getElementById('font-size')


fontSizeOptions.addEventListener('çhange', function(){
    if(this.value === 'heading'){
        text.style.fontSize = '40px';
    }
    if(this.value === 'subHeading'){
        text.style.fontSize = '25px';
    }
    if(this.value === 'normal'){
        text.style.fontSize = '16px';
    }
})

fontOptions.addEventListener('change', function(){
    console.log(this.value)
    if(this.value === 'monospace'){
        text.style.fontFamily = "monospace"
    }
    if(this.value === 'serif'){
        text.style.fontFamily = "serif"
    }
    if(this.value === 'san-serif'){
        text.style.fontFamily = "sans-serif"
    }

})

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        console.log("this", this)

        switch (this.innerText) {
            case 'bold':
                if(text.style.fontWeight == 'bold'){
                    text.style.fontWeight = 'normal'
                }else{
                    text.style.fontWeight = 'bold'
                }
                break;
                case 'italic':
                    if(text.style.fontStyle == 'italic'){
                        text.style.fontStyle = 'normal'
                    }else{
                        text.style.fontStyle = 'italic'
                    }
                break;
                case 'underline':
                    if(text.style.textDecorationLine == 'underline'){
                        text.style.textDecorationLine = 'normal'
                    }else{
                        text.style.textDecorationLine = 'underline'
                    }
                break;
                case 'right':
                    if(text.style.textAlign == 'right'){
                        text.style.textAlign = 'normal'
                    }else{
                        text.style.textAlign = 'right'
                    }
                break;
                case 'left':
                    if(text.style.textAlign == 'left'){
                        text.style.textAlign = 'normal'
                    }else{
                        text.style.textAlign = 'left'
                    }
                break;
                case 'center':
                    if(text.style.textAlign == 'center'){
                        text.style.textAlign = 'normal'
                    }else{
                        text.style.textAlign = 'center'
                    }
                break;
                case 'justify':
                    if(text.style.textAlign == 'justify'){
                        text.style.textAlign = 'normal'
                    }else{
                        text.style.textAlign = 'justify'
                    }
                break;
                
            default:
                break;
        }

    })
}
