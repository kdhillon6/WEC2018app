import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import Img from '../assets/clock.png';
import Img2 from '../assets/clock2.png';
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
  window.clockImg;
  //to vibrate-alarm effect
  window.randomX=0;
  window.randomY=0;
  //clock object
  var analogClock;
  //notes on Clock object
  var notesIndicator;
  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas');
    p5.angleMode(p5.DEGREES);
    window.clockImg2=p5.loadImage(Img2);
    window.clockImg=p5.loadImage(Img);
    analogClock = new clock(1);
    notesIndicator= new notesOnClock();
    
  }

  // Draw function
  p5.draw = () => {
    p5.background(255);
    p5.image(clockImg,window.randomX,window.randomY+100,canvasWidth,canvasWidth);
    notesIndicator.draw();
    analogClock.draw();
    
  }
}

export default sketch;
