let nombreUsuario = prompt("Ingrese su usuario:")

function saludarUsuario(nombre) {
    alert("Hola " + nombre)
}
saludarUsuario(nombreUsuario);
console.log(nombreUsuario)
console.log("Hola " + nombreUsuario)

const passwordAutorizado = 1234;
for(let i = 0; i < 3; i++) {
    let passwordUsuario = parseInt(prompt("Ingrese su contrasena:"));

    if(passwordUsuario === passwordAutorizado) {
        console.log("Contrasena correcta");
        break;
    }else{
        passwordUsuario = parseInt(prompt("Contrasena incorrecta, vuelva a intentar."))
    }
} 

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos  = new Producto("Fideos", 200);
const mermelada = new Producto("Mermelada", 500);
const harina = new Producto("Harina", 350);
const agua = new Producto("Agua", 250)
const gaseosa = new Producto("Coca Cola", 380);
const choclo = new Producto("Choclo", 450) 
const pan = new Producto("Pan", 220);

const arrayProductos = [fideos, mermelada, harina, agua, gaseosa, choclo, pan];

console.log("Productos en Stock (Sin Iva): ");
console.log(arrayProductos)

const arrayProductosConIva = arrayProductos.map( (producto) => {
    return{ 
        nombre: producto.nombre,
        precio: producto.precio * 1.21
    }
});

console.log("Productos en Stock (Con Iva):  ")
console.log(arrayProductosConIva);

arrayProductosConIva.sort((a,b) => a.precio - b.precio);
console.log("Precio de menor a mayor para un mejor orden:");
console.log(arrayProductosConIva);

let totalPrecioConIva = arrayProductosConIva.reduce((acumulador, producto) => acumulador + producto.precio, 200);
console.log("Valor total del stock disonible con iva: $" + totalPrecioConIva)

function mostrarTolalConIva(totalPrecioConIva){
    alert(nombreUsuario + ", valor total del stock disonible con iva: $" + totalPrecioConIva)
}
mostrarTolalConIva(totalPrecioConIva);

let totalPrecioSinIva = arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, 200);
console.log("Valor total del stock disonible sin iva: $" + totalPrecioSinIva)

function mostrarTolalSinIva(totalPrecioSinIva){
    alert(nombreUsuario + ", valor total del stock disonible sin iva: $" + totalPrecioSinIva)
}
mostrarTolalSinIva(totalPrecioSinIva);