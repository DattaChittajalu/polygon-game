class block
{
	constructor(x,y)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.w=50
		this.h=50
		this.body=Bodies.rectangle(x, y,50,50, options);
 		World.add(world, this.body);

	}
	display()
	{
			var Pos=this.body.position;		
			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}