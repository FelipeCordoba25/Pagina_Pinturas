
const FORM_ENDPOINT = "https://formspree.io/f/xpqgdobp";

const form = document.getElementById('form-contacto');
const estado = document.getElementById('mensaje-estado');
const boton = document.getElementById('btn-enviar');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  boton.disabled = true;
  boton.textContent = "Enviando...";
  estado.textContent = "";
  estado.className = "";

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      estado.textContent = "¡Mensaje enviado con éxito! Te responderé pronto.";
      estado.classList.add('mensaje-exito');
      form.reset();
    } else {
      estado.textContent = "Hubo un problema al enviar. Intenta de nuevo o escríbeme por WhatsApp.";
      estado.classList.add('mensaje-error');
    }
  } catch (error) {
    estado.textContent = "Hubo un error de conexión. Intenta de nuevo o escríbeme por WhatsApp.";
    estado.classList.add('mensaje-error');
  }

  boton.disabled = false;
  boton.textContent = "Enviar Mensaje";
});