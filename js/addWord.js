var addWordBto = document.querySelector("#add-word");
var submitWordBto = document.querySelector("#submit-word");
var cancelBto = document.querySelector("#cancel");
var wordField = document.querySelector("#word-field");



addWordBto.addEventListener("click", function() {
    startingScreen.style.display = "none";
    addingWordScreen.style.display = "flex";
    gamingScreen.style.display = "none";
    wordField.focus();

});

submitWordBto.addEventListener("click", function() {
    newWord = wordField.value.toUpperCase();
    if (validateInput(newWord)) {
        wordList.push(newWord);
        wordField.value = "";
        wordField.focus();
    } else {
        alert("Carácter no aceptado");
    }
});

cancelBto.addEventListener("click", cancel); //see cancelGame.js

function validateInput(newWord) {
    var pattern = new RegExp(/^[a-z]+$/i);
    if (pattern.test(newWord)) {
        return true;
    }
}