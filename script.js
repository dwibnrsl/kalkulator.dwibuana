function insert(num) {
    document.getElementById('result').value += num;
}

function calculate() {
    let expression = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(expression);
    } catch (error) {
        document.getElementById('result').value = "Error";
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.substring(0, currentValue.length - 1);
}