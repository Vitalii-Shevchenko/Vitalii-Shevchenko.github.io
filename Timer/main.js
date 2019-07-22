const time = document.querySelector('.time')
let text = document.querySelector('.time').innerHTML;
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
let timeBar = document.querySelector('.timeBar');
const number= document.querySelector('.time').innerHTML;


start.onclick = function () {
    start.style.display = 'none';
    stop.style.display = 'block';
    setInterval(function () {
        text =text-1
        time.innerHTML=text;
        timeBar.style.width=(text*(100/number)) +'%'


    },1000)



};
stop.onclick = function () {
    stop.style.display = 'none'
    start.style.display = 'block';

};

