let input1 = document.getElementById("one")
let input2 = document.getElementById("two")
let input3 = document.getElementById("three")

let btnplus = document.querySelector(".btn-plus")
let btnminus = document.querySelector(".btn-minus")
let btnpower = document.querySelector(".btn-power")
let btndivide = document.querySelector(".btn-divide")
let result = document.querySelector(".result");



btnplus.onclick = function () {
    let firstValue = parseInt(input1.value);
    let secondValue = parseInt(input2.value);
    let resultValue = input1 + input2;
    result.value = resultValue;
    firstInput.value = "";
    secondInput.value = "";
}






