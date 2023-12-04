// menyiapkan canvas

const mycanvas = document.getElementById('mycanvas');



// mengatur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const ctx = mycanvas.getContext('2d');

// membuat rectangle
let x = 10;
let speed = x;
let rad = 150
function drawRectangle() {
    window.requestAnimationFrame(drawRectangle);
    ctx.clearRect(0,0,innerWidth,innerHeight);
    ctx.fillStyle = "Blue";
    ctx.linewidth = 5;
    ctx.strokeStyle = "Red";
    ctx.beginPath();
    ctx.rect(x, 10, rad, 100);
    ctx.fill();
    ctx.stroke();

    if (x > innerWidth || x < 0) {
        speed = -speed;
    }

    x+=speed;
}

drawRectangle();