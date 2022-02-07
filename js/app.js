document.getElementById("history").addEventListener('click', showHistory);
document.getElementById("close").addEventListener('click', closeHistory);
document.getElementById('equal').addEventListener('click', deleteNoneHistories);

//Variables

const calculator_history = document.getElementById("calculator-history--container");
const none_histories = document.getElementById("none-histories");

//Posicionar scroll al final
function resizeScroll () {
    save.scrollLeft = save.clientWidth;
}

function showHistory() {
    calculator_history.classList.toggle('calculator-history--show');
}

function closeHistory() {
    calculator_history.classList.toggle('calculator-history--show')
}

function deleteNoneHistories() {
    if (numbers[0] > 0) {
        none_histories.classList.add('none-histories--none')
    }
}