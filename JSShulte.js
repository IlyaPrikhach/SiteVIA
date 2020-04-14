function shulte() {
    let tableEl = document.getElementById('game_table');
    let timerEl = document.getElementById('timerGame');
    let startEl = document.getElementById('start');
    let restartEl = document.getElementById('restart');
    let paused = false;
    let now = 0;
    let timer;
    let rows = 5;
    let columns = 5;
    let time = 35;
    let restTime = time;
    startEl.addEventListener('click', gameStart);
    restartEl.addEventListener('click',gameRestart);
    tableEl.addEventListener('click', init);
    function gameStart() {
        startEl.style.display = 'none';
        restartEl.style.display = 'block';
        create();
        timerEl.innerHTML = 'Времени осталось: ' + restTime;
        timer = setInterval(timeStep, 1000);
    }
    function gameRestart() {
        restTime = time;
        now = 0;
        clearInterval(timer);
        gameStart();
    }
    function timeStep() {
        restTime--;
        if (restTime > 0) {
            timerEl.innerHTML = 'Времени осталось: ' + restTime;
        } else {
            clearInterval(timer);
            timerEl.innerHTML = 'Вы проиграли';
            paused = true;
        }
    }
    function init(event) {
        let targ = event.target;//элемент, на котором произошло событие
        let check = targ.classList.contains('tds') &&
            !targ.classList.contains('select') && !paused;
        if (check) {
            let val = +targ.innerHTML;
            console.log(val, now);
            if (val === now + 1) {
                now += 1;
                targ.classList.add('select');
                if (val === rows * columns) {
                    timerEl.innerHTML = 'Вы выиграли';
                    clearInterval(timer);
                }
            }
        }
    }
    function create() {
        startEl.style.display = 'none';
        let numbers = getNumbers();
        let html = '';
        for (let i = 0; i < rows; i++) {
            html += '<tr>';
            for (let j = 0; j < columns; j++) {
                html += '<td class="tds" style="'
                    + getRandomStyle() + '">'
                    + getRandomNumber() + '</td>';
            }
            html += '</tr>';
        }
        tableEl.innerHTML = html;
        function getRandomNumber() {
            let n = randomInterval(0, numbers.length - 1);
            let res = numbers[n];
            numbers.splice(n, 1);
            return res;
        }
    }
    function getRandomStyle() {
        return 'font-size:' + randomInterval(14, 40) + 'px;'
            + 'color:' + getRandomColor();
    }
    function getNumbers() {
        let numbers = [];
        for (let i = 0; i < rows*columns; i++) {
            numbers[i] = i + 1;
        }
        return numbers;
    }
    function randomInterval(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    function getRandomColor() {
        return 'rgb(' + randomInterval(0, 255) + ',' +
            randomInterval(0, 255) + ',' + randomInterval(0, 255) + ')';
    }
}