var car1, car2, car3
var speed1, speed2, speed3, weight1, weight2, weight3
var wall
var def1, def2, def3

function setup() {
  createCanvas(800,400);
  
  //speed and weight
  speed1 = random(55,90)
  speed2 = random(55,90)
  speed3 = random(55,90)

  weight1 = random(400,1500)
  weight2 = random(400,1500)
  weight3 = random(400,1500)

  //cars
  car1 = createSprite(700,200,50,20)
  car1.shapeColor = "white"
  car1.velocityX = speed1 * -1
  def1 = 0.5 * weight1 * speed1 * speed1 / 22500

  car2 = createSprite(700,100,50,20)
  car2.shapeColor = "white"
  car2.velocityX = speed2 * -1
  def2 = 0.5 * weight2 * speed2 * speed2 / 22500
  
  car3 = createSprite(700,300,50,20)
  car3.shapeColor = "white"
  car3.velocityX = speed3 * -1
  def3 = 0.5 * weight3 * speed3 * speed3 / 22500

  //wall
  wall = createSprite(30,200,30,300)
}

function draw() {
  background(0,0,0);  
  
  //bounceOff
  if (car1.bounceOff(wall)) {
    car1.velocityX = 0
    if (def1 > 180) {
      car1.shapeColor = "Red"
    }
    if (100 < def1 < 180) {
      car1.shapeColor = "yellow"
    }
    if (def1 < 100) {
      car1.shapeColor = "green"
    }
  }

  if (car2.bounceOff(wall)) {
    car2.velocityX = 0
      //color
  if (def2 > 180) {
    car2.shapeColor = "red"
  }
  if (100 < def2 < 180) {
    car2.shapeColor = "yellow"
  }
  if (def2 < 100) {
    car2.shapeColor = "green"
  }
  }

  if (car3.bounceOff(wall)) {
    car3.velocityX = 0
      //color
    if (def3 > 180) {
      car3.shapeColor = "red"
    }
    if (100 < def3 < 180) {
      car3.shapeColor = "yellow"
    }
    if (def3< 100) {
      car3.shapeColor = "green"
    }

  }




  drawSprites();
}

