export default class notesOnClock{
    constructor(){
        //x,y positions of notes on clock
        this.gapX=0;
        this.gapY=0;
    }
    draw(){
        for(let i=0;i<window.noteData.length;i++){
            this.deadLineAngleHour=p5.map(window.noteData[i].hour,0,12,0,360);//scale hours to degrees
            this.deadLineAngleMinute=p5.map(window.noteData[i].minute,0,59,0,30);//scale hours to degrees
            //draw and rotate line-hours
            p5.push();
            p5.translate(250, 350);// change point of origin
            //update x,y locations
            if(i!=0 && window.noteData[i].hour!=window.noteData[i-1].hour)
            {//notes inside different hour range doesnt depend on each others pos
                this.resetGap();
            }
            this.gapX= this.gapX+40*p5.cos(this.deadLineAngleHour-90);
            this.gapY= this.gapY+40*p5.sin(this.deadLineAngleHour-90);
            //draw circle
            p5.rotate(this.deadLineAngleMinute);
            p5.fill("yellow");
            p5.ellipse(this.gapX,this.gapY,20);
            this.isDeadlineReached(i);
            p5.pop();
        }
        this.resetGap();
    }
    resetGap(){
        this.gapX=0;
        this.gapY=0;
    }
    isDeadlineReached(i){
        console.log(window.hours);
        if(window.hours==window.noteData[i].hour){//in same hour as current hour
            if(window.noteData[i].minute==window.minutes) //deadline reached
            {
                if (window.noteData[i].status=="done"){//completed task!!
                    p5.fill("green");
                    p5.ellipse(this.gapX,this.gapY,20);
                }else{//task not completed :(
                    p5.fill("red");
                    this.triggerALarm();
                    p5.ellipse(this.gapX,this.gapY,20);
                }
            }
        }
    }
    triggerALarm(){

    }
}