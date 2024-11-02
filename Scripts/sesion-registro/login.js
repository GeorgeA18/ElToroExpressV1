

/* ? LOGIN */

/* VENTANA */
// Obtiene los elementos del DOM
const openPopup_login = document.getElementById('openPopup_login');
const closePopup_login = document.getElementById('close_login');
const popup_login = document.getElementById('popup_login');
const popupContent = document.getElementById('content_login');

// Abre la ventana emergente al hacer clic en el botón
openPopup_login.addEventListener('click', () => {
    popup_login.style.display = 'block';
    setTimeout(() => {
        popup_login.style.opacity = '1';
        popupContent.style.transform = 'translate(-50%, -50%) scale(1)'; // Escala a 1
    }, 10); // Pequeño retraso para permitir que el display se aplique
});

// Cierra la ventana emergente al hacer clic en el botón de cerrar
closePopup_login.addEventListener('click', () => {
    popup_login.style.opacity = '0'; // Cambia la opacidad a 0
    popupContent.style.transform = 'translate(-50%, -50%) scale(0)'; // Escala a 0
    setTimeout(() => {
        popup_login.style.display = 'none'; // Oculta la ventana emergente después de la animación
    }, 300); // Espera a que la animación termine
});

// Cierra la ventana emergente si se hace clic fuera de ella
window.addEventListener('click', (event) => {
    if (event.target === popup_login) {
        popup_login.style.opacity = '0'; 
        popupContent.style.transform = 'translate(-50%, -50%) scale(0)'; // Escala a 0
        setTimeout(() => {
            popup_login.style.display = 'none'; // Oculta la ventana emergente después de la animación
        }, 300); // Espera a que la animación termine
    }
});

