let days_html = document.getElementById('days')
let hours_html = document.getElementById('hours')
let mins_html = document.getElementById('mins')
let seconds_html = document.getElementById('seconds')

let presentTime = new Date()
let baqraEidTime = new Date('6/16/2024')
let diff = presentTime.getTime() - baqraEidTime.getTime()

let UpdatedFunc = setInterval(function(){
    let currentTime = new Date()
    let days = diff / 1000 / 60 / 60 / 24
    let hours = 24 - currentTime.getHours()
    let mins = 60 - currentTime.getMinutes()
    let seconds = 60 - currentTime.getSeconds() 

    days_html.innerText = Math.round(days)
    hours_html.innerText = Math.round(hours)
    mins_html.innerText = Math.round(mins)
    seconds_html.innerText = Math.round(seconds)
}, 1000)
