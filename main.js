function comprarProductos() {
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Queres realizar la compra de la placa de video Nvidia, el mouse ASUS o los auriculares HyperX?', 'Ej: placa de video NVIDIA');
        cantidad = parseInt(prompt('¿Cuantas unidades queres comprar?'));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'placa de video NVIDIA':
                precio = 50000;
                break;
            case 'mouse ASUS':
                precio = 5000;
                break;
            case 'auriculares HyperX':
                precio = 11600;
                break;
            default:
                alert('Alguno de los datos ingresados no es correcto.');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;
        seguirComprando = confirm('¿Queres agregar algún otro producto gamer?');

    } while (seguirComprando)

    const totalConDescuento = aplicarDescuento(totalCompra);
    const totalConEnvio = calcularEnvio(totalConDescuento);

    return totalConEnvio;
}

function validarCantidad(cantidad) {
    while(Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debes ingresar un número.')
        } else {
            alert('Tu carrito de compras esta vacio.')
        }
        cantidad = parseInt(prompt('¿Cuantas unidadas queres comprar?'));
    }

    return cantidad;
}

function aplicarDescuento(totalCompra) {
    let totalConDescuento = 0;

    if (totalCompra >= 5000) {
        totalConDescuento = totalCompra * 0.80;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
}

function calcularEnvio(totalCompra) {
    let tieneEnvioADomicilio = false;

    tieneEnvioADomicilio = confirm('Contamos con envio a domicilio. ¿Estas interesado?');

    if (tieneEnvioADomicilio && totalCompra >= 10000) {
        alert('Contas con el envio gratis. El total de tu compra es $'+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 10000 && totalCompra !== 0) {
        totalCompra += 700;
        alert('El precio del envio es de $700. El total de tu compra es $'+totalCompra);
    } else {
        alert('El total de tu compra es $'+totalCompra);
    }

    return totalCompra;
}

function calcularCantidadDeCuotas() {
    let cuotas = 0;
    let tieneCuotas = false;

    tieneCuotas = confirm('¿Queres abonar el total de la compra en cuotas?');

    if (tieneCuotas) {
        cuotas = parseInt(prompt('¿En cuántas cuotas queres abonar?'));
        if (cuotas === 0) {
            cuotas = 1;
        } else if (Number.isNaN(cuotas)) {
            calcularCantidadDeCuotas();
        }
    } else {
        cuotas = 1;
    }

    return cuotas;
}

function calcularIntereses(cuotas) {
    let tasa = 12.3;
    let sinIntereses = 0;
    let tasaTotal = 0;
    let interesesTotales = 0;

    if (cuotas === 1) {
        return sinIntereses;
    } else {
        tasaTotal = tasa + cuotas * 0.2;
        interesesTotales = tasaTotal * cuotas;
        return interesesTotales;
    }
}

function calcularTotalAPagar(totalCompra, cuotas, intereses) {
    totalCompra = totalCompra + intereses;
    let valorCuota = totalCompra / cuotas;
    alert('El total de tu compra es de $'+totalCompra+' en '+cuotas+' cuotas de $'+valorCuota);
}

const totalCompra = comprarProductos();
const cuotas = calcularCantidadDeCuotas();
const intereses = calcularIntereses(cuotas);

calcularTotalAPagar(totalCompra, cuotas, intereses);