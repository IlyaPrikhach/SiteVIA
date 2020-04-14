function popap() {
    window.addEventListener('scroll', function addPopUp() {
        if (pageYOffset >= 400) {
            let popUp = document.querySelector('.pop-up');
            popUp.classList.add('active');
            window.removeEventListener('scroll', addPopUp);
        }
    });

    let closer = document.querySelector('.close-field');
    closer.onclick = closePopUp;
    function closePopUp() {
        let popUp = document.querySelector('.pop-up');
        popUp.classList.remove('active');
    }

}

function popapTime() {
        setTimeout(function() {
            let popUp = document.querySelector('.pop-up');
            popUp.classList.add('active');
        }, 5000);


    let closer = document.querySelector('.close-field');
    closer.onclick = closePopUp;
    function closePopUp() {
        let popUp = document.querySelector('.pop-up');
        popUp.classList.remove('active');
    }
}