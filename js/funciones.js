// es un codigo que aislamos y lo invocamos cuando nuestro programan lo necesita
//no importa donde se defina la funcion dentro del scipt porque lo mismo se ejecutará
//funcion sin parametros(que no tiene ni necesita nada andentro de los parentesis)
function saludar(){
    //todo el codigo que quiero que tenga esta funcion
    document.write('<p>Hola Mundo!</p>')
}

//invocar o llamar a una función
saludar();



//funcion con parámetros
function saludoNuevo(nombre,apellido){
    document.write(`<p>Hola, mi nombre es ${nombre}, mi apellido es ${apellido} </p>`)
}

let nombreIngresado = prompt('Ingrese un nombre');
let apellidoIngresado = prompt('Ingrese un apellido');

saludoNuevo(nombreIngresado,apellidoIngresado);


/*funciones que retornan un valor*/

// funcion tradicional 
// function convertirDolaresAPesos(dolares){
//     let precioFinal = dolares * 301;
//     return precioFinal;
// }
let play = convertirDolaresAPesos(800);
console.log(play);
document.write(`<p>AMD Ryzen 9 $${convertirDolaresAPesos(550)} sin impuestos.</p>`);
// funcion arrow o flecha 
let convertirDolaresAPesos = dolares => dolares * 301
