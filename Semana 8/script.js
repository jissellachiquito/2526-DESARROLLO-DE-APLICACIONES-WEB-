document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    limpiarErrores();

    let valido = true;

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre.length < 3) {
        mostrarError("nombre", "Nombre inválido");
        valido = false;
    }

    if (!email.includes("@")) {
        mostrarError("email", "Correo inválido");
        valido = false;
    }

    if (mensaje.length < 10) {
        mostrarError("mensaje", "Mensaje muy corto");
        valido = false;
    }

    if (valido) {
        mostrarAlerta("¡Gracias! 💐 Tu mensaje fue enviado correctamente");
        this.reset();
    }
});

function mostrarError(campo, mensaje) {
    document.getElementById(campo + "Error").textContent = mensaje;
}

function limpiarErrores() {
    document.querySelectorAll(".error-message").forEach(e => e.textContent = "");
}

function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("customAlert");
    alerta.style.display = "block";
    alerta.querySelector("strong").textContent = mensaje;

    setTimeout(() => {
        alerta.style.display = "none";
    }, 4000);
}

document.getElementById("alertBtn").addEventListener("click", function () {
    mostrarAlerta("🌸 Promociones disponibles en arreglos personalizados");
});


function mostrarError(campo, mensaje) {
    document.getElementById(campo + "Error").textContent = mensaje;
}

function limpiarErrores() {
    document.querySelectorAll(".error-message").forEach(e => e.textContent = "");
}

function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("customAlert");
    alerta.style.display = "block";
    alerta.querySelector("strong").textContent = mensaje;

    setTimeout(() => {
        alerta.style.display = "none";
    }, 4000);
}

document.getElementById("alertBtn").addEventListener("click", function () {
    mostrarAlerta("🌸 Promociones disponibles en arreglos personalizados");
});


