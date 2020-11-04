function collide(h1, h2) {
    if (h1.x - h2.x < h1.width/2 + h2.width/2
    && h2.x - h1.x < h2.width/2 + h1.width/2
    && h1.y - h2.y < h2.height/2 + h1.height/2
    && h2.y - h1.y < h2.height/2 + h1.height/2) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function bounceOff(x1,x2) {
    if (x1.x - x2.x < x2.width/2 + x1.width/2
      && x2.x - x1.x < x2.width/2 + x1.width/2) {
    x1.velocityX = x1.velocityX * (-1);
    x2.velocityX = x2.velocityX * (-1);
  }
  if (x1.y - x2.y < x2.height/2 + x1.height/2
    && x2.y - x1.y < x2.height/2 + x1.height/2){
    x1.velocityY = x1.velocityY * (-1);
    x2.velocityY = x2.velocityY * (-1);
  }
  }