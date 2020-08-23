// give the parent class
class Log extends BaseClass 
{
      
    constructor(x,y,height,angle)
    {

      super(x,y,20,height,angle);
      // give the image for the log
      this.image = loadImage("sprites/wood2.png");
      // set angle for the log
      Matter.Body.setAngle(this.body,angle);

    }
  }
  