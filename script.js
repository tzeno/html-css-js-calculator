


function bobomastoras(key) {
    var result = document.getElementById("result");
    var element_1 = document.getElementById("element_1");
    var element_2 = document.getElementById("element_2");
    switch (key) {
        case '+':
            result.innerText = parseInt(element_1.value) + parseInt(element_2.value);
            break;
        case '-':
            result.innerText = parseInt(element_1.value) - parseInt(element_2.value);
            break;
        case '/':
            result.innerText = parseInt(element_1.value) / parseInt(element_2.value);
            break;
        case '*':
            result.innerText = parseInt(element_1.value) * parseInt(element_2.value);
            break;
        case '%':
            result.innerText = (parseInt(element_1.value)/100) * parseInt(element_2.value);
            break;
        default:
            break;
    }
    
}
