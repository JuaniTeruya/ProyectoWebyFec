function hamburger() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('visible');
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
        resultado = "Tienes un perfil equilibrado; podrías adaptarte a ambos tipos de trabajo.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
