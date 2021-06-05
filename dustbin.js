class Kachrekadibba {  
    constructor( x, y, width, height){
        this.image = loadImage("sprites/dustbingreen.png");
        var options = {
            'isStatic' : true
        }

        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
	    this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
	    this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height 
        
   }
   display(){
       image(this.image,this.bodyb.position.x-100,this.bodyb.position.y-150,150,150);
   }
}