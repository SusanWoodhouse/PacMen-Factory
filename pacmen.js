var pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
const pacMen = [];

var runStatus = false;

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale
  }
}

function randomValue(scale) {
    return Math.floor(Math.random() * scale);
  }  
    
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  let direction = 0;
  let foucs = 0;
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
  // new style of creating an object
  return {
    position,
    velocity,
    newimg,
    direction,
    focus
  }
}

function update() {
  pacMen.forEach((item) => {
     item.focus = (item.focus + 1) % 2;
     item.newimg.src = PacArray[item.direction][item.focus];
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  })
  setTimeout(update, 20);
}

function checkCollisions(item) {
   let limit = checkContainerSize();
   let imgWidth = item.newimg.width;
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
  item.position.x + item.velocity.x <= 0) {
      item.velocity.x = -1;
      item.direction = (item.direction + 1) % 2;
       }
  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
  item.position.y + item.velocity.y <= 0) {
      item.velocity.y = -item.velocity.y;
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
}
