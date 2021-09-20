import './style.css';
import { newTD } from './createNewTD';
import { createNewTDBtn } from './btnLogic';

function component(){
    createNewTDBtn(newTD);
}

component();