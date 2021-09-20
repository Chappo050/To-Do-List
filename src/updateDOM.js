
function refreshDisplay(array) {
    displayTD(array);
}

//Adds a new to do card to the current project
function displayTD(array) {

    //clear all items
    const container = document.getElementById('listContainer');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    //add all items back in
    array.forEach(element => {

        //Items div
        const newItem = document.createElement('div');
        newItem.classList.add('TDItem');

        //Add each section of the new item inside their own divs
        const itemTitle = document.createElement('div');
        itemTitle.innerHTML = element.title;

        const itemDesc = document.createElement('div');
        itemDesc.innerHTML = element.description;

        const itemDue = document.createElement('div');
        itemDue.innerHTML = element.due;

        const itemPriority = document.createElement('div');
        itemPriority.innerHTML = element.priority;

        const itemNote = document.createElement('div');
        itemNote.innerHTML = element.note;

        newItem.appendChild(itemTitle);
        newItem.appendChild(itemDesc);
        newItem.appendChild(itemDue);
        newItem.appendChild(itemPriority);
        newItem.appendChild(itemNote);
        container.appendChild(newItem)
    });
}

export {refreshDisplay};