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
    const flechaAnterior = document.getElementById('flecha-anterior');
    const flechaSiguiente = document.getElementById('flecha-siguiente');

    let indiceActual = 0;

    // Rellena el modal con los datos de la pintura en esa posición del arreglo y lo abre
    function mostrarPintura(index) {
      indiceActual = index;
      const pintura = pinturas[indiceActual];

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
    }

    function pinturaAnterior() {
      mostrarPintura((indiceActual - 1 + pinturas.length) % pinturas.length);
    }

    function pinturaSiguiente() {
      mostrarPintura((indiceActual + 1) % pinturas.length);
    }

    pinturas.forEach((pintura, index) => {

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
      card.addEventListener('click', () => mostrarPintura(index));

      Contenedor.appendChild(card);
    });

    // Si solo hay una pintura, no tiene sentido mostrar flechas de navegación
    if (pinturas.length <= 1) {
      flechaAnterior.style.display = 'none';
      flechaSiguiente.style.display = 'none';
    }

    // Flechas para pasar a la pintura anterior/siguiente sin cerrar el modal
    flechaAnterior.addEventListener('click', pinturaAnterior);
    flechaSiguiente.addEventListener('click', pinturaSiguiente);

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

    // Atajos de teclado: Escape cierra, flechas izquierda/derecha navegan (solo con el modal abierto)
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('activo')) return;

      if (e.key === 'Escape') {
        modal.classList.remove('activo');
        document.body.style.overflow = '';
      } else if (e.key === 'ArrowRight') {
        pinturaSiguiente();
      } else if (e.key === 'ArrowLeft') {
        pinturaAnterior();
      }
    });
  });