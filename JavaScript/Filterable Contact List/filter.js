//Get input element
let filterInput = document.getElementById('filterInput');

//Add Event Listener
filterInput.addEventListener('keyup', filterNames)

function filterNames(){
    //Get input value
    let filterValue = filterInput.value.toUpperCase();

    //Get names ul
    let namesList = document.getElementById('names');
    

    //Get collection items
    let names = namesList.querySelectorAll('li.collection-item');

    //Loop through names
    for(let i = 0; i< names.length; i++){
        let a = names[i].getElementsByTagName('a')[0];

        //If input matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            names[i].style.display = ''
        }
        else{
            names[i].style.display = 'none'
        }
    }
};