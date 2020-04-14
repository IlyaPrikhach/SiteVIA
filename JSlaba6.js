function buttonjs61() {
    let str = document.querySelector('.labtext');
    let result = str.innerHTML;
    result = result.replace(/adca/g, '').match(/a..a/g);
    alert(result);
}
function buttonjs62() {
    let str = document.querySelector('.labtext');
    let out = str.innerHTML;
    alert(out.match(/ab*a/g));
}
function buttonjs63() {
    let str = document.querySelector('.labtext');
    let out = str.innerHTML;
    alert(out.match(/2\+3/g));
}
function buttonjs64() {
    let str = document.querySelector('.labtext');
    let out = str.innerHTML;
    alert(out.replace(/a.+?a/g, '!'));
}
function buttonjs65() {
    let str = document.querySelector('.labtext');
    let out = str.innerHTML;
    alert(out.match(/abbbb+a/g));
}
function buttonjs66() {
    let str = document.querySelector('.labtext');
    let result = str.innerHTML;
    result = result.replace(/ /g, '!');
    alert(result);
}
function buttonjs67() {
    let str = prompt("Введите строку");
    alert(str);
    alert(str.match(/a[abcdefg]+a/g));
}
function buttonjs68() {
    let str = document.querySelector('.labtext');
    let result = str.innerHTML;
    alert(result.match(/[а-я]+/gi));
}
function buttonjs69() {
    let str = document.querySelector('.labtext');
    let result = str.innerHTML.split(' ');
    result[2] = '!';
    let strs = result.join();
    alert(strs);
}
function buttonjs610() {
    let str = document.querySelector('.labtext');
    let result = str.innerHTML;
    alert(result.match(/aeea/gi) + ',' + result.match(/a[x]+a/gi));
}
function buttonjs611() {
    let str = document.querySelector('.labtext');
    let result = str.innerHTML;
    result = result.replace(/a\\\\\\a/g, '!');
    alert(result);
}
function buttonjs612() {
    let str = document.querySelector('.labtext');
    let result = str.innerHTML;
    alert(result.replace(/(\d)/g, '$1$1'));
}

function buttonjs613() {
    let str = prompt("Введите сроку");
    if(/^http:\/\/[a-z.-_]+\.[a-z]{2,3}$/.test(str) == true) {
        alert("Это домен");
    }
    else {
        alert("Это не домен");
    }

}