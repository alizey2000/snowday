let snowflakes = [];
let rSlider, gSlider, bSlider;

function setup() {
  createCanvas(400, 600);
  fill(240);
  noStroke();
  textSize(15);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
  let t = frameCount / 60; 

  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }


  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}


function snowflake() {
 
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {

    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

 
    this.posY += pow(this.size, 0.5);


    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
