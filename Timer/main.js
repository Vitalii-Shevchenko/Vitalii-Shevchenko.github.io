const time = document.querySelector('.time')
let text = document.querySelector('.time').innerHTML;
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
let timeBar = document.querySelector('.timeBar');
const number= document.querySelector('.time').innerHTML;
let timer

const time1 = document.querySelector('.time1')
let text1 = document.querySelector('.time1').innerHTML;
const start1 = document.querySelector('.start1');
const stop1 = document.querySelector('.stop1');
let timeBar1 = document.querySelector('.timeBar1');
const number1= document.querySelector('.time1').innerHTML;
let timer1

window.onload=function(){
    start.click()
}

start.onclick = function () {
    start.style.display = 'none';
    stop.style.display = 'block';
    timer= setInterval(function () {
        text =text-1
        time.innerHTML=text;
        timeBar.style.width=(text*(100/number)) +'%'
        if(text === 0){
            clearInterval(timer)
        }

    },1000)

};
stop.onclick = function () {
    stop.style.display = 'none';
    start.style.display = 'block';
    clearInterval(timer)
};

start1.onclick = function () {
    start1.style.display = 'none';
    stop1.style.display = 'block';
    timer1= setInterval(function () {
        text1 =text1-1
        time1.innerHTML=text1;
        timeBar1.style.width=(text1*(100/number1)) +'%'
        if(text1 === 0){
            clearInterval(timer1)
        }

    },1000)

};
stop1.onclick = function () {
    stop1.style.display = 'none';
    start1.style.display = 'block';
    clearInterval(timer1)
};
