var startGameBto = document.querySelector("#start-game");
var newGameBto = document.querySelector("#new-game");
var startingScreen = document.querySelector("#screen1");
var addingWordScreen = document.querySelector("#screen2");
var gamingScreen = document.querySelector("#screen3");


var wordList = ["CUBO", "LAPIZ", "BOCINA", "TAQUETE", "ESCRITORIO", "VENTILADOR", "CAMA", "ARDILLA"];
var secretWord = "";
var typedLetterList = [];
var error = 0;
var index = 0;
var formedWord = "";


startGameBto.addEventListener("click", startGame);
newGameBto.addEventListener("click", startGame);

function startGame() {
    startingScreen.style.display = "none";
    addingWordScreen.style.display = "none";
    gamingScreen.style.display = "flex";
    deleteLetterBoxes(letterBox);
    eraseDrawing();
    secretWord = selectWord(wordList);
    createLetterBoxes(secretWord);
    error = 0;
    index = 0;
    drawAhorcado(error); //see drawAhorcado.js
    typedLetterList = [];
    formedWord = "";
    message.textContent = "";
}

function deleteLetterBoxes(letterBox) {
    letterBox.innerHTML = "";
    incorrectLetterBox.innerHTML = "";
}

function eraseDrawing() {
    var brush = gallow.getContext("2d");
    brush.clearRect(0, 0, 600, 500);
}

function selectWord(wordList) {
    var numberWord = Math.round(Math.random() * wordList.length);
    return wordList[numberWord];
}

function createLetterBoxes(secretWord) {
    for (var i = 0; i < secretWord.length; i++) {
        createBoxes("", letterBox)
    }

    for (i = 0; i < 9; i++) {
        createBoxes("", incorrectLetterBox);
    }
}

function createBoxes(content, box) {
    var div = document.createElement("div");
    div.textContent = content;
    box.appendChild(div);
}