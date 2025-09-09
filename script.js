// Dice image sources for faces 1 through 6
const diceImages = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
];

// Background images corresponding to each dice face
const backgroundImages = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg6.jpg"
];

const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");

rollBtn.addEventListener("click", function () {
    // Add roll animation class
    dice.classList.add("roll");

    // After animation ends, change dice face and background randomly and remove animation class
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6);
        dice.src = diceImages[randomNumber];

        // Change body background image based on rolled dice face
        document.body.style.backgroundImage = `url('${backgroundImages[randomNumber]}')`;

        dice.classList.remove("roll");
    }, 600);
});
