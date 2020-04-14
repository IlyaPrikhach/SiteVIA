function Calc() {
    let buttons = document.getElementsByTagName("button");
    let result = document.getElementById("result");
    let str = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", func)
    }
    function func() {
        let val = this.innerHTML;
        if (val === '=') {
            str = eval(str);
            result.value = str;
            return;
        } else if (val === 'C') {
            str = '';
        } else {
            str += val;
        }
        result.value = str;
    }
}