function CAN() {
    let elems = document.querySelectorAll('.tdg');
    elemsAddEL(true);
    let res = document.querySelectorAll('.resultTable p');
    let gamer = 'X';
    res.innerHTML = 'Выиграл ' + gamer;
    let turn = document.querySelector('.turn');
    turn.innerHTML = 'Ходит: X';
    let btn = document.getElementById('start');
    btn.addEventListener('click', startFunc);
    let jH = 0;
    let jx = 0;
    let j0 = 0;
    let jn = 0;
    function startFunc(){
        jH = 0;
        elemsAddEL(true);
        turn.innerHTML = 'Ходит: ' + gamer;
    }
    function elemsAddEL(yn){
        if (yn){
            for (let i=0; i<elems.length; i++){
                elems[i].addEventListener('click', newGame);
                elems[i].innerHTML = '';
            }
        }
        else {
            for (let i=0; i<elems.length; i++){
                elems[i].removeEventListener('click', newGame);
            }
        }
    }
    function newGame(){
        elems[this.dataset.index].innerHTML = gamer;
        elems[this.dataset.index].removeEventListener('click', newGame);
        if (controlFunc(gamer)){
            elemsAddEL(false);
            turn.innerHTML = 'Выиграл ' + gamer;
            showResult(gamer);
        }
        else if (gamer == 'X'){
            gamer = 'O';
            turn.innerHTML = 'Ходит: O';
        }
        else {
            gamer = 'X';
            turn.innerHTML = 'Ходит: X';
        }
        jH++;
        if (jH == 9){
            turn.innerHTML = 'Ничья';
            jn++;
            res[2].innerHTML = 'Ничья: <b>' + jn + '</b>';
        }

    }

    function showResult(g){
        if (g == 'X'){
            jx++;
            res[0].innerHTML = 'Выиграл X: <b>' + jx + '</b>';
        }
        else {
            j0++;
            res[1].innerHTML = 'Выиграл O: <b>' + j0 + '</b>';
        }
    }
    function controlFunc(a){
        if( (elems[0].innerHTML == a && elems[1].innerHTML == a && elems[2].innerHTML == a) ||
            (elems[3].innerHTML == a && elems[4].innerHTML == a && elems[5].innerHTML == a) ||
            (elems[6].innerHTML == a && elems[7].innerHTML == a && elems[8].innerHTML == a) ||
            (elems[0].innerHTML == a && elems[3].innerHTML == a && elems[6].innerHTML == a) ||
            (elems[1].innerHTML == a && elems[4].innerHTML == a && elems[7].innerHTML == a) ||
            (elems[2].innerHTML == a && elems[5].innerHTML == a && elems[8].innerHTML == a) ||
            (elems[0].innerHTML == a && elems[4].innerHTML == a && elems[8].innerHTML == a) ||
            (elems[2].innerHTML == a && elems[4].innerHTML == a && elems[6].innerHTML == a) ){
            return true;
        }
        else return false;
    }
}