class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100, 200);
    car1.addImage("car1", car1_img);
    car2 = createSprite(300, 200);
    car2.addImage("car2", car2_img);
    car3 = createSprite(500, 200);
    car3.addImage("car3", car3_img);
    car4 = createSprite(700, 200);
    car4.addImage("car4", car4_img);
    cars = [car1, car2, car3, car4];
  }

  play() {
    form.hide();

    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if (allPlayers !== undefined) {
      background(rgb(198, 135, 103));
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      var index = 0;
      var x = 175;
      var y;


      for (var plr in allPlayers) {
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;




        if (index === player.index) {
          textSize(20);
          fill("yellow");
          stroke("red");
          var number = 1;
          text(number + "- " + allPlayers[plr].name + " :" + allPlayers[plr].distance, width - 250, cars[index - 1].y);
          number = number + 1;
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
        }
      }

    }



    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
    }

    if (player.distance > 3500) {
      player.rank = player.rank + 1;
      Player.updateCarsAtEnd(player.rank);
      gameState = 2;
    }

    drawSprites();
  }

  end() {
    console.log("Game Ended"); 
    background(end1);
    /*Player.getPlayerInfo();
    player.getCarsAtEnd();
    var posX = 200;
    var posY = 200;
    fill("white");
    rect(500,500,200,200);
    for (var plr in allPlayers) {
      fill("black");
      text(allPlayers[plr].name + " " + allPlayers[plr].distance, posX, posY)
      posY += 30;
      console.log("rank");
      console.log(allPlayers[plr].name);
    }*/
  }


  }
