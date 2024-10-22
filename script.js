const words = ["javascript", "developer", "function", "variable", "scramble", "coding", "programming", "algorithm", "syntax"];
let originalWord = "";
let scrambledWord = "";
let timeLeft = 30;
let timer;

function startGame() {
    resetGame();
    originalWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scramble(originalWord);
    document.getElementById("scrambled-word").innerText = scrambledWord;
    startTimer();
}

function scramble(word) {
    const scrambledArray = word.split('').sort(() => 0.5 - Math.random());
    return scrambledArray.join('');
}

function checkAnswer() {
    const guess = document.getElementById("guess").value.trim().toLowerCase();
    if (guess === originalWord) {
        document.getElementById("message").innerText = "Correct!";
        clearInterval(timer);
    } else {
        document.getElementById("message").innerText = "Try again!";
    }
}

function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("message").innerText = `Time's up! The word was "${originalWord}".`;
        } else {
            timeLeft--;
            document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
        }
    }, 1000);
}

function resetGame() {
    clearInterval(timer);
    document.getElementById("message").innerText = "";
    document.getElementById("guess").value = "";
    document.getElementById("scrambled-word").innerText = "";
}

window.onload = startGame;
