import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import Img from '../assets/clock.png';
import clock from './p5Components/clock';
import notesOnClock from './p5Components/notesOnClock';

// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = 500;
  const canvasHeight = 800;

  // make library globally available
  window.p5 = p5;

  //
  window.seconds;
  window.minutes;
  window.hours;


  //clock object
  var analogClock;
  //notes on Clock object
  var notesIndicator;
  var clockImg;
  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas');
    p5.angleMode(p5.DEGREES);
    clockImg=p5.loadImage(Img);
    analogClock = new clock(1);
    notesIndicator= new notesOnClock();
    
  }

  // Draw function
  p5.draw = () => {
    p5.background("white");
    p5.image(clockImg,0,100,canvasWidth,canvasWidth);
    notesIndicator.draw();
    analogClock.draw();
    
  }
}

export default sketch;
