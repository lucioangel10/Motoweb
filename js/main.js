const tazasInteres= [1.25, 1.35, 1.45]
const motos=[]


// cotizador de cuotas
class Simulador{
    constructor(precio, anticipo){
        this.precio= parseFloat(precio);
        this.anticipo= parseFloat(anticipo);   
        this.resultado1;
        this.resultado2;
        this.resultado3;
    }
    cuotas12(){
        this.resultado1= this.precio-this.anticipo;
        this.resultado1= this.resultado1 * tazasInteres[0];
        this.resultado1= this.resultado1/12;
    }
    cuotas18(){
        this.resultado2= this.precio-this.anticipo;
        this.resultado2= this.resultado2 * tazasInteres[1];
        this.resultado2= this.resultado2/18;
    }
    cuotas24(){
        this.resultado3= this.precio-this.anticipo;
        this.resultado3= this.resultado3 * tazasInteres[2];
        this.resultado3= this.resultado3/24;
    }
    mostrar(){
        this.cuotas12();
        this.cuotas18();
        this.cuotas24();
        alert(`La financiacion para el importe y anticipo elejido es:\n12 cuotas de $${this.resultado1}\n18 cuotas de $${this.resultado2}\n24 cuotas de $${this.resultado3}`);
    }
}
class Moto{
    constructor(nombre, precio, tipo, marca){
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
        this.tipo= tipo.toUpperCase();
        this.marca=marca.toUpperCase();

    }
    
}
motos.push(new Moto('Tornado', '880000', 'onoff','Honda'));
motos.push(new Moto('Cg titan', '460000', 'calle','honda'));

motos.push(new Moto('wave 110', '220000', 'cub','honda'));

motos.push(new Moto('fascino 125', '472600', 'scooter','yamaha'));

motos.push(new Moto('fz-s fi d', '542600', 'calle','yamaha'));
motos.push(new Moto('xtz 250 abs', '997000', 'onoff','yamaha'));



function pedirDatos() {
     precio=prompt('Ingrese valor de la moto deseada:');
     anticipo=prompt('Si desea entregar un anticipo ingreseló, sino ingrese el numero 0');
}
function corroborarDatos(precio, anticipo) {
    let resultado1=isNaN(precio);
    let resultado2=isNaN(anticipo);
    if(resultado1==false && resultado2==false && resultado1!=null && precio>anticipo && resultado1>0 && resultado2>=0){
        return true;
    }else{
    return false;
}
}



// let precio;
// let anticipo;

// for(let i=1; i>0;i++){

// pedirDatos();

// let corroborar=corroborarDatos(precio, anticipo);
// if(corroborar==true){
//     let simulador= new Simulador(precio, anticipo);
//     simulador.mostrar();
// }else if(corroborar==false){
//     alert('Los valores ingresados no son correctos.\nPresiona "Aceptar" para volver a simular.')
// }
// }
