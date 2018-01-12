export default class clock{
    constructor(id){
        this.id=id;// id of clock, in case if more clocks needed
    }
    draw(){
        this.updateSeconds();
        this.updateMinutes();
        this.updateHours();
        this.rotateHours();
        this.rotateMinutes();
        this.rotateSeconds();
    }
    updateSeconds(){
        window.seconds= p5.second();
        
    }
    updateMinutes(){
        window.minutes= p5.minute();
        
    }
    updateHours(){
        window.hours= p5.hour();
    }
    rotateSeconds(){
        this.secondsAngle=p5.map(seconds,0,60,0,360);//scale seconds to degrees
        //draw and rotate line-seconds
        p5.push();
        p5.translate(250, 350);// change point of origin
        p5.rotate(this.secondsAngle);
        p5.strokeWeight(2);
        p5.stroke("red");
        p5.line(0,0,0,100);
        p5.pop();
    }
    rotateMinutes(){
        this.minutesAngle=p5.map(minutes,0,59,0,360);//scale minutes to degrees
        //draw and rotate line-minutes
        p5.push();
        p5.translate(250, 350);// change point of origin
        p5.rotate(this.minutesAngle);
        p5.strokeWeight(4);
        p5.stroke("blue");
        p5.line(0,0,0,120);
        p5.pop();
    }
    rotateHours(){
        this.hoursAngle=p5.map(hours,0,12,0,360);//scale hours to degrees
        //draw and rotate line-hours
        p5.push();
        p5.translate(250, 350);// change point of origin
        p5.rotate(this.hoursAngle);
        p5.strokeWeight(6);
        p5.line(0,0,0,-150);
        p5.pop();
    }

}