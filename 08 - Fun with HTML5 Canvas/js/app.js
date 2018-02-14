document.addEventListener("DOMContentLoaded", () => {
    console.log("Helo World");
    

    const canvas = document.getElementById('draw');
    console.log(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    
    let drawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let lineW = 20;
    let direction = true;

    function draw(e) {
        if(!drawing) return; 
        console.log(e);

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
        ctx.lineWidth = lineW;


        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.lastY];

        hue++;
        if(hue >= 360) {
            hue = 0;
        }

        lineW++;
        if(lineW >= 150) {
            lineW = 20;
        }

        ctx.lineWidth++;
        
    }

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        [lastX, lastY] = [e.offsetX, e.lastY];
    });
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mouseout', () => drawing = false);

  });
  