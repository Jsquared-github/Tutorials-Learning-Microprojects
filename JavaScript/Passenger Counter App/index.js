
const countEl = document.getElementById('count-el');
const savedCounts = document.getElementById('saved-counts');
let count =0;

function increment(){
    count++;
    countEl.innerText = count;
}

function save(){
    let addedCount= " " + count + " - "
    savedCounts.textContent += addedCount;
    countEl.innerText = 0;
    count=0;
}


