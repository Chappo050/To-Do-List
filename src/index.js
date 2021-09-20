import './style.css';
import { newTD } from './itemManager';
import { createNewTDBtn } from './btnLogic';

function component(){
    createNewTDBtn(newTD);
}

component();