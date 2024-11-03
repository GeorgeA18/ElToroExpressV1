

/* ? REGISTRO */

/* VENTANA */
// Obtiene los elementos del DOM
const popup_registro = document.getElementById('popup_registro');
const popupContent_registro = document.getElementById('content_registro');
const openPopup_registro = document.getElementById('openPopup_registro');
const closePopup_registro = document.getElementById('close_registro');

// Abre la ventana emergente al hacer clic en el botón
openPopup_registro.addEventListener('click', () => {
    console.log("registro");
    popup_registro.style.display = 'block';
    setTimeout(() => {
        popup_registro.style.opacity = '1';
        popupContent_registro.style.transform = 'translate(-50%, -50%) scale(1)'; // Escala a 1
    }, 10); // Pequeño retraso para permitir que el display se aplique
});

// Cierra la ventana emergente al hacer clic en el botón de cerrar
closePopup_registro.addEventListener('click', () => {
    popup_registro.style.opacity = '0'; // Cambia la opacidad a 0
    popupContent_registro.style.transform = 'translate(-50%, -50%) scale(0)'; // Escala a 0
    setTimeout(() => {
        popup_registro.style.display = 'none'; // Oculta la ventana emergente después de la animación
    }, 300); // Espera a que la animación termine
});

// Cierra la ventana emergente si se hace clic fuera de ella
window.addEventListener('click', (event) => {

    if (event.target === popup_registro) {
        popup_registro.style.opacity = '0'; 
        popupContent_registro.style.transform = 'translate(-50%, -50%) scale(0)'; // Escala a 0
        setTimeout(() => {
            popup_registro.style.display = 'none'; // Oculta la ventana emergente después de la animación
        }, 300); // Espera a que la animación termine
    }
});


