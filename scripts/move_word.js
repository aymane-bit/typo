// Store positions of placed words to prevent overlap
let placedWords = [];

function getRandomDirection() {
    // Random direction: up, down, left, or right
    return {
        x: Math.random() < 0.5 ? 1 : -1,  // Random horizontal direction: 1 for right, -1 for left
        y: Math.random() < 0.5 ? 1 : -1   // Random vertical direction: 1 for down, -1 for up
    };
}

function getRandomSpeed() {
    // Random speed between 1 and 3 pixels per frame for more randomness
    return {
        speedX: Math.random() * 2 + 0.5,
        speedY: Math.random() * 2 + 0.5
    };
}

// Create a word at the center of the screen
function createWord(word, delay) {
    const wordElement = document.createElement("span");
    wordElement.classList.add("background-word");
    wordElement.innerText = word;

    // Append the word to the DOM
    document.body.appendChild(wordElement);

    // Wait for the element to be rendered to the DOM before checking its size
    setTimeout(() => {
        let wordRect = wordElement.getBoundingClientRect();

        // Position the word in the center
        const bodyRect = document.body.getBoundingClientRect();
        const centerX = bodyRect.width / 2 - wordRect.width / 2; // Center horizontally
        const centerY = bodyRect.height / 2 - wordRect.height / 2; // Center vertically

        wordElement.style.position = "absolute";
        wordElement.style.left = `${centerX}px`;
        wordElement.style.top = `${centerY}px`;
        wordElement.style.animationDelay = delay;

        // Store the initial position and direction
        placedWords.push({
            top: centerY,
            left: centerX,
            rect: wordRect
        });

        // Set initial movement direction and speed
        const { x, y } = getRandomDirection();  // Random direction for movement
        const { speedX, speedY } = getRandomSpeed();  // Random speed for movement

        wordElement.directionX = x;
        wordElement.directionY = y;
        wordElement.speedX = speedX;
        wordElement.speedY = speedY;

        // Start the movement of the word
        moveWord(wordElement);
    });
}

function moveWord(wordElement) {
    const wordRect = wordElement.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    // Move the word by a small increment each frame
    setInterval(() => {
        let newLeft = parseFloat(wordElement.style.left) + (wordElement.directionX * wordElement.speedX);
        let newTop = parseFloat(wordElement.style.top) + (wordElement.directionY * wordElement.speedY);

        // If the word reaches the right or left border, reverse its horizontal direction
        if (newLeft + wordRect.width >= bodyRect.width || newLeft <= 0) {
            wordElement.directionX *= -1;  // Reverse horizontal direction
        }

        // If the word reaches the bottom or top border, reverse its vertical direction
        if (newTop + wordRect.height >= bodyRect.height || newTop <= 0) {
            wordElement.directionY *= -1;  // Reverse vertical direction
        }

        // Update the position of the word
        wordElement.style.left = `${newLeft}px`;
        wordElement.style.top = `${newTop}px`;
    }, 20); // Adjust the speed of movement
}

// Create the words with random positions and animation delays
createWord("1337", "0s");
createWord("typo", "1s");
createWord("oujda", "2s");
createWord("twins", "3s");
createWord("coding", "4s");
createWord("leet", "5s");
createWord("war", "6s");
createWord("free", "7s");
createWord("palestine", "8s");
createWord("hello", "9s");
createWord("word", "10s");
createWord("rand", "11s");
createWord("reel", "12s");
createWord("abnormal", "13s");
createWord("money", "14s");
createWord("hacker", "15s");
createWord("game", "16s");
createWord("keyboard", "17s");
createWord("debug", "18s");
createWord("cryptic", "19s");
createWord("syntax", "20s");
createWord("error", "21s");
createWord("compile", "22s");
createWord("algorithm", "23s");
createWord("binary", "24s");
createWord("machine", "25s");
createWord("program", "26s");
createWord("cloud", "27s");
createWord("server", "28s");
createWord("tech", "29s");
createWord("data", "30s");
createWord("internet", "31s");
createWord("source", "32s");
createWord("pixel", "33s");
createWord("network", "34s");
createWord("protocol", "35s");
createWord("app", "36s");
createWord("website", "37s");
createWord("framework", "38s");
createWord("technology", "39s");
createWord("logic", "40s");
createWord("function", "41s");
createWord("script", "42s");
createWord("design", "43s");
createWord("debugging", "44s");
createWord("code", "45s");
createWord("serverless", "46s");
createWord("automation", "47s");
createWord("cloudflare", "48s");
createWord("database", "49s");
createWord("dataflow", "50s");
