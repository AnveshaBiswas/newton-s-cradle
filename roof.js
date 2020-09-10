class Roof{
    constructor(x,y,width,height){
        var roof_options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,roof_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.width,this.height); 
        pop();
    }

}