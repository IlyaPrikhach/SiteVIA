function dateList() {
    let date = new Date();
    let months = ['январь', 'февраль', 'март', 'аперль', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let prevButton = document.querySelector('#prev-month');
    let nextButton = document.querySelector('#next-month');
    let nowDate = document.querySelector('#date');
    let dayField = document.querySelector('#day');

    fillCalendar();

    function fillCalendar() {
        nowDate.innerHTML = getNowDate(date);
        dayField.innerHTML = '';
        for (let i=0, count = getFirstDay(date)-1; i<howManyDaysInMonth(date); i++) {
            if (count>i) {
                addEmptyCell('b');
                count--;
                i--;
            }
            else {
                dayField.appendChild(setDayCell(createElement('i'),i,date)); // не слишком намудрино?
            }
        }
    }

    function getNowDate(date) {
        let currentDate = date.getFullYear() + ' ' + months[date.getMonth()];
        return currentDate;
    }

    prevButton.addEventListener('click', function() {
        date = new Date(date.getFullYear(), date.getMonth()-1);
        fillCalendar();
    });

    nextButton.addEventListener('click', function() {
        date = new Date(date.getFullYear(), date.getMonth()+1);
        fillCalendar();
    });

    function howManyDaysInMonth(date) {
        let days = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
        return days;
    }

    function addEmptyCell(tagname) {
        dayField.appendChild(createElement(tagname));
    }

    function getFirstDay(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    function setDayCell(elem, i, date) {
        date.setDate(i+1);
        if (checkDay(date)) {
            setSelectElemStyle(elem);
        }
        elem.innerHTML = i+1;
        return elem;
    }

    function setSelectElemStyle(elem) {
        elem.style.backgroundColor = 'rgb(0,0,0)';
        elem.style.color = "rgb(255,255,255)";
    }

    function createElement(tagname) {
        return document.createElement(tagname);
    }

    function checkDay(date) {
        let nowDate = new Date();
        return (date.getDate() == nowDate.getDate() && date.getMonth() == nowDate.getMonth() && date.getFullYear() == nowDate.getFullYear());
    }
}