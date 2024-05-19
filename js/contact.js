// Función para enviar correo electrónico utilizando EmailJS
async function enviarCorreo(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    try {
        await emailjs.sendForm('service_wvxrfgo', 'template_dmdtu8n', form);
        alert('¡Correo enviado con éxito!');
        form.reset();
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        alert('Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
    }
}

// Asignar evento de envío de formulario
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', enviarCorreo);
}
  