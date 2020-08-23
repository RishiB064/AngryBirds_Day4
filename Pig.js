// give the parent class
class Pig extends BaseClass 
{
    constructor(x,y)
    {
      
      super(x,y,50,50);
      //load an image to the pig
      this.image = loadImage("sprites/enemy.png");

    }
  }
  