let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0; // Regresa al primer slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Va al último slide
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; // Calcula el desplazamiento
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Cambia de slide manualmente
function changeSlide(direction) {
    clearInterval(slideInterval); // Detiene el cambio automático
    showSlide(currentSlide + direction);
}

// Cambia de slide automáticamente cuando el video termina
function nextSlide() {
    clearInterval(slideInterval);
    showSlide(currentSlide + 1);
    startAutoSlide(); // Reinicia el intervalo automático
}

// Inicia el cambio automático de slides
function startAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 2000);
}

// Muestra el primer slide al cargar
showSlide(currentSlide);
startAutoSlide(); // Inicia el slider automático