function buttonjs211() {
    let date = new Date();
    alert(date.getDate())
}
function buttonjs212() {
    let date = new Date();
    alert(date.getMonth() + 1)
}
function buttonjs213() {
    let date = new Date();
    alert(date.getFullYear())
}
function buttonjs214() {
    let date = new Date();
    let time = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
   let year = date.getFullYear();
   let month = date.getMonth() + 1;
   let day = date.getDate();
   if (month < 10) {
month = ("0" + month);
   }
    if (day < 10) {
        day = ("0" + day);
    }
    alert(time + " " + day + "." + month + "." + year);
}

function buttonjs221() {
    let date = new Date();
    let day = (date.getDay() + 7);
    if (day >= 8) {
        day = day - 7;
    }
    alert(day);
}

function buttonjs222() {
    let date = new Date();
    let day = (date.getDay() + 7);
    if (day >= 8) {
        day = day - 7;
    }
    showDay(day);
}

function showDay(day) {
    if(day == 1) {
    alert("понедельник");
}
    else if(day == 2) {
        alert("вторник");
    }
    else if(day == 3) {
        alert("среда");
    }
    else if(day == 4) {
        alert("четверг");
    }
    else if(day == 5) {
        alert("пятница");
    }
    else if(day == 6) {
        alert("суббота");
    }
    else if(day == 7) {
        alert("воскресенье");
    }
}
function buttonjs223() {
    let date = new Date('January 7, 2015');
    let day = (date.getDay() + 7);
    if (day >= 8) {
        day = day - 7;
    }
    alert(day);
}
function buttonjs23() {
    let date = new Date();
    date = date.toDateString();
   let mlsec =  Date.parse(date);
   let min = mlsec / 60000;
   alert(min);
}

function buttonjs24() {
    let date = new Date();
    date = date.toDateString();
    let mlsecNow =  Date.parse(date);
    let mlsec88 = Date.parse('March 1, 1988');
   let hours = (mlsecNow - mlsec88) / 3600000;
   alert(hours);
}
function buttonjs25() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    min = (hours * 60) + min;
    sec = sec + (min * 60);
    alert(sec);
}

function buttonjs261() {
   let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    min = (hours * 60) + min;
    sec = sec + (min * 60);
    alert(86400 - sec);
}

function buttonjs262() {
    let input = document.getElementById("birthday");
    let date = new Date();
    date = date.toDateString();
    let inputText = input.value;
   let arr = [];
   arr = inputText.split('-');
   arr[0] = 2020;
   let newdate = (arr[0] + "-" + arr[1] + "-" + arr[2]);
    let birthday = Date.parse(newdate);
    let today = Date.parse(date);
    let variaty = (today - birthday) / (3600000 * 24);
    variaty = variaty.toFixed();
    if (variaty <= 0) {
        alert(variaty * -1);
    }
    if (variaty > 0) {
        alert(365 - variaty);
   }
}

function buttonjs271() {
    let bt = document.getElementById('bt');
    bt.setAttribute("disabled", "disabled");
    window.timerId = window.setInterval(timer, 1000);

}
function timer() {
    let elem = document.getElementById('timer');
    elem.value = parseInt(elem.value)+1;
}
function buttonjs272() {
    window.clearInterval(window.timerId);
    let bt = document.getElementById('bt');
    bt.removeAttribute("disabled");
}
function buttonjs273() {
    let bt = document.getElementById('bt');
    bt.setAttribute("disabled", "disabled");
    window.timerId = window.setInterval(clock, 1000);
}
function clock() {
    let elem = document.getElementById('clock');
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    elem.value = hh + ":"+ mm + ":" + ss ;
}

function buttonjs274() {
    let bt = document.getElementById('bt');
    bt.setAttribute("disabled", "disabled");
    window.timerId = window.setInterval(otschet, 1000);

}

function otschet() {
    let elem = document.getElementById('otschet');
    elem.value = (elem.value) - 1;
    if (elem.value <= 0) {
    clearInterval(window.timerId);
}
}


function buttonjs275() {
    let bt = document.getElementById('bt');
    bt.setAttribute("disabled", "disabled");
    window.timerId = window.setInterval(midNightClock, 1000);
}
function midNightClock() {
    let elem = document.getElementById('midNight');
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    hh = 23 - hh;
    mm = 60 - mm;
    ss = 60 - ss;
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    elem.value = hh + ":"+ mm + ":" + ss ;
}

