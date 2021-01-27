class Paper{
    constructor(x, y){
      this.image = loadImage("paper.png");
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     /* push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();*/
    }
  };