import './style.css';
import { newTD } from './itemManager';
import { loadButtons } from './btnLogic';

function component(){
    loadButtons(newTD);
}

component();