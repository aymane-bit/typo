const image = document.getElementById('guns1');

function rotater() {
  let index = 0;

  function rotateStep() {
    if (index < 8) {
      if (index % 2 === 0) {
        image.style.transform = "rotate(-10deg)";
      } else {
        image.style.transform = "rotate(0deg)";
      }

      index++;
      setTimeout(rotateStep, 400); // Delay for 200ms to make the transition visible
    }
  }

  rotateStep(); // Start the rotation
}

rotater();
