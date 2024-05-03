var minutes_html = document.querySelector(`#min`),
    seconds_html = document.querySelector(`#sec`),
    milliSecond_html = document.querySelector(`#msec`),
    start_btn = document.querySelector(`#start`),
    starInterval;

var minutes = 0,
    seconds = 0,
    milliSecond = 0;

function start(){
    starInterval = setInterval(function (){
        milliSecond++;
        if(milliSecond > 99){
            seconds++
            milliSecond = 0;
        }
        if(seconds > 59){
            minutes++;
            seconds = 0;
        }
        milliSecond_html.innerHTML = milliSecond;
        seconds_html.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        minutes_html.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        start_btn.disabled = true;
    },10)
}

function stop(){
    clearInterval(starInterval);
    start_btn.disabled = false;
}
function reset(){
    clearInterval(starInterval);
    minutes = 0;
    seconds = 0;
    milliSecond = 0;
    minutes_html.innerHTML = minutes;
    seconds_html.innerHTML = seconds;
    milliSecond_html.innerHTML = milliSecond;
    start_btn.disabled = false;
}