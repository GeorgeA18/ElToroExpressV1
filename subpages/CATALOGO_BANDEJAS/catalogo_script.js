function guardarAlmacenamientoLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar));
}
function obtenerAlamacenaminetoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos
}

let productos = obtenerAlamacenaminetoLocal("productos") || [];



/* Variables que traemos del HTML */


const informacionCompra = document.getElementById("informacionCompra");
const contenedorCompra = document.getElementById("contenedorCompra");
const productosCompra = document.getElementById("productosCompra");
const contenedor= document.getElementById("contenedor");
const carrito = document.getElementById("carrito");
const numero = document.getElementById("numero");
const header = document.querySelector("#header");
const total = document.getElementById("total");
const body = document.querySelector("body");
const x = document.getElementById("x");

/* variables del js */
let lista = [];
let valorTotal = 0;

window.addEventListener("scroll", function() {
    if (contenedor.getBoundingClientRect().top<10) {
        header.classList.add("scroll");
    }
    else{
        header.classList.remove("scroll");
    }
})

/* muestra los productos de la base de datos */
window.addEventListener("load", ()=>{
    visualizarProductos();
    contenedorCompra.classList.add("none");
})


function visualizarProductos() {
    contenedor.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].existencia > 0) {
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}" alt=""><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><button onclick=comprar(${i})>Comprar</button></div></div>`
        }else{
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}" alt=""><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><p class="soldOut">Agotado</p></div></div>`
        }
    }
}

function comprar(indice) {
    lista.push({nombre: productos[indice].nombre, precio: productos[indice].valor});

    let van = true;
    let i = 0;
    while(van == true){
        if (productos[i].nombre == productos[indice].nombre) {
            productos[i].existencia -=1;
            if (productos[i].existencia == 0) {
                visualizarProductos();
            }
            van = false;
        }
        guardarAlmacenamientoLocal("productos", productos);
        i+=1
    }
    numero.innerHTML = lista.length;
    numero.classList.add("disenoNumero");
    return lista
}

carrito.addEventListener("click", function(){
    valorTotal = 0;
    body.style.overflow = "hidden";
    contenedorCompra.classList.remove("none");
    contenedorCompra.classList.add("contendorCompra");
    informacionCompra.classList.add("informacionCompra")
    mostrarElementosLista();
})

function mostrarElementosLista() {
    productosCompra.innerHTML = "";
    valortotal = 0;
    for (let i = 0; i < lista.length; i++) {
        productosCompra.innerHTML += `<div><div class="img"><button onclick=eliminar() class="botonTrash"><img src="/assets/trash.svg"></button><p>${lista[i].nombre}</p></div><p>$${lista[i].precio}</p></div>`
        valorTotal += parseInt(lista[i].precio);
    }
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valorTotal}</span></p>`
}

function eliminar(indice) {
    let van = true;
    let i = 0;
    while(van == true){
        if (productos[i].nombre == lista[indice].nombre) {
            productos[i].existencia +=1;
            lista.splice(indice,1)
            van = false;
        }
        
        i+=1
    }
    guardarAlmacenamientoLocal("productos", productos);
    numero.innerHTML = lista.length;
    if (lista.length == 0) {
        numero.classList.remove("disenoNumero");
    }
    visualizarProductos();
    mostrarElementosLista();
}


x.addEventListener("click", function(){
    body.style.overflow = "auto";
    contenedorCompra.classList.add("none");
    contenedorCompra.classList.remove("contendorCompra");
    informacionCompra.classList.remove("informacionCompra")

})