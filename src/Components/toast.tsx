export function mostrarMensaje(mensaje: string, elemento: HTMLElement | null) {
    if (elemento) {
      elemento.textContent = mensaje;
      elemento.classList.remove("hidden");
      setTimeout(() => {
        elemento.classList.add("hidden");
      }, 4000);
    }
  }