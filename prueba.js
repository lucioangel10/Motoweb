
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
    precioDolares() {
        if(this.marca=='KAWASAKI'){
            return true;
        }else{
            return false;
        }
    }
}
function pedirAnticipo(precio) {

    anticipo = parseFloat(prompt(`El precio del modelo seleccionado es de $${precio}.\nSi desea entregar un anticipo ingreseló, sino ingrese "0"`));
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
function simularCuotas(i){
    let seleccion = motos[i];
    alert(`Clickeaste sobre ${seleccion.marca} ${seleccion.nombre}\nSu precio es `)
    for (let i = 1; i > 0; i++) {
        pedirAnticipo(seleccion.precio);
        if (malAnticipo(anticipo, seleccion.precio)) {
            alert('Su anticípo no es válido.\nLos carácteres disponibles para esta opcion son:\n' + caracterNum.join(", "));
            continue;
        }
        break;
    }
    let simulador = new Simulador(seleccion.precio, anticipo);
    simulador.mostrar();
}

const tazasInteres = [1.25, 1.35, 1.45]
const motosPopulares = []


motosPopulares.push(new Moto('Titan', '460000', 'calle', 'honda'));

motosPopulares.push(new Moto('klx 300', '13000', 'on/off', 'kawasaki'));

motosPopulares.push(new Moto('Fascino 125', '472600', 'scooter', 'yamaha'));
motosPopulares.push(new Moto('wave 110', '220000', 'cub', 'honda'));
motosPopulares.push(new Moto('fzfi d', '542600', 'calle', 'yamaha'));
motosPopulares.push(new Moto('xtz 250', '997000', 'onoff', 'yamaha'));


let productosTipo= document.querySelectorAll(".artChino h4");
let iTipo=0;
for(const tipo of productosTipo){
    tipo.innerText=`${motosPopulares[iTipo].tipo}`;
    iTipo++;

}
let productosTexto= document.querySelectorAll(".artChino h2");
let iTexto=0;
for(const texto of productosTexto){
    if(motosPopulares[iTexto].precioDolares()){
        texto.innerText=`${motosPopulares[iTexto].marca}\n${motosPopulares[iTexto].nombre}\nUS$${motosPopulares[iTexto].precio}`;

    }else{
        texto.innerText=`${motosPopulares[iTexto].marca}\n${motosPopulares[iTexto].nombre}\n$${motosPopulares[iTexto].precio}`;
    }
    iTexto++;    
}
// evento
let simulaciones= document.querySelectorAll(".artChino imgproducto");
let iSimulacion= 0
for (const simulacion of simulaciones){
    if(motosPopulares[iSimulacion].marca != 'KAWASAKI' ){
        simulacion.onclick = simularCuotas(iSimulacion);
        iSimulacion++;
    }else{
        simulacion.onclick = alert(`La moto seleccionada no dispone de financiacion, ya que se vende unicamente al contado.`);    }
    
}
