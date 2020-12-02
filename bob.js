class bob
{
	constructor(x,y)
	{
		var options={
			
			restitution:0.8,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=20
		this.body=Bodies.circle(this.x, this.y, 20, options)
		World.add(world, this.body);

	}
	display()
	{
		fill ("purple")	
		ellipseMode(RADIUS)
			ellipse(this.body.position.x,this.body.position.y,20,20)		

			
			
	}

}