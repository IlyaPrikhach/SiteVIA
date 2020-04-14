function buttonjs1() {
   let a = prompt("Введите a", );
   let b = prompt("Введите b", );

    let result;
    if ((+a + +a) == b) {
        result = 'значения равны';

    } else {

        result = 'значения не равны';
    }
    alert(result);
}

function buttonjs2() {
    let a = prompt("Введите a", );
    let b = prompt("Введите b", );

    let result = ((a * 2) == b) ? "значения равны" : "значения не равны";
    alert(result);
}
function buttonjs12() {
    let color = prompt("Введите цвет: синий, зеленый или красный", "");
    let figure = prompt("Какова форма: круглый, квадратный?", "");
    let sizeFigure = prompt("Каков размер: ,большой, маленький?", "");
    if (color != "красный" && color != "зеленый" && figure == "круглый" && sizeFigure == "большой") {
        alert("Что-то синее и большое");
    }
    if (color != "синий" && figure == "квадратный") {
        alert("Наверное вы подумали про яблоко, но почему квадратное?");
    }
}

function buttonjs13() {
   let random = getRandomInt(1, 45);
    let text = prompt ("Введите текст, не менее " + random +  " символов");
    let arr =[];
    arr = text.split('');
    let myVar1 = arr.join('');
    if(arr.length < random){
        alert ("Вы ввели неверное количество символов");
        buttonjs13();
    }
    let j = 0;
    while( j < arr.length) {
        if (arr[j] == ' ') {

        }
        else if(j % 2 != 0) {
            arr[j] = arr[j].toUpperCase();
        }
        else if(j % 2 == 0) {
           arr[j] = arr[j].toLowerCase();
        }
        j++;
    }
    let output = arr.join('');
    alert(output);

}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buttonjs14() {
let str = prompt("Введите число больше 100 и текст");
let arr = [];
arr = str.split( ' ');
let k = arr[0];
if (k < 100 || arr.length < 2) {
    alert("Вы ввели неверное число, попробуйте снова");
    buttonjs14();
}
else {
    if (arr.length > 2) {
        alert(arr[2]);
    }
    if (arr.length == 2) {
        alert("Введено одно слово");
    }
}
}
function buttonjs15() {
    let arr = [];
    let c = 10, i = 0;
    while (c < 100) {
        if (c % 7 == 3 || c % 13 == 3) {
            arr[i] = c;
            i++;
        }
        c++;

    }
    let output = arr.join();
    alert(output);
}

function buttonjs16() {
    let color = prompt("какого цвета гриб вы нашли? (белый, желтый, красный, коричневый)");
    let form = prompt("Есть ли юбка у гриба? (есть, нет)");
switch (color) {
    case "белый":
        if(form == "нет") {
            alert("вы нашли белый гриб")
       }
        else {
            alert("с грибами надо быть внимательными")
        }
        break;
    case "желтый":
        alert("с грибами надо быть внимательными")
        break;
    case "красный":
        if(form == "нет") {
            alert("может это подосиновик?");
        }
        else if(form == "есть") {
            alert("А не мухомор ли это?");
        }
        break;
    case "коричневый":
        alert("с грибами надо быть внимательными");
        break;
}
}
