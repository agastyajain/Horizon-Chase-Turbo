class Form {

  constructor() {
    this.input = createInput("Enter your Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.greet = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("RESET")
  }
  hide() {
    this.greeting.hide();
    this.greet.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display() {
    this.button.style("background-color", "#FEA834");
    this.button.style("border", "2px solid red");
    this.button.style("border-radius", "9px");
    this.button.style("width", "150px");
    this.button.style("height", "50px");
    this.input.style("width", "250px");
    this.input.style("height", "30px");
    this.input.style("border", "3px solid black");
    this.input.style("border-radius", "3px solid black");
    this.title.html("Multiplayer Car Racing Game");
    this.title.position(420, 105);
    this.input.position(width / 2 - 150, 190);
    this.button.position(550, 250);
    this.title.style("color", "red");
    this.title.style("font-size", "36px");

    this.reset.position(30, 20);
    this.reset.style("background-color", "#FEA834");
    this.reset.style("border", "2px solid red");
    this.reset.style("border-radius", "9px");
    this.reset.style("width", "100px");
    this.reset.style("height", "30px");

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(500, 150);
      this.greet.html("Waiting For Other Players To Join... 4 players should join");
      this.greet.position(400, 180);
    });



    this.reset.mousePressed(() => {
      player.updateCount(playerCount - 1);
      game.update(0);
      cars[player.index - 1].destroy();
      game.start();
    });


  }
}
