function init() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.fillStyle = 'blue';

  var player = { x: 200, y: 200, WIDTH: 100, HEIGHT: 100 };

  drawScenario();

  window.addEventListener('keypress', movePlayer);

  function movePlayer(e) {
    switch (e.keyCode) {
      case 119:
        movePlayerUp();
        break;
      case 115:
        movePlayerDown();
        break;
      case 97:
        movePlayerLeft();
        break;
      case 100:
        movePlayerRight();
        break;
      default:
        break;
    }
  }

  function movePlayerUp() {
    clearScenario();
    var playerSprite = new Path2D();
    playerSprite.rect(player.x, player.y -= 100, player.WIDTH, player.HEIGHT);
    context.fill(playerSprite);
  }

  function movePlayerDown() {
    clearScenario();
    var playerSprite = new Path2D();
    playerSprite.rect(player.x, player.y += 100, player.WIDTH, player.HEIGHT);
    context.fill(playerSprite);
  }

  function movePlayerLeft() {
    clearScenario();
    var playerSprite = new Path2D();
    playerSprite.rect(player.x -= 100, player.y, player.WIDTH, player.HEIGHT);
    context.fill(playerSprite);
  }

  function movePlayerRight() {
    clearScenario();
    var playerSprite = new Path2D();
    playerSprite.rect(player.x += 100, player.y, player.WIDTH, player.HEIGHT);
    context.fill(playerSprite);
  }

  function drawScenario() {
    var context = canvas.getContext('2d');
    var playerSprite = new Path2D();
    playerSprite.rect(player.x, player.y, player.WIDTH, player.HEIGHT);
    context.fill(playerSprite);
  }

  function clearScenario() {
    context.clearRect(0, 0, 500, 500);
  }
}