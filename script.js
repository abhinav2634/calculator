let expression = "";

function appendCharacter(char) {
    expression += char;
    updateDisplay();
}

function clearDisplay() {
    expression = "";
    updateDisplay();
}

function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    const resultDisplay = document.getElementById("result");
    resultDisplay.value = expression;
}
