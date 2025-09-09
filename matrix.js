// Matrix Digital Rain Effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Resize canvas to fill window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const matrixArray = matrix.split('');

const fontSize = 16;
const columns = canvas.width / fontSize;

// Drops array
const drops = [];
for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

// Drawing function
function draw() {
  // Black background with transparency
  ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Green text
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';
  
  // Draw characters
  for (let i = 0; i < drops.length; i++) {
    // Random character
    const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
    
    // Draw character
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    // Reset drop to top randomly
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    
    // Move drop down
    drops[i]++;
  }
}

// Animation loop
setInterval(draw, 35);

// Recalculate columns on resize
window.addEventListener('resize', () => {
  const newColumns = canvas.width / fontSize;
  drops.length = newColumns;
  for (let x = drops.length; x < newColumns; x++) {
    drops[x] = 1;
  }
});
