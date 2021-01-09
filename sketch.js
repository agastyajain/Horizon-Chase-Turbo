var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var bg;
var logo, logo_img;
var CarsAtEnd;
var end_img;
var end1;

function preload() {
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  logo_img = loadImage("../images/logo.png");
  bg = loadImage("../images/bg.png");
  end1=loadImage("../images/end.png");
}

function setup() {
  canvas = createCanvas(windowWidth-10,windowHeight-22);
  database = firebase.database();
  logo = createSprite(625, 60, 20, 20);
  logo.addImage(logo_img);
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (gameState === 0) {
    background(bg);
    drawSprite(logo);
  }

  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }

}
