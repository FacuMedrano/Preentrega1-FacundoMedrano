const arrayProductos = [];

const producto1 = new Producto(1, 'Auriculares HyperX', 11600);
const producto2 = new Producto(2, 'Mouse ASUS :', 25000);
const producto3 = new Producto(3, 'Geforce GTX 1650', 90900);
const producto4 = new Producto(4, 'Intel Core I3 9100f', 94799);
const producto5 = new Producto(5, 'AMD Ryzen 3 3200G', 44733);
const producto6 = new Producto(6, 'Geforce RTX 3090', 431193);

arrayProductos.push(producto1, producto2, producto3,producto4,producto5,producto6);

const ordenarMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));
};


function comprarProductos() {
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt('¿Queres abastecer tu setup con algunos de nuestros productos gamers?', 'Ej: Geforce GTX 1650');
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert('Lo sentimos, el producto no se encuentra en stock.');
        }

        seguirComprando = confirm('¿Queres agregar otro producto gamer al carrito?');

    } while (seguirComprando)

    aplicarDescuento(total);
}

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 25000) {
        totalCompra = totalCompra * 0.80;
        alert('¡Sorpresa! Obtuviste un 20% de descuento con tu compra.');
    }
    calcularEnvio(totalCompra)
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = confirm('Contamos con envió a domicilio. ¿Estás interesado/a?');

    if (tieneEnvioADomicilio && totalCompra >= 15000) {
        alert('Tenes envio gratis. El total de la compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('El envío cuesta $700. El total de la compra es: '+totalCompra);
    } else {
        alert('El total de tu compra es: '+totalCompra);
    }
};

function comprar() {
    const quieroOrdenar =confirm('¿Querés ordenar la lista de productos del más barato al mas caro?');
    if (quieroOrdenar) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }

    comprarProductos();
};

comprar();