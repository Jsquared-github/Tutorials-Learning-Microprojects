
let num1 = 8
let num2 = 2
document.getElementById('num1-el').textContent= num1;
document.getElementById('num2-el').textContent= num2;
let result =document.getElementById('result')

function add(){
    let sum = num1 + num2;
    console.log(sum)
    result.innerText= "Result: "
    result.innerText += sum;
}
function subtract(){
    result.innerText= "Result: "
    result.textContent += num1 - num2;
}
function multiply(){
    result.innerText= "Result: "
    result.textContent += num1 * num2;
}
function divide(){
    result.innerText= "Result: "
    result.textContent += num1 / num2;
}