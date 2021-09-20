import { ToDo } from "./TDObj"; 
import {refreshDisplay} from "./updateDOM";
let TDList = [];

function newTD() {
    const newTD = new ToDo(`Make Button`, 0,'Making a test button', '02/02/02', 'HIGH', 'THIS IS A TEST')
    TDList.push(newTD);
    const newTD1 = new ToDo(`Make Button`, 1,'Making a test button', '02/02/02', 'HIGH', 'THIS IS A TEST')
    TDList.push(newTD1);
    const newTD2 = new ToDo(`Make Button`, 2,'Making a test button', '02/02/02', 'HIGH', 'THIS IS A TEST')
    TDList.push(newTD2);
    refreshDisplay(TDList);
}

function getTDList() {
    return TDList;
}

export {newTD, getTDList}