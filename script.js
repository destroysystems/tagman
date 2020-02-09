function init() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var player = { id: null, x: null, y: null, WIDTH: 50, HEIGHT: 50 };

  var socket = new WebSocket('ws://192.168.88.253:8765');

  socket.onopen = function() {
    socket.send('newSession,0')
    console.log('Connected to the server')
  };

  socket.onmessage = function(event) {
    [player.id, player.x, player.y] = event.data.split(',');
    renderPlayer(player.x, player.y);
    console.log(`[message] Data received from server: ${event.data}`);
  };

  socket.onclose = function() {
    console.log('Disconnected from the server')
  };

  drawScenario();

  window.addEventListener('keypress', requestMovement);

  function requestMovement(e) {
    switch (e.keyCode) {
      case 119:
        requestMovementUp();
        break;
      case 100:
        requestMovementRight();
        break;
      case 115:
        requestMovementDown();
        break;
      case 97:
        requestMovementLeft();
        break;
      default:
        break;
    }
  }

  function requestMovementUp() {
    socket.send(`${player.id},0`);
  }

  function requestMovementRight() {
    socket.send(`${player.id},1`);
  }

  function requestMovementDown() {
    socket.send(`${player.id},2`);
  }

  function requestMovementLeft() {
    socket.send(`${player.id},3`);
  }

  function renderPlayer(x, y) {
    clearScenario();
    var playerSprite = new Image();
    playerSprite.onload = function () {
      context.drawImage(playerSprite, x * 10, y * 10, player.WIDTH, player.HEIGHT);
    }
    playerSprite.src = "assets/ghost.png";
  }

  function drawScenario() {
    renderPlayer(player.x, player.y)
  }

  function clearScenario() {
    context.clearRect(0, 0, 500, 500);
  }
}