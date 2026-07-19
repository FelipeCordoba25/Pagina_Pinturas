fetch('data/pinturas.json')
  .then(response => response.json())
  .then(pinturas => {
    const Contenedor = document.getElementById('Contenedor-cards');
    const modal = document.getElementById('Modal-Pintura');
    const modalImagen = document.getElementById('modal-imagen');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalTecnica = document.getElementById('modal-tecnica');
    const modalEstilo = document.getElementById('modal-estilo');
    const modalDimensiones = document.getElementById('modal-dimensiones');
    const modalDescripcion = document.getElementById('modal-descripcion');
    const modalPrecio = document.getElementById('modal-precio');
    const modalDisponible = document.getElementById('modal-disponible');
    const cerrarModal = document.getElementById('cerrar-modal');

    pinturas.forEach(pintura => {

      // Card compacta: solo nombre, precio y tamaño
      const card = document.createElement('div');
      card.classList.add("card");

      card.innerHTML =
        `<img src="${pintura.imagen}" alt="${pintura.titulo}">
        <div class="info">
          <h3>${pintura.titulo}</h3>
          <p>${pintura.dimensiones}</p>
          <div class="info-inferior">
            <span class="precio">$${pintura.precio.toLocaleString('es-CO')}</span>
            <span class="${pintura.disponible ? 'disponible' : 'vendida'}">
              ${pintura.disponible ? 'Disponible' : 'Vendida'}
            </span>
          </div>
        </div>`;

      // Al hacer click, abrir el modal con la info ampliada
      card.addEventListener('click', () => {
        modalImagen.src = pintura.imagen;
        modalImagen.alt = pintura.titulo;
        modalTitulo.textContent = pintura.titulo;
        modalTecnica.textContent = `Técnica: ${pintura.tecnica}`;
        modalEstilo.textContent = pintura.estilo ? `Estilo: ${pintura.estilo}` : '';
        modalDimensiones.textContent = `Tamaño: ${pintura.dimensiones}`;
        modalDescripcion.textContent = pintura.descripcion;
        modalPrecio.textContent = `$${pintura.precio.toLocaleString('es-CO')}`;
        modalDisponible.textContent = pintura.disponible ? 'Disponible' : 'Vendida';
        modalDisponible.className = pintura.disponible ? 'disponible' : 'vendida';

        modal.classList.add('activo');
        document.body.style.overflow = 'hidden'; // evita scroll de fondo mientras el modal está abierto
      });

      Contenedor.appendChild(card);
    });

    // Cerrar modal con el botón
    cerrarModal.addEventListener('click', () => {
      modal.classList.remove('activo');
      document.body.style.overflow = '';
    });

    // Cerrar modal haciendo click fuera del contenido
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('activo');
        document.body.style.overflow = '';
      }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.remove('activo');
        document.body.style.overflow = '';
      }
    });
  });