function hamburger() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('visible');
}

function respuesta(questionNumber, isCorrect) {
    const answerElement = document.getElementById(`answer${questionNumber}`);
    if (isCorrect) {
        answerElement.textContent = "¡Correcto!";
        answerElement.style.color = "green";
    } else {
        answerElement.textContent = "Incorrecto, intenta de nuevo.";
        answerElement.style.color = "red";
    }
}

function calcularPerfil() {
    var dependiente = 0;
    var independiente = 0;  

    if (document.querySelector('input[name="dependiente1"]:checked')) {
        dependiente++;
    }
    if (document.querySelector('input[name="independiente1"]:checked')) {
        independiente++;
    }
    if (document.querySelector('input[name="dependiente2"]:checked')) {
        dependiente++;
    }
    if (document.querySelector('input[name="independiente2"]:checked')) {
        independiente++;
    }
    if (document.querySelector('input[name="dependiente3"]:checked')) {
        dependiente++;
    }
    if (document.querySelector('input[name="independiente3"]:checked')) {
        independiente++;
    }
    
    var resultado;
    if (dependiente > independiente) {
        resultado = "Tu perfil es más adecuado para un trabajo dependiente.";
    } else if (independiente > dependiente) {
        resultado = "Tu perfil es más adecuado para un trabajo independiente.";
    } else {
        resultado = "Tenés un perfil equilibrado; podrías adaptarte a ambos tipos de trabajo.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
