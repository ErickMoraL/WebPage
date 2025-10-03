const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Mensaje en pantalla normal
  alert("✅ Gracias, te contactaré lo más pronto posible.");

  form.reset();
});
