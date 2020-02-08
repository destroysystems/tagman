function init() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  context.fillStyle = 'blue';

  var player = { x: 225, y: 225, WIDTH: 50, HEIGHT: 50 };

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
    renderPlayer(player.x, player.y -= 25);
  }

  function movePlayerDown() {
    clearScenario();
    renderPlayer(player.x, player.y += 25);

  }

  function movePlayerLeft() {
    clearScenario();
    renderPlayer(player.x -= 25, player.y);
  }

  function movePlayerRight() {
    clearScenario();
    renderPlayer(player.x += 25, player.y);
  }

  function renderPlayer(x, y) {
    var playerSprite = new Image();

    playerSprite.onload = function () {
      context.drawImage(playerSprite, x, y, player.WIDTH, player.HEIGHT);
    }

    playerSprite.src = "assets/ghost.png";
  }

  function drawScenario() {
    renderPlayer(player.x, player.y)
  }

  function clearScenario() {
    context.clearRect(0, 0, 600, 600);
  }
}