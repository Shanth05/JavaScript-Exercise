const textBox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textBox.value);
    if (toF.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"; // alt + 0176
    } else if (toC.checked) {
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C"; // alt + 0176
    } else {
        result.textContent = "Select a unit";
    }
}
