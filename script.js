const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const convertBtn = document.getElementById('convertBtn');
const outputCode = document.getElementById('outputCode');

let isDrawing = false;

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);

convertBtn.addEventListener('click', convertDrawingToCode);

function draw(e) {
    if (!isDrawing) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function convertDrawingToCode() {
    const imageData = canvas.toDataURL();
    outputCode.textContent = `<img src="${imageData}" alt="الرسمة">`;
}