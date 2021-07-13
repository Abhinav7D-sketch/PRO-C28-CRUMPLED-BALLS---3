class Paper {
    constructor(x, y, radius) {
      var options = {
           restitution:0.001,
           isStatic:false,
           friction:0.5,
           density:0.77
      }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.width = 33;
      this.image = loadImage("Images/paper.png");
      World.add(world, this.body);
    }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    fill("white");
    rotate(angle);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);
    }
  };