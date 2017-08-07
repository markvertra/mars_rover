var myRover = {
  position: [0,0],
  direction: 'N'
};

roverGrid = [[0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9],
             [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9]]

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
    };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  };

  function movement(rover, commands) {
    for (i = 0; i < commands.length; i++) {
      switch(commands[i]) {
        case 'f':
        goForward(rover);
        break;
        case 'b':
        goBackward(rover);
        break;
      }
    }
  }

movement(myRover, ['f', 'f', 'b'])
