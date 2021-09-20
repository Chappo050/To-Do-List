import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
let TDList = [];

function newTD() {
    const newTD = new ToDo(`Make Button`,'Making a test button', '02/02/02', 'HIGH', 'THIS IS A TEST')
    TDList.push(newTD);
    refreshDisplay(TDList);
}

function getTDList() {
    return TDList;
}

export {newTD, getTDList}