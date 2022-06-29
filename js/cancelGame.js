var desistGameBto = document.querySelector("#desist-game");

desistGameBto.addEventListener("click", cancel);

function cancel() {
    startingScreen.style.display = "flex";
    addingWordScreen.style.display = "none";
    gamingScreen.style.display = "none";
    error = 9;
}