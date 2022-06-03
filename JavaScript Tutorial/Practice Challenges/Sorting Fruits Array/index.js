let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let fruitEl = document.getElementById('fruit-el');
fruitEl.textContent = fruit;
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");


function sortFruits(){
    for (let count = 0; count < fruit.length; count++){
        if(fruit[count] === "🍎"){
            appleShelf.textContent += "🍎 "
        }
        else{
            orangeShelf.textContent += "🍊 "
        }
    }
}