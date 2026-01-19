//elementos del DOM
const form = document.getElementById('Formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const edadInput = document.getElementById('edad');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const successMessage = document.getElementById('successMessage');

//mensajes de error
const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const edadError = document.getElementById('edadError');
const passwordRequirements = document.getElementById('passwordRequirements');

//expresiones regulares
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

//funcion para validar nombre
function validateNombre() {
  const value = nombreInput.value.trim();
  if (value.length >= 3) {
    nombreInput.classList.add('valid');
    nombreInput.classList.remove('invalid');
    nombreError.classList.remove('show');
    return true;
  } else {
    nombreInput.classList.add('invalid');
    nombreInput.classList.remove('valid');
    nombreError.classList.add('show');
    return false;
  }
}

//funcion para validar email
function validateEmail() {
  const value = emailInput.value.trim();
  if (emailRegex.test(value)) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    emailError.classList.remove('show');
    return true;
  } else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    emailError.classList.add('show');
    return false;
  }
}

//funcion para validar contraseña
function validatePassword() {
  const value = passwordInput.value;
  if (passwordRegex.test(value)) {
    passwordInput.classList.add('valid');
    passwordInput.classList.remove('invalid');
    passwordError.classList.remove('show');
    passwordRequirements.classList.add('valid');
    return true;
  } else {
    passwordInput.classList.add('invalid');
    passwordInput.classList.remove('valid');
    passwordError.classList.add('show');
    passwordRequirements.classList.remove('valid');
    return false;
  }
}

//funcion para validar confirmacion de contraseña
function validateConfirmPassword() {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  if (passwordValue === confirmPasswordValue && confirmPasswordValue !== '') {
    confirmPasswordInput.classList.add('valid');
    confirmPasswordInput.classList.remove('invalid');
    confirmPasswordError.classList.remove('show');
    return true;
  } else {
    confirmPasswordInput.classList.add('invalid');
    confirmPasswordInput.classList.remove('valid');
    confirmPasswordError.classList.add('show');
    return false;
  }
}

//funcion para validar edad
function validateEdad() {
  const value = parseInt(edadInput.value);
  if (!isNaN(value) && value >= 18) {
    edadInput.classList.add('valid');
    edadInput.classList.remove('invalid');
    edadError.classList.remove('show');
    return true;
  } else {
    edadInput.classList.add('invalid');
    edadInput.classList.remove('valid');
    edadError.classList.add('show');
    return false;
  }
}

//funcion para verificar si todos los campos son válidos
function checkAllValid() {
  const isNombreValid = validateNombre();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  const isEdadValid = validateEdad();
  return (
    isNombreValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isEdadValid
  );
}

//event listeners para validacion en tiempo real
nombreInput.addEventListener('input', () => {
  validateNombre();
  submitBtn.disabled = !checkAllValid();
});

emailInput.addEventListener('input', () => {
  validateEmail();
  submitBtn.disabled = !checkAllValid();
});

passwordInput.addEventListener('input', () => {
  validatePassword();
  validateConfirmPassword();
  submitBtn.disabled = !checkAllValid();
});

confirmPasswordInput.addEventListener('input', () => {
  validateConfirmPassword();
  submitBtn.disabled = !checkAllValid();
});

edadInput.addEventListener('input', () => {
  validateEdad();
  submitBtn.disabled = !checkAllValid();
});

//event listener para el formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkAllValid()) {
    successMessage.classList.add('show');
    setTimeout(() => {
      successMessage.classList.remove('show');
    }, 3000);
  }
});

//event listener para reiniciar el formulario
resetBtn.addEventListener('click', () => {
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => {
    input.classList.remove('valid', 'invalid');
  });

  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((msg) => msg.classList.remove('show'));

  passwordRequirements.classList.remove('valid');
  submitBtn.disabled = true;
  successMessage.classList.remove('show');
});

//inicializar el estado del boton de envio
submitBtn.disabled = true;
