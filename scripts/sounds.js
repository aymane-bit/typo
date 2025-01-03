// Select all buttons
const buttons = document.querySelectorAll('.buttons');

// Load the sound file
const hoverSound = new Audio('../ressources/sounds/button-hover.wav');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
