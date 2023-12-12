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
    let itemsfromStorage;
    if(localStorage.getItem('items') === null){
        itemsfromStorage = [];
    }else{
        itemsfromStorage = JSON.parse(localStorage.getItem('items'));
    }

        itemsfromStorage.push(item);
        localStorage.setItem('items', JSON.stringify(itemsfromStorage));
}



formItem.addEventListener('submit', onAddItemSubmit);