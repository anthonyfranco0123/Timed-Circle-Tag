// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, collideCircleCircle, color, colorMode, createCanvas, ellipse, height,
 *    mouseX, mouseY, random, rect, stroke, strokeWeight, text, width
 */

let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  
  // Get random coordinates for the starting position of the coin (coinX, coinY)
  coinX = random(width);
  coinY = random(height);
  
  /*to add more coins we would have to make new ellipses and 
  create new variables (coin2X, coin2Y) then creating hit2*/
  
  // Initialize time to 1000, and gameIsOver to false
  score=0;
  time = 1000;
  gameIsOver = false;
}

/*restart button can make time go back to 1000 and score to 0*/

function draw() {
  background(backgroundColor);
  
  /*for spinning coins we can use transformations or import a gif*/
  
  // Draw the coin
  ellipse(coinX, coinY, 20);
  
  /*to make smaller coins worth more points we would have to 
  make a variable for radius of ellipse and then add a if s
  tatement to make it increase points if it is a smaller raidus*/
  
  // Draw the cursor at the mouse position
  ellipse(mouseX, mouseY, 20);
  
  /*to make it move around we would have to make the mouseX/Y increase 
  and decrease once they reach the bounds of the canvas*/
  
  /*to change colors we could do fill with a variable that 
  changes with random*/
  
  // Add text with the time remaining: 
  text(`Your score is ${score}`, 20, 20);
  text(`Time remaining: ${time}`, 20, 40);
  
  handleTime();
  
  hit=collideCircleCircle(coinX, coinY, 20, mouseX, mouseY, 20);
  if(hit){
    handleCollision();
  }
  
  /* for powerups create variables to make a square and make them tiny and when 
  it is collided then it will add 100 to time*/
  
  /*for disappearing after a certain amount of time we can make a 
  loop to count a few ticks and when it reaches a number then make 
  circle dissapear and be drawn somewhere lese but with multiple 
  circles on screen*/
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  if(gameIsOver===false){ //!gameIsOver
    coinX=random(width);
  coinY=random(height);
  score+=1;
  }
  
  /*adding a loop so that once you get a few points then the cursor 
  circle will increase*/
}

/*after time hits zero big letter pop up that says game over*/

/*score rater would use a loop to say ok or great once a certian 
score is reached*/

/*make an algorithm that keeps highest score after player hits clear*/

function handleTime() {
  // We'll write code to handle the time.
  if(time>0){
    time-=1;
  } else{
    gameIsOver=true;
    text('Game over', 20, 60);
  }
}