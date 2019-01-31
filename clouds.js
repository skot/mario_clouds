var pixel_size = Math.floor(window.innerHeight / 240);
var frequency = 700;
var sky_width = 1000; //NES pixels
var sky_left = ((window.innerWidth / pixel_size) / 2) - sky_width/2;
var sky_right = ((window.innerWidth / pixel_size) / 2) + sky_width/2;


function setScale(element) {
    element.style.transform = "scale(" + pixel_size + ")";
}

function setPosition(element, x, y) {
    element.style.left = x * pixel_size - sky_right + 'px';
    element.style.top = y * pixel_size + 'px';
}

function move(boxElement) {
    // Calculate and store some of the box coordinates:
    var boxLeftPos = boxElement.offsetLeft;

    if (boxLeftPos < 0 - (boxElement.offsetWidth*Math.ceil(Math.sqrt(pixel_size))) ) {
        boxLeftPos = document.body.offsetWidth + (boxElement.offsetWidth*Math.ceil(Math.sqrt(pixel_size)));
    }

    // Recalculate position:
    boxElement.style.left = (boxLeftPos - pixel_size) + 'px';


}

var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');

setPosition(c1, 121,67);
setScale(c1);

setPosition(c2, 275,158);
setScale(c2);

setPosition(c3, 351,27);
setScale(c3);

setPosition(c4, 419, 135);
setScale(c4);

setPosition(c5, 539, 25);
setScale(c5);

setPosition(c6, 600, 104);
setScale(c6);


setInterval(function(){ return move(c1); }, frequency);
setInterval(function(){ return move(c2); }, frequency);
setInterval(function(){ return move(c3); }, frequency);
setInterval(function(){ return move(c4); }, frequency);
setInterval(function(){ return move(c5); }, frequency);
setInterval(function(){ return move(c6); }, frequency);
