const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let direction of moves) {
    switch(direction){
      case 'north': 
        y += 1;
        break;
      case 'south':
        y -= 1;
        break;
      case 'east':
        x += 1;
        break;
      case 'west':
        x -= 1;
        break;
    }
  }
  let finalPosition = [x,y];
  return finalPosition;
};
