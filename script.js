// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a click event listener to move the "No" button randomly
noButton.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});




// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Add a click event listener to create flowers
yesButton.addEventListener("click", () => {

  var flowersElement = document.getElementById('confetti-canvas');
  var flowersSettings = { target: flowersElement, max: 729, size: 1, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 25, rotate: true,start_from_edge: true, respawn: true };

  yesButton.style.display = "none";
  noButton.style.display = "none";

  var gif = document.getElementById("gif");
  var header = document.getElementById("main");
  header.style.display = "none";
  gif.style.display = "none";

  //change the style of the flowers canvas
  flowersElement.style.position = "absolute";
  flowersElement.style.top = "0";
  flowersElement.style.left = "0";
  flowersElement.style.width = "100%";
  flowersElement.style.height = "100%";
  flowersElement.style.zIndex = "1000";

  var flowers = new ConfettiGenerator(flowersSettings);
  flowers.render();

  for (let i = 0; i < 10; i++) {
    createFallingText(i);
  }

  // Restart the animation after 2 seconds (adjust the time as needed)
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      createFallingText(i);
    }
  }, 2000);

  let nikSam = document.createElement("p");
  nikSam.innerText = "You are a sweet girl 🥰 and I am a sweet boy 😁 ❤️ You accepted my proposal, so from now on,\nwe are girlfriend and boyfriend.";
  nikSam.style.fontSize = "1rem";
  nikSam.style.fontWeight = "bold";
  nikSam.style.textAlign = "center";
  nikSam.style.position = "absolute";
  nikSam.style.top = "30%";  
  nikSam.style.left = "50%";
  nikSam.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(nikSam);


  let nik = document.createElement("p");
  nik.innerText = "Congratulations🎉🥳😘\nYou made the perfect choice 🎉🥳";
  nik.style.fontSize = "2rem";
  nik.style.fontWeight = "bold";
  nik.style.textAlign = "center";
  nik.style.position = "absolute";
  nik.style.top = "40%";  
  nik.style.left = "50%";
  nik.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(nik);

  let sam = document.createElement("p");
  sam.innerText = "I am calling you in 2 minutes😁🩷 \n I will tell you where will we go for our first date.\nI love you so much, My Sweetu Nik❤️😘";
  sam.style.fontSize = "1.5rem";
  sam.style.fontWeight = "bold";
  sam.style.textAlign = "center";
  sam.style.position = "absolute";
  sam.style.top = "50%";  
  sam.style.left = "50%";
  sam.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(sam);

  let gifImage = document.createElement("img");
  gifImage.src = "love.gif";
  gifImage.alt = "Samya";
  gifImage.style.width = "100%";
  gifImage.style.maxWidth = "500px"; 
  gifImage.style.display = "block";
  gifImage.style.marginTop = "100px";
  gifImage.style.margin = "20px auto";
  document.body.appendChild(gifImage);

  let gifAbove = document.createElement("img");
  gifAbove.src = "mochi-cat-love.gif";
  gifAbove.alt = "Above Gif";
  gifAbove.style.width = "10%";
  gifAbove.style.display = "block";  
  gifAbove.style.marginLeft = "800px"; 
  document.body.insertBefore(gifAbove, document.body.firstChild);

  let gifLeft = document.createElement("img");
  gifLeft.src = "icegif-872.gif";
  gifLeft.alt = "Left Gif";
  gifLeft.style.height = "20vh";
  gifLeft.style.position = "fixed";
  gifLeft.style.top = "0";
  gifLeft.style.left = "0";
  document.body.appendChild(gifLeft);

  let gifRight = document.createElement("img");
  gifRight.src = "c06860b058d7aadaa28874be0a723947.gif";
  gifRight.alt = "Right Gif";
  gifRight.style.height = "20vh";
  gifRight.style.position = "fixed";
  gifRight.style.top = "0";
  gifRight.style.right = "0";
  document.body.appendChild(gifRight);

});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createFallingText(index) {
  setTimeout(() => {
    const fallingText = document.createElement("p");
    fallingText.innerText = "I Love You So much My Nik😘";
    fallingText.classList.add("falling-text");

    // Calculate spacing based on the index
    const spacing = 30; // Adjust this value for the desired spacing
    const initialPosition = spacing * index;

    // Set initial position at the top of the page with spacing
    fallingText.style.top = `-${initialPosition}px`;
    fallingText.style.left = Math.random() * window.innerWidth + "px";

    // Apply random color to the falling text
    fallingText.style.color = getRandomColor();

    // Append the falling text to the body
    document.body.appendChild(fallingText);

    // Remove the falling text element when the animation ends
    fallingText.addEventListener("animationiteration", () => {
      document.body.removeChild(fallingText);
    });
  }, 2000 * index); // Add a delay of 2 seconds for each falling text
}
