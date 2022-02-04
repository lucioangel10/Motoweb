

   


// cotizador de cuotas
class Simulador {
    constructor(precio, anticipo) {
        this.precio=precio;
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

}
function pedirMoto() {
    ingreso = prompt('Ingrese el modelo que desea cotizar:');
    ingreso = ingreso.toUpperCase();
}
function pedirAnticipo() {

    anticipo = parseFloat(prompt('Si desea entregar un anticipo ingreseló, sino ingrese "0"'));
}
function malAnticipo(anticipo, precio){
    if(anticipo>precio || isNaN(anticipo) || anticipo<0){
       
        return true;

    }
    return false;
}
function contarNum(inicio,fin){
    const arrAux=[];
    for(i=inicio;i<=fin;i++){
        arrAux.push(i)
    }
    return arrAux;
}




const tazasInteres = [1.25, 1.35, 1.45]
const motos = []

motos.push(new Moto('Tornado', '880000', 'onoff', 'Honda'));
motos.push(new Moto('Titan', '460000', 'calle', 'honda'));

motos.push(new Moto('wave', '220000', 'cub', 'honda'));

motos.push(new Moto('Fascino', '472600', 'scooter', 'yamaha'));

motos.push(new Moto('fzfi d', '542600', 'calle', 'yamaha'));
motos.push(new Moto('xtz 250', '997000', 'onoff', 'yamaha'));

let ingreso;
let anticipo;
const caracterNum=contarNum(0,9);


const arrayNombre=motos.map((el)=>el.nombre);






    
for (let i = 1; i > 0; i++) {
    pedirMoto();
    let verificarMoto = motos.some((el) => el.nombre == ingreso);
    if (verificarMoto == false) {
        alert('Los valores ingresados no se han encontrado o no son validos.\nModelos válidos:\n' + arrayNombre.join(", "));
        continue;
    }
    let seleccion = motos.find((el) => el.nombre.includes(ingreso));
    for (let i = 1; i > 0; i++) {
        pedirAnticipo();
        if (malAnticipo(anticipo, seleccion.precio)) {
            alert('Su anticípo no es válido.\nLos carácteres disponibles para esta opcion son:\n' + caracterNum.join(", "));
            continue;
        }
        break;
    }
    let simulador = new Simulador(seleccion.precio, anticipo);
    simulador.mostrar();
}
