class Simulador {
    constructor(precio, anticipo) {
        this.precio = precio;
        this.anticipo = parseFloat(anticipo);
        this.resultado1;
        this.resultado2;
        this.resultado3;
    }
    cuotas12() {
        this.resultado1 = this.precio - this.anticipo;
        this.resultado1 = this.resultado1 * tazasInteres[0];
        this.resultado1 = this.resultado1 / 12;
    }
    cuotas18() {
        this.resultado2 = this.precio - this.anticipo;
        this.resultado2 = this.resultado2 * tazasInteres[1];
        this.resultado2 = this.resultado2 / 18;
    }
    cuotas24() {
        this.resultado3 = this.precio - this.anticipo;
        this.resultado3 = this.resultado3 * tazasInteres[2];
        this.resultado3 = this.resultado3 / 24;
    }
    mostrar() {
        this.cuotas12();
        this.cuotas18();
        this.cuotas24();
        alert(`La financiacion para el importe y anticipo elejido es:\n12 cuotas de $${this.resultado1}\n18 cuotas de $${this.resultado2}\n24 cuotas de $${this.resultado3}`);
    }
}
class Moto {
    constructor(nombre, precio, tipo, marca) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.tipo = tipo.toUpperCase();
        this.marca = marca.toUpperCase();

    }
    precioDolares() {
        if (this.marca == 'KAWASAKI') {
            return true;
        } else {
            return false;
        }
    }
}
function pedirAnticipo(precio, marca, nombre) {

    anticipo = parseFloat(prompt(`Seleccionaste ${marca} ${nombre}\nEl precio es de $${precio}.\nSi desea entregar un anticipo ingreseló, sino ingrese "0"`));
}
function malAnticipo(anticipo, precio) {
    if (anticipo > precio || isNaN(anticipo) || anticipo < 0) {

        return true;

    }
    return false;
}
function contarNum(inicio, fin) {
    const arrAux = [];
    for (i = inicio; i <= fin; i++) {
        arrAux.push(i)
    }
    return arrAux;
}
function simularCuotas(i, motos) {
    let seleccion = motos[i];

    for (let i = 1; i > 0; i++) {
        pedirAnticipo(seleccion.precio, seleccion.marca, seleccion.nombre);
        if (malAnticipo(anticipo, seleccion.precio)) {
            alert('Su anticípo no es válido.\nLos carácteres disponibles para esta opcion son:\n' + caracterNum.join(", "));
            continue;
        }
        break;
    }
    let simulador = new Simulador(seleccion.precio, anticipo);
    simulador.mostrar();
}
function agregarMotos(array){
    array.push(new Moto('Titan', '460000', 'street', 'honda')),
(new Moto('cb 250', '690000', 'street', 'honda')),
(new Moto('glh 150', '315000', 'street', 'honda')),
(new Moto('mt-03', '1500000', 'street', 'yamaha')),
(new Moto('fzfi d', '542000', 'street', 'yamaha')),
(new Moto('ybr 125', '412000', 'street', 'yamaha')),
(new Moto('milano 150', '291000', 'scooter', 'corven')),
(new Moto('nm x 155', '867000', 'scooter', 'yamaha')),
(new Moto('fascino 125', '472600', 'scooter', 'yamaha')),
(new Moto('pcx 150', '770000', 'scooter', 'honda')),
(new Moto('exclusive 150', '320000', 'scooter', 'zanella')),
(new Moto('zr 115', '404000', 'scooter', 'yamaha')),
(new Moto('xtz 125', '586000', 'on/off', 'yamaha')),
(new Moto('klx 300', '13000', 'on/off', 'kawasaki')),
(new Moto('tornado', '880000', 'on/off', 'honda')),
(new Moto('klx 150', '7000', 'on/off', 'kawasaki')),
(new Moto('xr 150', '460000', 'on/off', 'honda')),
(new Moto('xtz 250 abs', '997000', 'on/off', 'yamaha')),
(new Moto('blitz 110', '130000', 'cub', 'Motomel')),
(new Moto('energy 110', '130000', 'cub', 'corven')),
(new Moto('mirage 110', '128600', 'cub', 'corven')),
(new Moto('wave 110', '220000', 'cub', 'honda')),
(new Moto('crypton 110', '334600', 'cub', 'yamaha')),
(new Moto('zb 110', '132000', 'cub', 'zanella'));

}
function mostrarMotosEnHtml(){
    let titulo= document.querySelector('#titulo');
    let productosTipo = document.querySelectorAll(".artChino h4");
    let productosTexto = document.querySelectorAll(".artChino h2");
    if(titulo.innerText == 'Populares'){
        
        let iTipo = 0;
        for (const tipo of productosTipo) {
            tipo.innerText = `${motosPopulares[iTipo].tipo}`;
            iTipo++;

            }
        
        let iTexto = 0;
        for (const texto of productosTexto) {
            if (motosPopulares[iTexto].precioDolares()) {
                texto.innerText = `${motosPopulares[iTexto].marca}\n${motosPopulares[iTexto].nombre}\nUS$${motosPopulares[iTexto].precio}`;

            } else {
                texto.innerText = `${motosPopulares[iTexto].marca}\n${motosPopulares[iTexto].nombre}\n$${motosPopulares[iTexto].precio}`;
            }
            iTexto++;
        }
    }
    if(titulo.innerText == 'Street'){
        const filtro=motos.filter((el)=> el.tipo.includes('STREET'));
        let iTipo = 0;
        for (const tipo of productosTipo) {
            tipo.innerText = `${filtro[iTipo].tipo}`;
            iTipo++;

            }
        
        let iTexto = 0;
        for (const texto of productosTexto) {
            if (street[iTexto].precioDolares()) {
                texto.innerText = `${filtro[iTexto].marca}\n${street[iTexto].nombre}\nUS$${street[iTexto].precio}`;

            } else {
                texto.innerText = `${filtro[iTexto].marca}\n${street[iTexto].nombre}\n$${street[iTexto].precio}`;
            }
            iTexto++;
        } 
    }
    if(titulo.innerText == 'Scooter'){
        const filtro=motos.filter((el)=> el.tipo.includes('SCOOTER'));
        let iTipo = 0;
        for (const tipo of productosTipo) {
            tipo.innerText = `${filtro[iTipo].tipo}`;
            iTipo++;

            }
        
        let iTexto = 0;
        for (const texto of productosTexto) {
            if (street[iTexto].precioDolares()) {
                texto.innerText = `${filtro[iTexto].marca}\n${filtro[iTexto].nombre}\nUS$${filtro[iTexto].precio}`;

            } else {
                texto.innerText = `${filtro[iTexto].marca}\n${filtro[iTexto].nombre}\n$${filtro[iTexto].precio}`;
            }
            iTexto++;
        } 
    }
    if(titulo.innerText == 'Cub'){
        const filtro=motos.filter((el)=> el.tipo.includes('CUB'));
        let iTipo = 0;
        for (const tipo of productosTipo) {
            tipo.innerText = `${filtro[iTipo].tipo}`;
            iTipo++;

            }
        
        let iTexto = 0;
        for (const texto of productosTexto) {
            if (street[iTexto].precioDolares()) {
                texto.innerText = `${filtro[iTexto].marca}\n${filtro[iTexto].nombre}\nUS$${filtro[iTexto].precio}`;

            } else {
                texto.innerText = `${filtro[iTexto].marca}\n${filtro[iTexto].nombre}\n$${filtro[iTexto].precio}`;
            }
            iTexto++;
        } 
    }
    if(titulo.innerText == 'ON/OFF'){
        const filtro=motos.filter((el)=> el.tipo.includes('ON/OFF'));
        let iTipo = 0;
        for (const tipo of productosTipo) {
            tipo.innerText = `${filtro[iTipo].tipo}`;
            iTipo++;

            }
        
        let iTexto = 0;
        for (const texto of productosTexto) {
            if (street[iTexto].precioDolares()) {
                texto.innerText = `${filtro[iTexto].marca}\n${filtro[iTexto].nombre}\nUS$${filtro[iTexto].precio}`;

            } else {
                texto.innerText = `${filtro[iTexto].marca}\n${filtro[iTexto].nombre}\n$${filtro[iTexto].precio}`;
            }
            iTexto++;
        } 
    }
    if(titulo.innerText== 'Todas'){
        let iTipo = 0;
        for (const tipo of productosTipo) {
            tipo.innerText = `${motos[iTipo].tipo}`;
            iTipo++;

            }
        
        let iTexto = 0;
        for (const texto of productosTexto) {
            if (motos[iTexto].precioDolares()) {
                texto.innerText = `${motos[iTexto].marca}\n${motos[iTexto].nombre}\nUS$${motos[iTexto].precio}`;

            } else {
                texto.innerText = `${motos[iTexto].marca}\n${motos[iTexto].nombre}\n$${motos[iTexto].precio}`;
            }
            iTexto++;
        } 
    }
}


