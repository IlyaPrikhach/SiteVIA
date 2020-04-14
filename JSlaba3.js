function buttonjs311(){
    let elem = document.querySelector('#elem');
    if(elem.classList.contains("www")) {
        alert("www присутствует");
    }
    else {
        alert("www отсутствует");
    }
}

function buttonjs312(){
    let elem = document.querySelector('#elem');
    if(elem.classList.contains("www")) {

        alert("www присутствует");
        elem.classList.remove("www");
        alert("www удален");
    }
    else {
        alert("www отсутствует");
        elem.classList.add("www");
        alert("www добавлен");
    }
}

function buttonjs313(){
    let elem = document.querySelector('#elem');
    let classNumber = elem.classList;
    let i = 0;
    for(let Number of classNumber) {
        i++;
    }
    alert("Количество классов " + i);
}
function buttonjs314(){
    let elem = document.querySelector('#elem');
    alert(elem.classList);
}

function buttonjs32(){
    let elem = document.querySelector('#elem');
    elem.style.cssText = 'color: red; font-size: 30px; border: 4px solid wheat; text-align: center;';
}

function buttonjs331(){
    let elem = document.querySelector('#elem');
    alert(elem.tagName);
}
function buttonjs332(){
    let elem = document.querySelector('#elem');
    alert(elem.tagName.toLowerCase());
}

function buttonjs333(){
    let elems = document.querySelectorAll('.ww');
    let p = document.createElement('p');

    for(let i =0; i < elems.length; i++){
        elems[i].innerHTML = elems[i].innerHTML + " " + elems[i].tagName.toLowerCase();
    }
}

function buttonjs341(){
    let ol = document.getElementById('ol34');
    let li = document.createElement('li')
    li.innerHTML = "пункт";
    ol.appendChild(li);
}
function buttonjs342(){
    let ul = document.getElementById('ul34');
    let mass = ["apple", "bananas", "eggs", "fish"];
    for(let i = 0; i < mass.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = mass[i];
        ul.appendChild(li);
    }
}
function buttonjs35(){
    let ul = document.getElementById('ul35');
    let mass = ["apple", "bananas", "eggs", "fish"];
    for(let i = 0; i < mass.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = mass[i];
        li.addEventListener('click', func35);
        ul.appendChild(li);

    }
}

function func35() {
    alert(this.innerHTML);
}

function buttonjs36() {
    let ul = document.getElementById('parent');
    let before = document.getElementById('elem');
    let li = document.createElement('li');
    li.innerHTML = '!!!';
    ul.insertBefore(li, before);
}

function buttonjs371() {
    let elem = document.querySelector('#elem');
    elem.insertAdjacentHTML("beforebegin", '<span id="span37">!!!</span>');
}
function buttonjs372() {
    let elem = document.querySelector('#elem');
    elem.insertAdjacentHTML("afterend", '<span id="span37">!!!</span>');
}
function buttonjs373() {
    let elem = document.querySelector('#elem');
    elem.insertAdjacentHTML("afterbegin", '<span id="span37">!!!</span>');
}
function buttonjs374() {
    let elem = document.querySelector('#elem');
    elem.insertAdjacentHTML("beforeend", '<span id="span37">!!!</span>');
}

function buttonjs381() {
    let elem = document.querySelector('#elem');
    let first = elem.firstElementChild.setAttribute('id', 'first');
}
function buttonjs382() {
    let elem = document.querySelector('#elem');
    let first = elem.lastElementChild.setAttribute('id', 'first');
}
function buttonjs383() {
    let elem = document.querySelector('#elem');
    let mass = elem.children;
    for(let el of mass) {
        el.innerHTML = el.innerHTML + "!";
    }
}
function buttonjs391() {
    let elem = document.getElementById('elem');
    let prev = elem.previousElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}
function buttonjs392() {
    let elem = document.getElementById('elem');
    let prev = elem.nextElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}
function buttonjs393() {
    let elem = document.getElementById('elem');
    let prev = elem.nextElementSibling.nextElementSibling;
    prev.innerHTML = prev.innerHTML + '!';
}

function buttonjs3101() {
    let elem = document.getElementById('elem');
    elem.parentElement.style.color = 'red';
}
function buttonjs3102() {
    let elem = document.getElementById('elem');
    elem.parentElement.parentElement.style.color = 'red';
}

function buttonjs3111() {
    let parent = document.getElementById('parent');
    let child = document.getElementById('child');
    parent.removeChild(child);

}

function buttonjs3112() {
    let parent = document.getElementById('parent');
    parent.removeChild(parent.lastElementChild);
}

function buttonjs3113() {
    let elem=document.getElementById('elem');
    elem.parentElement.removeChild(elem);
}

function buttonjs3115() {
    let input = document.getElementById('input');
    let clone = input.cloneNode(true);
    input.parentElement.appendChild(clone);
}
function buttonjs3120() {
    let elem = document.getElementById('element');
    elem.parentElement.parentElement.style.display = 'none';
}