import p5 from 'p5';
import skecth from './js/sketch';
import './styles/main.css';
import motivation from './js/components/motivation';
import fs from 'fs';
// Initialize sketch
new p5(skecth);

var jsonData = fs.readFileSync('js/notes.json', 'utf8');
//console.log(jsonData);

var objData = JSON.parse(jsonData);
//console.log(objData);	
window.onload = function(){
    new motivation();
}

window.noteData = objData;