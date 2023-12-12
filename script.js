const formItem = document.getElementById('form-item');
const listItem = document.getElementById('list-item');
const inputField = document.getElementById('input-field');
const clearBtn = document.getElementById('clear');

function onAddItemSubmit(e){
    e.preventDefault();
    const newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an item");
        return;
    }

    addItemToDOM(newItem)
    addItemToStorage(newItem);

}

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    listItem.appendChild(li);
    inputField.value = '';
    inputField.focus();
}

function addItemToStorage(item){
    const itemsFromStorage = getItemsFromStorage();

        itemsFromStorage.push(item);
        localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
    let itemsFromStorage;
        if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function clearItems() {
    while(listItem.firstChild){
        listItem.firstChild.remove(listItem.firstChild)
    }
    localStorage.removeItem('items')
}


formItem.addEventListener('submit', onAddItemSubmit);
clearBtn.addEventListener('click', clearItems);