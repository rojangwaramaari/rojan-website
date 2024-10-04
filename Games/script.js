const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the dimensions of the game grid
const gridSize = 20;
const canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

let snake = [{x: 100, y: 100}, {x: 80, y: 100}, {x: 60, y: 100}]; // Initial snake position with segments
let direction = {x: gridSize, y: 0}; // Moving right initially
let food = getRandomFoodPosition();
let score = 0;
let gameInterval = null;
let isGameRunning = false;

const playPauseBtn = document.getElementById('playPauseBtn');

// Motivational quotes for score milestones
const motivationalQuotes = {
    10: "Great job! You're on a roll!",
    20: "Keep going! You're unstoppable!",
    30: "Impressive! You're halfway to greatness!",
    40: "Amazing work! The sky's the limit!",
    50: "You're a true champion!",
    60: "Incredible! You're dominating the game!",
    70: "You're a snake master!",
    80: "Almost there! Keep pushing!",
    90: "So close to perfection!",
    100: "You've reached the pinnacle! True greatness!"
};

const quoteElement = document.createElement('div');
quoteElement.className = 'motivational-quote';
document.body.appendChild(quoteElement);

// Handle Play/Pause functionality
playPauseBtn.addEventListener('click', function() {
    if (isGameRunning) {
        clearInterval(gameInterval);
        playPauseBtn.textContent = 'Play';
    } else {
        gameInterval = setInterval(gameLoop, 100);
        playPauseBtn.textContent = 'Pause';
    }
    isGameRunning = !isGameRunning;
});

// Controls for snake movement
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && direction.y === 0) {
        direction = {x: 0, y: -gridSize};
    } else if (event.key === 'ArrowDown' && direction.y === 0) {
        direction = {x: 0, y: gridSize};
    } else if (event.key === 'ArrowLeft' && direction.x === 0) {
        direction = {x: -gridSize, y: 0};
    } else if (event.key === 'ArrowRight' && direction.x === 0) {
        direction = {x: gridSize, y: 0};
    }
});

function gameLoop() {
    update();
    draw();
}

function update() {
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    snake.unshift(head);

    // Check for snake collision with walls
    if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize) {
        endGame();
    }

    // Check for snake collision with itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
        }
    }

    // Check if snake eats food
    if (head.x === food.x && head.y === food.y) {
        score += 1;
        document.getElementById('scoreValue').textContent = score;
        food = getRandomFoodPosition();
        checkForMotivationalQuote();
    } else {
        snake.pop(); // Remove tail if no food is eaten
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake head
    ctx.fillStyle = '#006400'; // Dark green for snake head
    ctx.fillRect(snake[0].x, snake[0].y, gridSize, gridSize);

    // Draw snake body
    ctx.fillStyle = '#228B22'; // Lighter green for snake body
    for (let i = 1; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, gridSize, gridSize);
    }

    // Draw food
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function getRandomFoodPosition() {
    let x, y;
    do {
        x = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
        y = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    } while (snake.some(part => part.x === x && part.y === y)); // Avoid spawning on the snake
    return {x, y};
}

function checkForMotivationalQuote() {
    if (motivationalQuotes[score]) {
        showMotivationalQuote(motivationalQuotes[score]);
    }
}

function showMotivationalQuote(quote) {
    quoteElement.textContent = quote;
    quoteElement.style.opacity = 1;

    // Fade out the quote after 3 seconds
    setTimeout(() => {
        quoteElement.style.opacity = 0;
    }, 3000);
}

function endGame() {
    clearInterval(gameInterval);
    alert('Game Over! Your score was: ' + score);
    resetGame();
}

function resetGame() {
    snake = [{x: 100, y: 100}, {x: 80, y: 100}, {x: 60, y: 100}];
    direction = {x: gridSize, y: 0};
    food = getRandomFoodPosition();
    score = 0;
    document.getElementById('scoreValue').textContent = score;
    isGameRunning = false;
    playPauseBtn.textContent = 'Play';
}
