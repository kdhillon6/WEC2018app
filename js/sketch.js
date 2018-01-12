import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';

// Sketch scope
const sketch = (p5) => {

  // Variables scoped within p5
  const canvasWidth = 500;
  const canvasHeight = 800;

  // make library globally available
  window.p5 = p5;
  var seconds;
  var minutes;
  var hours;
  // Setup function
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas');
    seconds= p5.second();
    // Your stuff goes in here
  }

  // Draw function
  p5.draw = () => {
    p5.background("yellow");
    p5.ellipse(50, 50, 80, 80);
  }
}

export default sketch;
