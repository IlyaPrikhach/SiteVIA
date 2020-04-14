function vkladki() {
    let list = document.querySelector('.tabs-list');
    let parag = document.querySelectorAll('.text-wrap');
    let items = document.querySelectorAll('.tabs-list li');

    list.addEventListener('click', changeActiveElem);

    function changeActiveElem(event) {
        let item = event.target.closest('.tabs-list li');
        if (item && !item.classList.contains('active')) {
            removeClass(items, 'active');
            addClass(item, 'active');
            removeClass(parag, 'active');
            addClass(parag[getItemPosition(item)], 'active');
        }
    }

    function getItemPosition(elem) {
        for (let i=0; i<items.length; i++) {
            if (items[i] === elem) return i;
        }
    }

    function removeClass(elems, className) {
        for (let i=0; i<elems.length; i++) {
            elems[i].classList.remove(className);
        }
    }

    function addClass(elem, className) {
        elem.classList.add(className);
    }

}