const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
var background_image = "./mars.jpg", rover_image = "./rover.png";
var backgroundTag, roverTag;
var roverWidth = 100, roverHeight = 90;
var roverX = 10, roverY = 10;

function add() {
    backgroundTag = new Image();
    backgroundTag.onload = uploadBackground;
    backgroundTag.src = background_image;

    roverTag = new Image();
    roverTag.onload = uploadRover;
    roverTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener('keydown', keyDown);

function keyDown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed = '37') {
        left();
    }
    if (keyPressed = '38') {
        up();
    }
    if (keyPressed = '39') {
        right();
    }
    if (keyPressed = '40') {
        down();
    }

}