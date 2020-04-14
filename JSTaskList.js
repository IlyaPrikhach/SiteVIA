function TaskList() {

    let table = document.querySelector('table');
    let field = document.querySelector('#inputList');

    field.addEventListener('keypress', addTask);
    table.addEventListener('click', checkTask);
    table.addEventListener('dblclick', edit);
    table.addEventListener('click',removeTr);

    function addTask(event) {
        if (event.keyCode === 13) {
            addTr();
            clearInput();
        }
    }

    function createTd() {
        let elem = document.createElement('td');
        elem.setAttribute('class', 'tdelem');
        let input = document.createElement('input');
        let span = document.createElement('span');
        let diva = document.createElement('div');
        diva.setAttribute('class', 'diva');
        input.setAttribute('type', 'checkbox');
        span.innerHTML = '<i>' + field.value + '</i>';
        diva.innerHTML = 'x';
        elem.appendChild(input);
        elem.appendChild(span);
        elem.appendChild(diva);
        return elem;
    }

    function addTr() {
        table.appendChild(createTr());
    }

    function createTr() {
        let tr = document.createElement('tr');
        tr.appendChild(createTd());
        return tr;
    }

    function clearInput() {
        field.value = '';
    }

    function checkTask(event) {
        let elem = event.target.closest('input[type="checkbox"]');
        if (elem) {
            elem.style.visibility = 'hidden';
            elem.nextElementSibling.style.textDecoration = 'line-through';
        }
    }

    function edit(event) {
        let elem = event.target.closest('i');
        if (elem) {
            elem.parentElement.appendChild(createInput(elem));
        }
    }

    function createInput(elem) {
        let input = document.createElement('input');
        input.value = elem.innerHTML;
        elem.innerHTML = '';
        input.addEventListener('keypress', saveEdit);
        return input;
    }

    function saveEdit(event) {
        let elem = event.target.closest('input');
        let editElem = elem.parentElement.firstElementChild;
        if (event.keyCode === 13) {
            editElem.innerHTML = elem.value;
            elem.style.display = 'none';
        }
    }

    function removeTr(event) {
        let elem = event.target.closest('.diva');
        if (elem) {
            let tr = elem.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
        }
    }
}