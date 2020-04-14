function buttonjs41() {
    let in1 = document.getElementById("in1");
    let in2 = document.getElementById("in2");
    let in3 = document.getElementById("in3");
    let hide = document.getElementById("hide");
    hide.value = +in1.value + +in2.value + +in3.value;
    hide.setAttribute('type', 'text');
}

function buttonjs42() {
    let in1 = document.getElementById("in1");
    let str = in1.value;
    let strReverse = str.split('').reverse().join('');
    if(str == strReverse) {
        alert("Строка является палиндромом");
    }
    else{
        alert("Строка не является палиндромом");
    }
}
function buttonjs43() {
    let in1 = document.getElementById("in1");
        let rnd = '';
    while (rnd.length < 5) {
        rnd += Math.random().toString(36).substring(5);
    }
    in1.value = rnd;
}
let chColorText;
let arrayColor ;
let colorInArrayColor;
function buttonjs44() {
    chColorText = document.getElementById('changedColorText');
     arrayColor = ['red', 'green', 'blue'];
    colorInArrayColor = 0;

    window.timerId = window.setInterval(func, 1000);
}
function func() {

    chColorText.style.color = arrayColor[colorInArrayColor];
    colorInArrayColor++;

    if (i > arrayColor.length) {
        colorInArrayColor = 0;
    }
}
let article;
function buttonjs45() {
    let inputs = document.querySelectorAll('input');
    article = document.getElementById('article');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', funcLan);
    }
}
function funcLan() {
    article.innerHTML = this.value;
}

function buttonjs46() {
    let divs = document.querySelectorAll('.labtext');
    for (let div of divs) {
        div.innerHTML = (div.innerHTML.slice(0, 10).concat('...'));
    }
}

function buttonjs47() {
    let elems = document.getElementsByTagName('a');
    let p = document.getElementById('pa');

    for (let i=0; i<elems.length; i++) {
        elems[i].addEventListener('click', getRed);
    }

    function getRed() {
        for (let i=0; i<elems.length;i++) {
            elems[i].style.backgroundColor = '';
        }
        this.style.backgroundColor = 'red';
        p.innerHTML = this.innerHTML;
    }
}