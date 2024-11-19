function hamburger() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('visible');
}

function checkAnswer(questionNumber, isCorrect) {
    const answerElement = document.getElementById(`answer${questionNumber}`);
    if (isCorrect) {
        answerElement.textContent = "¡Correcto!";
        answerElement.style.color = "green";
    } else {
        answerElement.textContent = "Incorrecto, intenta de nuevo.";
        answerElement.style.color = "red";
    }
}
