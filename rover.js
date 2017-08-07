var myRover = {
  position: [0,0],
  direction: 'N'
};

roverGrid = [['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x'],
             ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x' ,'x']];

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
    }
  }

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    }
  }

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
      }
    }

function movement(rover, commands) {
  for (i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBackward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
        }
      console.log("Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
      console.log("River Direction: " + rover.direction);
      }

    }

movement(myRover, ['f', 'f', 'b', 'l', 'f', 'r', 'b']);
