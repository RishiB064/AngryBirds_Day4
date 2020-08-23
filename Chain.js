// create the chain class
class Chain
{
    //create the constructor 
    constructor(bodyA,bodyB)
    {
        //give options
        var options =
        {
            bodyA:bodyA,
            bodyB: bodyB,
            stiffness:0.04,
            length:10
            
        }
        //give options for the constraint
        this.chain = Constraint.create(options);
        //add the  objects to world 
        World.add(world,this.chain);
    }
    display()
    {
        // assign values to the points
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        //display the constraint between the bodies
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}