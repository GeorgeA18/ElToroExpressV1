

/* ? LOGIN */

/* VENTANA */
// Obtiene los elementos del DOM
const popup_login = document.getElementById('popup_login');
const popupContent_login = document.getElementById('content_login');
const openPopup_login = document.getElementById('openPopup_login');
const closePopup_login = document.getElementById('close_login');

/* Para el boton de login en la ventana de registro */
const openPopup_login2 = document.getElementById('openPopup_login2');
const openPopup_login3 = document.getElementById('openPopup_login3');


/* ? REGISTRO */
// Obtiene los elementos del DOM
const popup_registro = document.getElementById('popup_registro');
const popupContent_registro = document.getElementById('content_registro');
const openPopup_registro = document.getElementById('openPopup_registro');
const closePopup_registro = document.getElementById('close_registro');


/* ? ADMIN */
// Obtiene los elementos del DOM
const popup_admin =document.getElementById("popup_admin");
const popupContent_admin =document.getElementById("content_admin");
const openPopup_admin =document.getElementById("openPopup_admin");
const closePopup_admin =document.getElementById("close_admin");



// Abre la ventana emergente al hacer clic en el botón
openPopup_login.addEventListener('click', () => {
    console.log("inicio 1");
    abrirVentana(popup_login, popupContent_login);
});

// Cierra la ventana emergente al hacer clic en el botón de cerrar
closePopup_login.addEventListener('click', (event) => {
    cerrarVentana(popup_login, popupContent_login);
});

// Cierra la ventana emergente si se hace clic fuera de ella
window.addEventListener('click', (event) => {
    if (event.target === popup_login) {
        popup_login.style.opacity = '0'; 
        popupContent_login.style.transform = 'translate(-50%, -50%) scale(0)'; // Escala a 0
        setTimeout(() => {
            popup_login.style.display = 'none'; // Oculta la ventana emergente después de la animación
        }, 300); // Espera a que la animación termine
    }
});


/* PARA LA VENTANA DE REGISTRO */
/* abrir con el boton de la ventana de registro */
openPopup_login2.addEventListener('click', (event) => {
    console.log("inicio2");

    cerrarVentana(popup_registro, popupContent_registro);
    abrirVentana(popup_login, popupContent_login);
});

/* Abrir con el boton de la venta de admin */
openPopup_login3.addEventListener("click", (event) => {
    cerrarVentana(popup_admin, popupContent_admin);
    abrirVentana(popup_login, popupContent_login);
});


// Abre la ventana emergente al hacer clic en el botón
openPopup_registro.addEventListener('click', (event) => {
    console.log("registro 1");
    cerrarVentana(popup_login, popupContent_login);
    abrirVentana(popup_registro, popupContent_registro);
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



/* PARA LA VENTANA DE ADMIN */
openPopup_admin.addEventListener("click", () =>{
    console.log("abrir admin boton")
    cerrarVentana(popup_login ,popupContent_login);
    abrirVentana(popup_admin, popupContent_admin);
});




/*--------------------- Todo Funciones para abrir cerrar las ventanas ----------------------------- */

function abrirVentana(popupVentana, popupContent) {
    console.log("abierta ventana por funcion.")

    popupVentana.style.display = 'block';
    setTimeout(() => {
        popupVentana.style.opacity = '1';
        popupContent.style.transform = 'translate(-50%, -50%) scale(1)'; // Escala a 1
    }, 10); // Pequeño retraso para permitir que el display se aplique
}

function cerrarVentana(popupVentana, popupContent ) {
    console.log("cerrada ventana por funcion.")

    popupVentana.style.opacity = "0";
    popupContent.style.transform = 'translate(-50%, -50%) scale(0)';
    setTimeout(() => {
        popupVentana.style.display = "none";
    } , 300)
}


