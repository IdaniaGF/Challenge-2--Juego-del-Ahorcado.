var letterBox = document.querySelector("#letters-box");
var incorrectLetterBox = document.querySelector("#incorrectLetters-box");

document.addEventListener("keydown", function(event) {
    pattern = new RegExp(/^[a-z]$/i);
    if (pattern.test(event.key)) {
        var typedLetter = event.key.toUpperCase();
        var stopLetterCapture = validateGame();
        if (!stopLetterCapture) {
            existingLetter = validateExistingLetter(typedLetter, typedLetterList);
            if (!existingLetter) {
                var correctLetter = validateCorrectLetter(secretWord, typedLetter);
                if (correctLetter) {
                    for (var i = 0; i < secretWord.length; i++) {
                        if (typedLetter == secretWord[i]) {
                            writeLetter(typedLetter, i, letterBox);
                            formedWord += typedLetter;
                        }
                    }
                } else {
                    writeLetter(typedLetter, index, incorrectLetterBox);
                    error++;
                    drawAhorcado(error); // see drawAhorcado.js
                    index++
                }
            }
            validateGame();
        }
    }
});

function validateGame() {
    var message = document.querySelector("#message");
    if (formedWord.length == secretWord.length) {
        message.textContent = "¡Felicidades, Ganaste! :D";
        return true;
    } else if (error == 9) {
        message.textContent = "Lo siento, intenta con otra palabra :D";
        return true;
    } else {
        return false;
    }
}

function validateExistingLetter(typedLetter, typedLetterList) {
    if (typedLetterList.length == 0 || typedLetterList.indexOf(typedLetter) < 0) {
        typedLetterList.push(typedLetter);
        return false;
    } else {
        return true;
    }
}

function validateCorrectLetter(secretWord, typedLetter) {
    if (secretWord.includes(typedLetter)) {
        return true;
    } else {
        return false;
    }
}

function writeLetter(content, i, box) {
    box.children[i].textContent = content;
}