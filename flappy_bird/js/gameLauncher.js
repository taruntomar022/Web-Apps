var sky;
var birdImg;
var bird;
var pipe;
var fire;
var pipes = [];

function preload() {
    sky = loadImage("assets/sky.jpg");
    birdImg = loadImage("assets/bird.gif");
    fire = loadImage("assets/fire.png");
}

function setup() {
    createCanvas(800, 533);
    bird = new Bird(birdImg, fire);
    pipe = new Pipe();
    pipes.push(pipe);
}

function draw() {

    background(sky);
    bird.printBird();
    bird.fall();
    printPipes();
    //console.log(frameCount);
    addNewPipe();
    score1();
    //pipe.printPipe();
}

function addNewPipe() {
    if (frameCount % 130 == 0) {
        pipes.push(new Pipe());
    }
}



function printPipes() {
    //console.log("Pipe Length ",pipes.length);
    for (var i = 0; i < pipes.length; i++) {
        if (pipes[i].outOfScreen()) {
            pipes.splice(i, 1);
        }
        if (bird.hit(pipes[i])) {
            console.log("Bird Hit ....");
            bird.fall();
            gameOver();
            noLoop();
        }
        pipes[i].printPipe();
    }
}

function gameOver() {
    fill("red");
    textSize(32);
    text("Game Over", width / 2, height / 2);

}

function keyPressed() {
    const SPACE = 32;
    //console.log("Key is ",keyCode);
    if (keyCode === SPACE) {
        bird.up();
    }
}
function score1()
{
    fill('black');
    textSize(18);
    text("score is   "+mon/14,20,20);
}