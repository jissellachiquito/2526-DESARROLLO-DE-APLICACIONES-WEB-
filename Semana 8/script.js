        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Limpiar mensajes de error previos
            clearErrors();
            
            let isValid = true;
            
            // Validar nombre
            const nombre = document.getElementById('nombre').value.trim();
            if (nombre === '') {
                showError('nombre', 'Por favor ingresa tu nombre completo');
                isValid = false;
            } else if (nombre.length < 3) {
                showError('nombre', 'El nombre debe tener al menos 3 caracteres');
                isValid = false;
            }
            
            // Validar email
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                showError('email', 'Por favor ingresa tu correo electrónico');
                isValid = false;
            } else if (!emailRegex.test(email)) {
                showError('email', 'Por favor ingresa un correo electrónico válido');
                isValid = false;
            }
            
            // Validar mensaje
            const mensaje = document.getElementById('mensaje').value.trim();
            if (mensaje === '') {
                showError('mensaje', 'Por favor ingresa tu mensaje');
                isValid = false;
            } else if (mensaje.length < 10) {
                showError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
                isValid = false;
            }
            
            // Si el formulario es válido, mostrar mensaje de éxito
            if (isValid) {
                showCustomAlert('success', '¡Gracias por tu mensaje! Hemos recibido tu información correctamente.');
                this.reset();
            }
        });
        
        function showError(fieldId, message) {
            const errorElement = document.getElementById(fieldId + 'Error');
            errorElement.textContent = message;
            document.getElementById(fieldId).classList.add('is-invalid');
        }
        
        function clearErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(el => el.textContent = '');
            
            const invalidInputs = document.querySelectorAll('.is-invalid');
            invalidInputs.forEach(input => input.classList.remove('is-invalid'));
        }
        
        // Función para mostrar alertas personalizadas
        function showCustomAlert(type, message) {
            const alert = document.getElementById('customAlert');
            alert.className = 'custom-alert alert alert-dismissible fade show';
            alert.classList.add('show');
            
            // Cambiar clase según el tipo
            if (type === 'success') {
                alert.classList.remove('alert-info');
                alert.classList.add('alert-success');
            } else {
                alert.classList.remove('alert-success');
                alert.classList.add('alert-info');
            }
            
            alert.querySelector('strong').textContent = type === 'success' ? '¡Éxito! ✅' : '¡Hola! 👋';
            alert.querySelector('strong').nextSibling.textContent = ' ' + message;
            
            // Auto cerrar después de 5 segundos
            setTimeout(() => {
                alert.classList.remove('show');
            }, 5000);
        }
        
        // Evento para el botón de alerta personalizada
        document.getElementById('alertBtn').addEventListener('click', function() {
            showCustomAlert('info', 'Esta es una alerta personalizada creada con JavaScript y Bootstrap.');
        });
        
        // Cerrar alerta cuando se hace clic en el botón de cerrar
        document.querySelector('#customAlert .btn-close').addEventListener('click', function() {
            document.getElementById('customAlert').classList.remove('show');
        });

