// give the parent class
class Box extends BaseClass
{
 constructor(x,y,width,height)
 {
   super(x,y,width,height);
   // load an image to the box
   this.image = loadImage("sprites/wood1.png");

 }
}
