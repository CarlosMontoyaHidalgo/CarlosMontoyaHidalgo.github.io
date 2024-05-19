document.querySelectorAll('.nav-link').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Agrega un event listener al formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    // Aquí agregarías el código para enviar el formulario (puede ser mediante EmailJS u otro servicio)
    // Por ahora, simplemente mostramos el modal de confirmación

    var myModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    myModal.show();
});

