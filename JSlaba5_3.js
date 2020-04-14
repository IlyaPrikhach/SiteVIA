let mass = new Array();
let j = 0;
    function jslaba53() {
    let input = document.getElementById('yourText');
    if(input.value == "Свой вариант ответа") {
        mass[j] = isCheck('contact').value;
    }
    else {
        mass[j] = input.value;
    }
    function isCheck(name) {
        return document.querySelector('input[name="' + name + '"]:checked');
    }

    }

function reopros() {
    let newopros = document.getElementsByName('contact');
    for (let i = 0; i < newopros.length; i++) {
        newopros[i].checked = false;
    }
    let input = document.getElementById('yourText');
    input.value = "Свой вариант ответа";
    j++;
}
function statistic() {
        let html = 0, css = 0, js = 0, php = 0, python = 0, self = 0;
    for(let i = 0; i< mass.length; i++) {
        if(mass[i] == "html") {
            html++;
        }
        else if(mass[i] == "css") {
            css++;
        }
        else if(mass[i] == "js") {
            js++;
        }
        else if(mass[i] == "php") {
            php++;
        }
        else if(mass[i] == "python") {
            python++;
        }
        else {
            self++;
        }
    }
    let sum = html + css + js + php + python + self;
    html = html / (sum / 100);
    css = css / (sum / 100);
    js = js / (sum / 100);
    php = php/ (sum / 100);
    python = python / (sum / 100);
    self = self / (sum / 100);
alert("HTML: " + html.toFixed(2) + " %" + "\n" + "JavaScript: " + js.toFixed(2) + " %" + "\n"
    + "CSS: " + css.toFixed(2) + " %"  + "\n" + "PHP: " + php.toFixed(2) + " %"  + "\n" +
    "Python: " + python.toFixed(2) + " %"  + "\n" + "Свой ответ: " + self.toFixed(2) + "%"  + "\n")
}
