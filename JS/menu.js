// Menú hamburguesa para móvil
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("menu-toggle");
  const links = document.getElementById("Links-Pagina");

  if (!boton || !links) return;

  boton.addEventListener("click", () => {
    const abierto = links.classList.toggle("abierto");
    boton.classList.toggle("activo", abierto);
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
  });

  // Cierra el menú al tocar un link (para que no quede abierto al navegar)
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("abierto");
      boton.classList.remove("activo");
      boton.setAttribute("aria-expanded", "false");
    });
  });
});
