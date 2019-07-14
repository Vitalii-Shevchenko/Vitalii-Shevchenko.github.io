const audioA = new Audio('sound/sound_1_A.mp3');
const audioS = new Audio('sound/sound_2_S.mp3');
const audioD = new Audio('sound/sound_3_D.mp3');
const audioF = new Audio('sound/sound_4_F.mp3');
const audioG = new Audio('sound/sound_5_G.mp3');
const audioH = new Audio('sound/sound_6_H.mp3');
const audioJ = new Audio('sound/sound_7_J.mp3');
const audioK = new Audio('sound/sound_8_K.mp3');


let div =document.createElement('div');
    div.className='container';
    document.body.appendChild(div);

let buttonA = document.createElement('button');
buttonA.className="keyA";
buttonA.innerHTML='<p>A</p>';
buttonA.onmousedown= function () {
    audioA.play();
    buttonA.classList.add('click');
};
buttonA.onmouseup= function () {
    buttonA.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonA);

let buttonS=document.createElement('button');
buttonS.className="keyS";
buttonS.innerHTML='<p>S</p>';
buttonS.onmousedown= function () {
    audioS.play();
    buttonS.classList.add('click');
};
buttonS.onmouseup= function () {
    buttonS.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonS);

let buttonD=document.createElement('button');
buttonD.className="keyD";
buttonD.innerHTML='<p>D</p>';
buttonD.onmousedown= function () {
    audioD.play();
    buttonD.classList.add('click');
};
buttonD.onmouseup= function () {
    buttonD.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonD);

let buttonF=document.createElement('button');
buttonF.className="keyF";
buttonF.innerHTML='<p>F</p>';
buttonF.onmousedown= function () {
    audioF.play();
    buttonF.classList.add('click');
};
buttonF.onmouseup= function () {
    buttonF.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonF);

let buttonG=document.createElement('button');
buttonG.className="keyG";
buttonG.innerHTML='<p>G</p>';
buttonG.onmousedown= function () {
    audioG.play();
    buttonG.classList.add('click');
};
buttonG.onmouseup= function () {
    buttonG.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonG);

let buttonH=document.createElement('button');
buttonH.className="keyH";
buttonH.innerHTML='<p>H</p>';
buttonH.onmousedown= function () {
    audioH.play();
    buttonH.classList.add('click');
};
buttonH.onmouseup= function () {
    buttonH.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonH);

let buttonJ=document.createElement('button');
buttonJ.className="keyJ";
buttonJ.innerHTML='<p>J</p>';
buttonJ.onmousedown= function () {
    audioJ.play();
    buttonJ.classList.add('click');
};
buttonJ.onmouseup= function () {
    buttonJ.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonJ);

let buttonK=document.createElement('button');
buttonK.className="keyK";
buttonK.innerHTML='<p>K</p>';
buttonK.onmousedown= function () {
    audioK.play();
    buttonK.classList.add('click');
};
buttonK.onmouseup= function () {
    buttonK.classList.remove('click');
};
document.querySelector('.container').appendChild(buttonK);



////ПРОИГРЫВАНИЕ МУЗЫКИ ПРИ НАЖАТИИ КОАВИШЫ//////



document.onkeydown = function(event){
    if (event.which == 65 ){
        audioA.play();
        buttonA.classList.add('click');
    }else if (event.which == 83){
        audioS.play()
        buttonS.classList.add('click');
    }else if (event.which == 68){
        audioD.play()
        buttonD.classList.add('click');
    }else if (event.which == 70){
        audioF.play()
        buttonF.classList.add('click');
    }else if (event.which == 71){
        audioG.play()
        buttonG.classList.add('click');
    }else if (event.which == 72){
        audioH.play()
        buttonH.classList.add('click');
    }else if (event.which == 74){
        audioJ.play()
        buttonJ.classList.add('click');
    }else if (event.which == 75){
        audioK.play()
        buttonK.classList.add('click');
    }
};

document.onkeyup = function(event){
    if (event.which == 65 ){
        buttonA.classList.remove('click');
    }else if (event.which == 83){
        buttonS.classList.remove('click');
    }else if (event.which == 68){
        buttonD.classList.remove('click');
    }else if (event.which == 70){
        buttonF.classList.remove('click');
    }else if (event.which == 71){
        buttonG.classList.remove('click');
    }else if (event.which == 72){
        buttonH.classList.remove('click');
    }else if (event.which == 74){
        buttonJ.classList.remove('click');
    }else if (event.which == 75){
        buttonK.classList.remove('click');
    }
};


