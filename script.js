// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a mouseover event listener to move the "No" button randomly
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

// Add a click event listener to create confetti
yesButton.addEventListener("click", () => {
  
var confettiElement = document.getElementById('confetti-canvas');
var confettiSettings = { target: confettiElement, max: 729, size: 1, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 25, rotate: true,start_from_edge: true, respawn: true };

yesButton.style.display = "none";
noButton.style.display = "none";

var gif = document.getElementById("gif");
var header = document.getElementById("main");
header.style.display = "none";
gif.style.display = "none";

//change the style of the confetti canvas
confettiElement.style.position = "absolute";
confettiElement.style.top = "0";
confettiElement.style.left = "0";
confettiElement.style.width = "100%";
confettiElement.style.height = "100%";
confettiElement.style.zIndex = "1000";


var confetti = new ConfettiGenerator(confettiSettings);

confetti.render();

let infoParagraph = document.createElement("p");
  infoParagraph.innerText = "You are a Sweet girl🥰 and I am a sweet Boy😁 and now we are friends❤️.\n So Now onwards we are Girlfriend and Boyfriend";
  infoParagraph.style.fontSize = "1rem";
  infoParagraph.style.fontWeight = "bold";
  infoParagraph.style.textAlign = "center";
  infoParagraph.style.position = "absolute";
  infoParagraph.style.top = "40%";
  infoParagraph.style.left = "50%";
  infoParagraph.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(infoParagraph);

 let p = document.createElement("p");
 p.innerText = "Congratulations🎉🥳😘 \n You made the perfect choice 🎉 \n😉";
  p.style.fontSize = "2rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  p.style.position = "absolute";
  p.style.top = "50%";
  p.style.left = "50%";
  p.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(p);

let additionalStatement = document.createElement("p");
  additionalStatement.innerText = "I am calling you in 2 minutes,🩷 I will tell you where where will be our first date \nI love you so much Nikita";
  additionalStatement.style.fontSize = "1.5rem";
  additionalStatement.style.fontWeight = "bold";
  additionalStatement.style.textAlign = "center";
  additionalStatement.style.position = "absolute";
  additionalStatement.style.top = "60%";
  additionalStatement.style.left = "50%";
  additionalStatement.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(additionalStatement);

  let gifImage = document.createElement("img");
  gifImage.src = "love.gif";
  gifImage.alt = "Samya";
  gifImage.style.width = "100%";
  gifImage.style.maxWidth = "500px"; 
  gifImage.style.display = "block";
  gifImage.style.marginTop = "20px";
  gifImage.style.margin = "20px auto";
  document.body.appendChild(gifImage);

  let gifAbove = document.createElement("img");
  gifAbove.src = "mochi-cat-love.gif";
  gifAbove.alt = "Above Gif";
  gifAbove.style.width = "10%";
  gifAbove.style.display = "block";  
  gifAbove.style.marginLeft = "800px"; 
  gifAbove.style.marginBottom = "20px"; 
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