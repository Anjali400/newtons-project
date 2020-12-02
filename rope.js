class rope{
    constructor(bodyA,pointB){
    
       var options={
        bodyA:bodyA,
        pointB:pointB,
      stiffness:1,
      angularStiffeness:1,
      length:220
    }
    this.pointB=pointB;
    this.pointX=bodyA.X;
    this.pointY=bodyA.y-250;
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    
      
        
        
    }
    display(){

       if(this.rope.bodyA){
           var pointA=this.rope.bodyA.position;
           var pointB=this.pointB;
           push()
           strokeWeight(3.5);
           line(pointB.x,pointB.y,pointA.x,pointA.y)
           pop()
       }
    }
}
