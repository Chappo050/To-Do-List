import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
import {closeForm} from "./btnLogic";
let TDList = [];

function newTD() {
    const title = document.getElementsByName('title')[0];
    const status = document.getElementsByName('status')[0];
    const desc = document.getElementsByName('desc')[0];
    const due = document.getElementsByName('due')[0];
    const priority = document.getElementsByName('priority')[0];
    const note = document.getElementsByName('note')[0];
    const newItem = new ToDo(title.value, status.value, desc.value, due.value, priority.value, note.value)
    TDList.push(newItem);
    refreshDisplay(TDList);

    title.value = '';
    status.value = ''; 
    desc.value = ''; 
    due.value = ''; 
    priority.value = '';
    note.value = '';
    closeForm();
}

function getTDList() {
    return TDList;
}

export {newTD, getTDList}