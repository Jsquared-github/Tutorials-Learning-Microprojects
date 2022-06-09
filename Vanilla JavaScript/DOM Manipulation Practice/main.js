const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById('filter')

//Form Submit Event
form.addEventListener("submit", addItem);

//Delete Button Event
itemList.addEventListener("click", removeItem);

//Search item Event
filter.addEventListener('keyup', filterItems);

//Filter Items
function filterItems(e){
    const text = e.target.value.toLowerCase();
    const list = itemList.getElementsByTagName('li');

    Array.from(list).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}

//Remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const listItem = e.target.parentElement;
      itemList.removeChild(listItem);
    }
  }
}

//Add Item
function addItem(e) {
  e.preventDefault();

  //Get input value
  const newItem = document.getElementById("item");

  //create new li element
  const li = document.createElement("li");
  li.className = "d-flex justify-content-between list-group-item";

  //Add text node with input value
  li.appendChild(document.createTextNode(newItem.value));

  //Create delete button element
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}
