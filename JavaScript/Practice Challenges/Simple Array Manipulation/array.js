let arrayEl = document.getElementById('array-el');
let largestCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];
let china = "China";
let pakistan = "Pakistan";

arrayEl.textContent = largestCountries;
function correctArray(){
    replaceTuvalu();
    replaceMonaco();
    arrayEl.textContent = largestCountries;
}

function replaceTuvalu(){
    largestCountries.shift();
    largestCountries.unshift(china);
}
function replaceMonaco(){
    largestCountries.pop();
    largestCountries.push(pakistan);
}

