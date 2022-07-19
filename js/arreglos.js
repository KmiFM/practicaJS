//crear un arreglo vacio
let listaSupermercado=[];

//crear un arreglo con datos
let series = ['peaky blinders', 7, 'stranger things', 4, 'the boys',3,'loki'];

//mostrar un arreglo
document.write(series);

//mostrar un elemento del arreglo
document.write('<br>'+series[0]);

//mostrar arreglo en lista


document.write(`<ul>`);

for(let indice=0; indice < series.length ; indice++){
document.write(`<li>${series[indice]}</li>`)
}
document.write(`</ul>`);


//agregar un elemento nuevo al arreglo al final
series.push('Rick and Morty');

document.write('<h3>Agregamos un nuevo elemento al final del arreglo</h3>');
document.write(`<ul>`);

for(let indice=0; indice < series.length ; indice++){
document.write(`<li>${series[indice]}</li>`)
}
document.write(`</ul>`);


series.splice(2,0,'The Whitcher'); //(posicion del elemento, cantidad de elementos a borrar, item que vamos a agregar)

document.write('<h3>Agregamos un nuevo elemento en una posicion particular</h3>');
document.write(`<ul>`);

for(let indice=0; indice < series.length ; indice++){
document.write(`<li>${series[indice]}</li>`)
}
document.write(`</ul>`);

//eliminar elementos
series.splice(4,1); //(posicion del elemento, cantidad de elementos a borrar)

document.write('<h3>Eliminar un elemento de una posicion particular</h3>');
document.write(`<ul>`);

for(let indice=0; indice < series.length ; indice++){
document.write(`<li>${series[indice]}</li>`)
}
document.write(`</ul>`);


//eliminar varios elementos 

// series.splice(5) //borra todo desde el cinco en adelante


//modificar elementos de un arreglo (se coloca la posicion a cambiar entre [])
series[1] = 'Suits';
document.write('<h3>Modificar el elemento 1</h3>');
document.write(`<ul>`);

for(let indice=0; indice < series.length ; indice++){
document.write(`<li>${series[indice]}</li>`)
}
document.write(`</ul>`);


