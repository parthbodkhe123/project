class paper
{
    constructer (x,y,r)
    {
   var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }
this.x=x
this.y=y
this.r=r
this.body=Bodies.cirle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
    }
    display()
    {
        var crumble=this.body.position;
        Push ();
        translate(crumble.x,crumble.y)
        rectmode(center)
        strokeweight(2)
        fill(225,0,225)
        ellipse(0,0,this.r,this.r)
        Pop ();
    }
}