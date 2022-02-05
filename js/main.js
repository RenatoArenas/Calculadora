document.getElementById('calculator-buttons').addEventListener('click', saveNumbers);
document.getElementById('equal').addEventListener('click', resolve);
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('delete').addEventListener('click', del);

const save = document.getElementById("save");
const number = document.getElementById("number");

let clickElement;
let numbers = [];
let numberIn = "";
let signIn;
let isNumber;
let saveText;

function detectElement(e) {
    if (e == null) {
        clickElement = e.srcElement;
    }
    else {
        clickElement = e.target.textContent;
    }
}
function validateNumbers() {
    let numbersValidate = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    isNumber = false;
    for(let i in numbersValidate) {
        if (clickElement === numbersValidate[i]) {
            isNumber = true;
        }
    }
}

function saveNumbers(e) {
    detectElement(e);
    validateNumbers();
    resizeScroll();
    if (isNumber) {
        number.innerText = "";
        numberIn += clickElement;
        number.innerText = numberIn;
        console.log(numberIn);
    }
    if (clickElement === "+/-") {
        numberIn = 0 - numberIn;
        number.innerText = numberIn;
    }
    if (clickElement === "+" || clickElement === "-" || clickElement === "x" || clickElement === "/") {

        if (signIn == "=") {
            save.textContent = "";
        }

        number.innerText = "";
        numbers.push(Number(numberIn));
        signIn = clickElement;
        for (let i = 0; i < numbers.length; i++) {
            saveText = document.createTextNode(numbers[i] + " " + signIn + " ");
        }
        save.appendChild(saveText);
        numberIn = "";
    }
    console.log(numbers);
}

function resolve() {
    numbers.push(Number(numberIn));
    result = numbers.reduce(function calculos(a, b) {
        if (signIn == "+") {
            return a + b;
        }
        else if (signIn == "-") {
            return a - b;
        }
        else if (signIn == "x") {
            return a * b;
        }
        else if (signIn == "/") {
            return a / b;
        }
        
    });
    for (let i = 0; i < numbers.length; i++) {
        saveText = document.createTextNode(numbers[i]);
    }
    save.appendChild(saveText);
    signIn = "=";
    number.innerText = result;
    numberIn = result;
    numbers = [];
}

function clear() {
    numberIn = "";
    numbers = [];
    signIn = "";
    saveText = "";
    isNumber = "";
    save.innerHTML = "";
    number.innerHTML = "0";
}
function del() {
    numberIn = String((numberIn - numberIn.charAt(numberIn.length-1))/10);
    number.innerText = numberIn;
}