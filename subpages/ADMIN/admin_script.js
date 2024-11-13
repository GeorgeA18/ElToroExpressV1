function guardarAlmacenamientoLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar));
}
function obtenerAlamacenaminetoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave));
    return datos
}

let productos = obtenerAlamacenaminetoLocal("productos") || [];
let mensaje = document.getElementById("mensaje");

/* Añadir Productos */
const anadirProducto = document.getElementById("productoAnadir");
const anadirValor = document.getElementById("valorAnadir");
const existenciaAnadir = document.getElementById("existenciaAnadir");
const imagenAnadir = document.getElementById("imagenAnadir");

document.getElementById("botonAnadir").addEventListener("click", function(event){
    event.preventDefault();
    let productoAnadir = anadirProducto.value;
    let valorAnadir = anadirValor.value;
    let anadirExistencia = existenciaAnadir.value;
    let anadirImagen = imagenAnadir.value;


    let van = true;
    if (productoAnadir == "" || valorAnadir == "" || anadirExistencia == "" || anadirImagen == "") {
        mensaje.classList.add("llenarCampos");
        setTimeout(() => {
            mensaje.classList.remove("llenarCampos")
        }, 2500);
        van = false;
    }
    else {
        for (let i = 0; i < productos.length; i++) {
            
            if (productos[i].nombre == productoAnadir) {
                console.log("no")
                mensaje.classList.add("repetidoError");
                setTimeout(() => {
                    mensaje.classList.remove("repetidoError")
                }, 2500);
                van = false;
            }
            
        }
    }

    if(van == true){
        productos.push({
            nombre: productoAnadir,
            valor: valorAnadir,
            existencia: anadirExistencia,
            urlImagen: anadirImagen
        })
        mensaje,this.classList.add("realizado")
        setTimeout(() => {
            mensaje.classList.remove("repetidoError")
            window.location.reload()
        }, 1500);
    }
    guardarAlmacenamientoLocal("productos", productos);
    
});


/* Editar Catalogo */

const productoEd = document.getElementById("productoEditar");
const atributorEd = document.getElementById("atributoEditar");
const nuevoAtributoEd = document.getElementById("nuevoAtributo");

document.getElementById("botonEditar").addEventListener("click", function(event){
    let productoEditar = productoEd.value;
    let atributoEditar = atributorEd.value;
    let nuevoAtributo = nuevoAtributoEd.value;
    let van = false;

    if (productoEditar == "" || atributoEditar == "" || nuevoAtributo == "") {
        mensaje.classList.add("llenarCampos");
        setTimeout(() => {
            mensaje.classList.remove("llenarCampos");
        }, 2500);
    }
    else{
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].nombre == productoEditar) {
                productos[i][atributoEditar] = nuevoAtributo;
                van = true;
            }
            
        }
        if(van == true){
            mensaje.classList.add("realizado");
            setTimeout(() => {
                mensaje.classList.remove("realizado");
                window.location.reload();
            }, 1500);
        }
        else{
            mensaje.classList.add("noExisteError");
            setTimeout(() => {
                mensaje.classList.remove("noExisteError")
            }, 2500);
        }
        guardarAlmacenamientoLocal("productos", productos);
    }
});


/* Elminar Producto */
const productoE = document.getElementById("productoEliminar");

document.getElementById("botonEliminar").addEventListener("click", function (event) {
    event.preventDefault();
    let productoEliminar = productoE.value;
    let van = false;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == productoEliminar){
            productos.splice(i,1);
            van = true;
        }
    }
    if (van == false) {
        mensaje.classList.add("noExisteError");
            setTimeout(() => {
                mensaje.classList.remove("noExisteError")
            }, 2500);
    } else{
        mensaje.classList.add("realizado");
        setTimeout(() => {
            mensaje.classList.remove("realizado");
            window.location.reload();
        }, 1500);
    }
    guardarAlmacenamientoLocal("productos", productos);
});


/* Mostrar Prodcutos */
window.addEventListener("load", () =>{
    const productoEd = document.getElementById("productoEditar");
    const productoEl = document.getElementById("productoEliminar");
    for (let i = 0; i < productos.length; i++) {
        productoEd.innerHTML += `<option>${productos[i].nombre}</option>`
        productoEl.innerHTML += `<option>${productos[i].nombre}</option>`
    }
    Object.keys(productos[0]).forEach(element => {
        atributorEd.innerHTML += `<option>${element}</option>`
    });
    let mostrarProductos = document.getElementById("mostrarProductos");
    mostrarProductos.innerHTML = "";
    for (let i = 0; i < productos.length; i++) {
        mostrarProductos.innerHTML += `<div class = contenedorProductos><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class= "precio"><span>Precio:${productos[i].valor}</span></p> Existencia: ${productos[i].existencia}<p></p></div></div>`
    }
})