// TAZAS DE INTERES
const tazasInteres = [1.25, 1.35, 1.45]
// TODOS LOS PRODUCTOS
const motos=[];
agregarMotos(motos);








//  START MOTOS QUE EL CLIENTE ELIJE MOSTRAR EN INICIO
const motosPopulares=[];


motosPopulares.push(new Moto('Titan', '460000', 'calle', 'honda'));

motosPopulares.push(new Moto('klx 300', '13000', 'on/off', 'kawasaki'));

motosPopulares.push(new Moto('Fascino 125', '472600', 'scooter', 'yamaha'));
motosPopulares.push(new Moto('wave 110', '220000', 'cub', 'honda'));
motosPopulares.push(new Moto('fzfi d', '542600', 'calle', 'yamaha'));
motosPopulares.push(new Moto('xtz 250', '997000', 'onoff', 'yamaha'));
// END MOTOS POPULARES

// const caracterNum = contarNum(0, 9);

mostrarMotosEnHtml();
// evento
let simulaciones = document.querySelectorAll(".artChino .imgproducto");
let iSimulacion = 0
for (const simulacion of simulaciones) {

    simulacion.onclick = () => {console.log('DESAFIO AGREGAR EVENTOS. ')};

    // simulacion.onclick = simularCuotas(iSimulacion,motosPopulares);
    iSimulacion++;


}


let titulo= document.querySelector('#titulo');

console.log(titulo.innerText == 'Populares');