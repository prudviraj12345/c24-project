class Ball {
constructor(x,y,width){
var options = {
    'restitution':0.3,
    'friction':0.5,
    'density':1.2 
}
this.body = Bodies.circle(x,y,width,50);
this.width = width;
this.height = 50;

World.add(world, this.body);


}

display(){
   
    var pos = this.body.position
    push();
    fill(255);
    
    circle(0, 0, this.width, this.height);



}



}