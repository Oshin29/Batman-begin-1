class Umbrella {
    constructor(x, y) {
        var options = {

            isStatic:true
        }
        this.r = 50;
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.umbrella);
    }
    display() {

        var pos = this.umbrella.position;
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }

};